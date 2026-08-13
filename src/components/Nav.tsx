import { ArrowUpRight } from "lucide-react";
import ModeSwitch from "./ModeSwitch";
import type { Mode } from "../data/content";

export default function Nav({ mode, onChange }: { mode: Mode; onChange: (m: Mode) => void }) {
  return <header className="nav">
    <a href="#top" className="logo" data-cursor="TOP">SAMAYRAN<span>.</span></a>
    <nav className="nav-links">
      <a href="#work" data-cursor="GO">WORK</a>
      <a href="#about" data-cursor="GO">ABOUT</a>
      <a href="#contact" data-cursor="GO">CONTACT</a>
    </nav>
    <div className="nav-right">
      <ModeSwitch mode={mode} onChange={onChange} />
      <a className="nav-arrow" href="#contact" aria-label="Contact" data-cursor="OPEN"><ArrowUpRight size={18}/></a>
    </div>
  </header>;
}