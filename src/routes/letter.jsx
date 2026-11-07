import { createFileRoute } from "@tanstack/react-router";
import LetterScene from "@/components/diwali/LetterScene";

export const Route = createFileRoute("/letter")({
  head: () => ({
    meta: [
      { title: "A Letter for Somya" },
      { name: "description", content: "A handwritten Diwali letter from Yuvi, sealed with gold wax, for Somya." },
    ],
  }),
  component: LetterPage,
});

function LetterPage() {
  return <LetterScene />;
}