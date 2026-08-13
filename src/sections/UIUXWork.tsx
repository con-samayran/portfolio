import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "../components/Reveal";
import { process, uiProjects } from "../data/content";

export default function UIUXWork() {
  return <section id="work" className="section work ui-work">
    <Reveal><div className="section-top"><p className="eyebrow">SELECTED WORK / UI/UX</p><span>04 CASE STUDIES</span></div><h2>DESIGN WITH<br/><em>INTENT.</em></h2></Reveal>
    <div className="case-grid">{uiProjects.map((p,i)=><Reveal key={p.title} delay={i*.05}><motion.article className="case-card" whileHover={{y:-7}} data-cursor="VIEW">
      <div className={`case-art case-${i+1}`}><span>{p.tag}</span><div className="mock-window"><div/><div/><div/><strong>{p.title}</strong><small>{p.type}</small></div></div>
      <div className="case-info"><div><p className="small">{p.type}</p><h3>{p.title}</h3></div><ArrowUpRight size={19}/><div className="case-copy"><p><b>Problem</b>{p.problem}</p><p><b>Solution</b>{p.solution}</p><p><b>Outcome</b>{p.outcome}</p></div><div className="software">{p.role} · {p.tools}</div></div>
    </motion.article></Reveal>)}</div>
    <div className="process"><Reveal><p className="eyebrow">PROCESS / NO MAGIC TRICKS</p><h3>THINK → MAKE → <em>REFINE.</em></h3></Reveal><div className="process-line">{process.map((x,i)=><motion.div key={x} initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.08}}><span>0{i+1}</span><b>{x}</b></motion.div>)}</div></div>
    <div className="tools-row"><p className="eyebrow">TOOLS / DAILY KIT</p><div>{["FIGMA","FIGJAM","PHOTOSHOP","ILLUSTRATOR"].map((x,i)=><span key={x}><b>0{i+1}</b>{x}</span>)}</div></div>
  </section>;
}