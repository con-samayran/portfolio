import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Play, MousePointer2, PenTool, Film } from "lucide-react";
import type { Mode } from "../data/content";

export default function Visual2D({ mode }: { mode: Mode }) {
  const mx = useMotionValue(0), my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 }), sy = useSpring(my, { stiffness: 80, damping: 20 });
  const rx = useTransform(sy, [-1, 1], [3, -3]), ry = useTransform(sx, [-1, 1], [-4, 4]);

  return <div className={`visual-2d ${mode}`} onMouseMove={e => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width * 2 - 1); my.set((e.clientY - r.top) / r.height * 2 - 1);
  }} onMouseLeave={() => { mx.set(0); my.set(0); }}>
    <motion.div className="impact-frame" style={{ rotateX: rx, rotateY: ry }}>
      <div className="speed-lines" />
      <div className="avatar-head"><span className="eye e1"/><span className="eye e2"/><span className="hair"/><span className="face-mark">+</span></div>
      <motion.div className="float-card card-a" animate={{ y: [0, -8, 0], rotate: [-2, 1, -2] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
        {mode === "video" ? <Film size={16}/> : <PenTool size={16}/>} <span>{mode === "video" ? "CUT / MOVE" : "FRAME / THINK"}</span>
      </motion.div>
      <motion.div className="float-card card-b" animate={{ y: [0, 7, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}>
        {mode === "video" ? <Play size={15}/> : <MousePointer2 size={15}/>} <span>{mode === "video" ? "00:24:18" : "AUTO LAYOUT"}</span>
      </motion.div>
      <div className="j-mark">サ<br/>M</div>
    </motion.div>
  </div>;
}