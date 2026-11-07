import { useEffect, useRef } from "react";

const COLORS = ["#FFD98A", "#F6B9CE", "#CDA8F5", "#FFF0D2", "#FFB79B", "#ECA9D6"];
const TAU = Math.PI * 2;

const rand = (min, max) => Math.random() * (max - min) + min;

export default function Fireworks({ trigger = 0 }) {
  const canvasRef = useRef(null);
  const apiRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext("2d");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let raf = 0;
    let lastLaunch = 0;
    const rockets = [];
    const particles = [];

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const explode = (x, y, scale = 1) => {
      const count = Math.round((reduced ? 26 : 52) * scale);
      const c1 = COLORS[Math.floor(Math.random() * COLORS.length)];
      const c2 = COLORS[Math.floor(Math.random() * COLORS.length)];
      for (let i = 0; i < count; i += 1) {
        const angle = (i / count) * TAU + rand(-0.06, 0.06);
        const speed = rand(0.9, 4.2) * scale;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: rand(0.007, 0.014),
          color: i % 2 === 0 ? c1 : c2,
          size: rand(1.1, 2.4) * (scale > 1.3 ? 1.2 : 1),
        });
      }
    };

    const launch = (fromX) => {
      if (!width || !height) return;
      rockets.push({
        x: fromX ?? rand(width * 0.15, width * 0.85),
        y: height + 6,
        vx: rand(-0.3, 0.3),
        vy: -rand(7.5, 10.5) * (reduced ? 0.7 : 1),
        targetY: rand(height * 0.1, height * 0.42),
      });
    };

    const burst = (count = 4) => {
      for (let i = 0; i < count; i += 1) {
        window.setTimeout(() => {
          explode(width * rand(0.2, 0.8), height * rand(0.14, 0.4), 1.5);
        }, i * 280);
        launch(width * (0.18 + (i / Math.max(count, 1)) * 0.64));
      }
    };

    apiRef.current = { burst };

    const frame = (time) => {
      raf = window.requestAnimationFrame(frame);
      if (!lastLaunch) lastLaunch = time;
      if (time - lastLaunch > (reduced ? 3800 : 1700) && rockets.length < 4) {
        launch();
        lastLaunch = time;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      for (let i = rockets.length - 1; i >= 0; i -= 1) {
        const r = rockets[i];
        r.x += r.vx;
        r.y += r.vy;
        r.vy += 0.075;
        ctx.globalAlpha = 0.75;
        ctx.fillStyle = "#FFEAC0";
        ctx.beginPath();
        ctx.arc(r.x, r.y, 1.8, 0, TAU);
        ctx.fill();
        ctx.globalAlpha = 0.25;
        ctx.beginPath();
        ctx.arc(r.x, r.y + 7, 1.1, 0, TAU);
        ctx.fill();
        if (r.y <= r.targetY || r.vy > -0.4) {
          explode(r.x, r.y, 1);
          rockets.splice(i, 1);
        }
      }

      for (let i = particles.length - 1; i >= 0; i -= 1) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.985;
        p.vy = p.vy * 0.985 + 0.026;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(p.life * 0.22, 0);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 2.8, 0, TAU);
        ctx.fill();
        ctx.globalAlpha = Math.max(p.life, 0);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, TAU);
        ctx.fill();
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
    };

    resize();
    window.addEventListener("resize", resize);
    raf = window.requestAnimationFrame(frame);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      apiRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!trigger) return;
    apiRef.current?.burst(4);
  }, [trigger]);

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />;
}