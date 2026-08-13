export type Mode = "video" | "uiux";

export const videoProjects = [
  { title: "Neon After Dark", type: "Short-form / Motion", description: "Fast-cut social edit built around rhythm, impact frames and controlled chaos.", software: "Premiere Pro · After Effects", tag: "01", tone: "violet" },
  { title: "Signal / 24", type: "YouTube / Story", description: "A cinematic tech story shaped around pacing, sound design and visual hierarchy.", software: "Premiere Pro · Photoshop", tag: "02", tone: "orange" },
  { title: "Velocity", type: "Promo / Social", description: "A punchy product promo where typography becomes part of the edit.", software: "After Effects · Premiere Pro", tag: "03", tone: "cyan" },
  { title: "Afterimage", type: "Motion Graphics", description: "Experimental motion study mixing editorial cuts with graphic transitions.", software: "After Effects · DaVinci Resolve", tag: "04", tone: "pink" }
];

export const uiProjects = [
  { title: "Avero", type: "Focus / Productivity", problem: "Focus tools often feel like punishment.", solution: "Turned progress into a lightweight game loop with clear, tactile feedback.", role: "Product Designer", tools: "Figma · FigJam", outcome: "A focused mobile experience designed around momentum.", tag: "01" },
  { title: "Famwish", type: "Social Impact Platform", problem: "Giving platforms can feel transactional and cold.", solution: "Created a warmer flow around discovery, trust and meaningful action.", role: "UI/UX · Product", tools: "Figma · Photoshop", outcome: "A visual system that makes contribution feel human.", tag: "02" },
  { title: "Xayven", type: "Desktop AI Assistant", problem: "Powerful automation tools can feel fragmented.", solution: "Designed one visual command surface for telemetry, actions and AI.", role: "Product Designer", tools: "Figma · FigJam", outcome: "A cohesive control experience for desktop + mobile.", tag: "03" },
  { title: "OURO", type: "Music Concept", problem: "Playlists rarely communicate the feeling of an album journey.", solution: "Explored spatial hierarchy, mood and contextual navigation.", role: "Concept / UX", tools: "Figma · Illustrator", outcome: "A music interface that treats sequencing as a visual experience.", tag: "04" }
];

export const process = ["Research", "Define", "Wireframe", "Prototype", "Test", "Ship"];