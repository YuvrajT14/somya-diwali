import { createFileRoute } from "@tanstack/react-router";
import DiyasScene from "@/components/diwali/DiyasScene";

export const Route = createFileRoute("/diyas")({
  head: () => ({
    meta: [
      { title: "Light Up the Diyas · For Somya" },
      { name: "description", content: "Six diyas for Somya — Joy, Peace, Love, Magic, Smiles and Dreams." },
    ],
  }),
  component: DiyasPage,
});

function DiyasPage() {
  return <DiyasScene />;
}