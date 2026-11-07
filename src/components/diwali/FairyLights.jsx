const COUNT = 19;
const P0 = [0, 16];
const P1 = [50, 74];
const P2 = [100, 16];

function pointAt(t) {
  const x = (1 - t) * (1 - t) * P0[0] + 2 * (1 - t) * t * P1[0] + t * t * P2[0];
  const y = (1 - t) * (1 - t) * P0[1] + 2 * (1 - t) * t * P1[1] + t * t * P2[1];
  return [Number(x.toFixed(2)), Number(y.toFixed(2))];
}

const BULBS = Array.from({ length: COUNT }, (_, i) => {
  const [x, y] = pointAt((i + 0.5) / COUNT);
  return { x, y, delay: `${(-(i % 7) * 0.42).toFixed(2)}s`, scale: i % 3 === 0 ? 1.25 : 1 };
});

export default function FairyLights({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-x-0 top-0 h-20 sm:h-24 ${className}`}>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
        <path d="M0 16 Q50 74 100 16" stroke="rgba(183,110,121,0.35)" strokeWidth="0.35" vectorEffect="non-scaling-stroke" />
      </svg>
      {BULBS.map((b, i) => (
        <span
          key={i}
          className="fairy-bulb"
          style={{
            left: `${b.x}%`,
            top: `${b.y}%`,
            animationDelay: b.delay,
            transform: `scale(${b.scale})`,
          }}
        />
      ))}
    </div>
  );
}