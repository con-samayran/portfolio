import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState("");
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const target = (e.target as HTMLElement).closest("[data-cursor]");
      setLabel(target?.getAttribute("data-cursor") || "");
      setActive(!!target);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return null;

  return <motion.div
    className={`cursor ${active ? "cursor-active" : ""}`}
    animate={{ x: pos.x, y: pos.y }}
    transition={{ type: "spring", stiffness: 900, damping: 45, mass: 0.15 }}
  >
    {label}
  </motion.div>;
}