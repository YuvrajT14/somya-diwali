import { createFileRoute } from "@tanstack/react-router";
import FinaleScene from "@/components/diwali/FinaleScene";

export const Route = createFileRoute("/finale")({
  head: () => ({
    meta: [
      { title: "Happy Diwali, Somya!" },
      { name: "description", content: "A sky full of fireworks, and a wish made just for Somya." },
    ],
  }),
  component: FinalePage,
});

function FinalePage() {
  return <FinaleScene />;
}