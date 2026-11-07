import { createFileRoute } from "@tanstack/react-router";
import DiwaliHero from "@/components/diwali/DiwaliHero";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "A Little Diwali Magic for Somya" },
      {
        name: "description",
        content:
          "A personal Diwali surprise made for Somya — glowing diyas, a handwritten letter and a sky full of fireworks.",
      },
      { property: "og:title", content: "A Little Diwali Magic for Somya" },
      {
        property: "og:description",
        content: "A few small lights, one letter from Yuvi, and a sky full of fireworks — made for Somya.",
      },
    ],
  }),
  component: WelcomePage,
});

function WelcomePage() {
  return <DiwaliHero />;
}