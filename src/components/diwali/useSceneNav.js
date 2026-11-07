import { useCallback, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

let arriving = false;

export function peekArrival() {
  return arriving;
}

export function clearArrival() {
  arriving = false;
}

export function useSceneNav() {
  const navigate = useNavigate();
  const [leaving, setLeaving] = useState(false);

  const go = useCallback(
    (to) => {
      setLeaving(true);
      window.setTimeout(() => {
        arriving = true;
        navigate({ to });
        window.scrollTo(0, 0);
      }, 620);
    },
    [navigate]
  );

  return { go, leaving };
}