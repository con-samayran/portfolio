import { motion } from "framer-motion";
import type { Mode } from "../data/content";

export default function ModeSwitch({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  return <div className="mode-switch" data-cursor="SWITCH">
    <motion.div className="mode-pill" layout transition={{ type: "spring", stiffness: 500, damping: 35 }}
      style={{ left: mode === "video" ? 4 : "50%" }} />
    <button className={mode === "video" ? "active" : ""} onClick={() => onChange("video")}>VIDEO</button>
    <button className={mode === "uiux" ? "active" : ""} onClick={() => onChange("uiux")}>UI/UX</button>
  </div>;
}