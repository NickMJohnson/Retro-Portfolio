export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string | string[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface ResumeProject {
  period: string;
  title: string;
  tagline: string;
  tech: string[];
  link?: string;
}

export const summary =
  "Cornell CS graduate (B.E., 2026) and CTO of a stealth company building AI agents in healthcare. Full-stack developer and AI builder with experience shipping embedded flight software, production web apps, and ML pipelines. Multiple-time founder.";

export const experience: TimelineItem[] = [
  {
    period: "2026 — Present",
    title: "CTO",
    organization: "Stealth Company",
    description: [
      "Leading engineering and technical strategy for an early-stage company building AI agents in healthcare.",
    ],
  },
  {
    period: "Sep 2021 — May 2024",
    title: "Recovery & Payload Team",
    organization: "Cornell Rocketry",
    location: "Ithaca, NY",
    description: [
      "Engineered autopilot flight software integrating GPS, altimeter, compass, and accelerometer data to guide payload recovery to a predefined landing zone.",
      "Designed and implemented a solar panel deployment and positioning system to recharge flight batteries.",
      "Worked alongside a large team to win the Spaceport America Cup.",
    ],
  },
  {
    period: "Feb 2020 — Jan 2021",
    title: "Founder",
    organization: "Versa Finance",
    location: "San Francisco, CA",
    description: [
      "Prototyped personal finance app leveraging bank account data, ML, and behavioral psychology to curb spending and increase savings.",
      "Led a team of 12 building a business plan, marketing plan, psychological validation, and ML bank statement analysis.",
    ],
  },
  {
    period: "Aug 2019 — May 2020",
    title: "Founder",
    organization: "Infrared Air",
    location: "Boulder, CO",
    description: [
      "Engineered a drone platform integrating RGB and thermal imaging to identify and diagnose defective solar cells.",
      "Conducted inspections of 100+ residential and commercial solar arrays.",
    ],
  },
];

export const additionalExperience: TimelineItem[] = [
  {
    period: "Dec 2021 — Sep 2024",
    title: "Co-Founder",
    organization: "LifeTote",
    location: "Boulder, CO",
    description: [
      "Prototyped and engineered a convertible tote bag that rapidly transforms into a bulletproof vest.",
      "Negotiated with suppliers and local manufacturers to reduce cost and shorten lead times.",
      "Launched company website and Kickstarter campaign, developed business plan, and secured patent protection.",
      "Scaled revenue to $50k and improved product quality while cutting manufacturing costs by 60%.",
    ],
  },
  {
    period: "Dec 2024 — Jun 2025",
    title: "Material Handler",
    organization: "East Penn Manufacturing",
    location: "Boulder, CO",
    description:
      "Executed warehouse operations including order packing and fulfillment. Interacted with customers across Colorado.",
  },
];

export const education: TimelineItem[] = [
  {
    period: "May 2026",
    title: "B.E. Computer Science",
    organization: "Cornell University, College of Engineering",
    location: "Ithaca, NY",
    description: "Bachelor of Engineering, Computer Science.",
  },
];

export const leadership: TimelineItem[] = [
  {
    period: "Aug 2019 — May 2020",
    title: "Founder",
    organization: "Flight Discovery Program",
    location: "Lyons, CO",
    description: [
      "Designed hands-on school curriculum to educate and inspire students in the field of flight.",
      "Taught classes on aerodynamics, drone piloting, and rocketry, culminating in student-designed rocket launches.",
    ],
  },
  {
    period: "Apr 2019 — Jun 2019",
    title: "Founder",
    organization: "Light My Fire Camp",
    location: "Lyons, CO",
    description: [
      "Founded and organized a camp matching middle school students with high schoolers to collaborate on self-chosen projects.",
      "Fundraised to make camp participation and projects fully free for all accepted students.",
    ],
  },
];

export const projects: ResumeProject[] = [
  {
    period: "Jan 2026 — May 2026",
    title: "Clairvoyant Crime Detection",
    tagline:
      "AI-powered video surveillance search engine built with React, TypeScript, and FastAPI. Natural language queries across multi-camera feeds with sub-300ms retrieval via pgvector ANN search, plus a cross-camera entity re-identification system with confidence scoring and real-time clip playback.",
    tech: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "pgvector",
      "OpenCLIP",
      "React",
      "TypeScript",
      "Docker",
      "ffmpeg",
    ],
    link: "https://clairvoyant-rouge.vercel.app",
  },
  {
    period: "Sep 2025 — Jan 2026",
    title: "Solid-Guard",
    tagline:
      "Smart-contract security tool built for Cornell's Explorations in ML course. Engineered a reproducible dataset pipeline that generates paired malicious and safe Solidity contracts, runs Slither static analysis, and analyzes for common attack vulnerabilities.",
    tech: [
      "Python",
      "Solidity",
      "FastAPI",
      "OpenAI API",
      "RAG",
      "React",
      "TypeScript",
    ],
    link: "https://solidguard.vercel.app",
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", skills: ["Python", "TypeScript", "Java", "C++", "OCaml", "Solidity"] },
  { label: "Frontend", skills: ["React", "Tailwind CSS", "Vite", "Figma"] },
  { label: "Backend", skills: ["FastAPI", "Node.js", "PostgreSQL", "Docker"] },
  { label: "AI / ML", skills: ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "RAG"] },
];

export const interests: string[] = [
  "Rocketry",
  "Fixed-Wing FPV",
  "Drone Racing",
  "Guitar",
  "Boxing",
];
