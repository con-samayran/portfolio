import { useEffect, useState } from "react";
import type { Mode } from "../data/content";

export function useMode(): [Mode, (mode: Mode) => void] {
  const read = (): Mode => window.location.hash === "#video" ? "video" : "uiux";
  const [mode, setMode] = useState<Mode>(read);

  useEffect(() => {
    const onHash = () => setMode(read());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const change = (next: Mode) => {
    window.location.hash = next === "uiux" ? "uiux" : "video";
    setMode(next);
  };

  return [mode, change];
}