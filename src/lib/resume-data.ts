export interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string | string[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export const summary =
  "CS student at Cornell (B.E., May 2026). Full-stack developer and AI builder with experience shipping embedded flight software, production web apps, and ML pipelines. Multiple-time founder.";

export const experience: TimelineItem[] = [
  {
    period: "Dec 2024 — Jun 2025",
    title: "Material Handler",
    organization: "East Penn Manufacturing",
    description:
      "Executed warehouse operations including order packing and fulfillment. Interacted with customers across Colorado.",
  },
  {
    period: "Dec 2021 — Sep 2024",
    title: "Co-Founder",
    organization: "LifeTote",
    description: [
      "Prototyped and engineered a convertible tote bag that rapidly transforms into a bulletproof vest.",
      "Negotiated with suppliers and manufacturers to cut costs 60% and shorten lead times.",
      "Launched website and Kickstarter, secured patent protection, and scaled revenue to $50k.",
    ],
  },
  {
    period: "Sep 2021 — May 2024",
    title: "Recovery & Payload Team",
    organization: "Cornell Rocketry",
    description: [
      "Engineered autopilot flight software integrating GPS, altimeter, compass, and accelerometer data to guide payload recovery to a predefined landing zone.",
      "Designed and implemented a solar panel deployment and positioning system to recharge flight batteries.",
      "Competed at the Spaceport America Cup.",
    ],
  },
  {
    period: "Feb 2020 — Jan 2021",
    title: "Founder",
    organization: "Versa Finance",
    description: [
      "Prototyped personal finance app leveraging bank account data, ML, and behavioral psychology to curb spending and increase savings.",
      "Led a team of 12 building a business plan, marketing plan, and ML bank statement analysis.",
    ],
  },
  {
    period: "Aug 2019 — May 2020",
    title: "Founder",
    organization: "Infrared Air",
    description: [
      "Engineered a drone platform integrating RGB and thermal imaging to identify and diagnose defective solar cells.",
      "Conducted inspections of 100+ residential and commercial solar arrays.",
    ],
  },
];

export const education: TimelineItem[] = [
  {
    period: "2021 — May 2026",
    title: "B.E. Computer Science",
    organization: "Cornell University, College of Engineering",
    description:
      "Relevant experience: Cornell Rocketry (Recovery & Payload), Solid-Guard ML project, Clairvoyant Crime Detection.",
  },
];

export const leadership: TimelineItem[] = [
  {
    period: "Aug 2019 — May 2020",
    title: "Founder",
    organization: "Flight Discovery Program",
    description:
      "Designed hands-on school curriculum in flight; taught fifth-grade classes aerodynamics, drone piloting, and rocketry culminating in student-designed rocket launches.",
  },
  {
    period: "Apr 2019 — Jun 2019",
    title: "Founder",
    organization: "Light My Fire Camp",
    description:
      "Founded a camp matching middle school students with high schoolers to collaborate on self-chosen projects. Fundraised to make participation fully free for all accepted students.",
  },
];

export const skillGroups: SkillGroup[] = [
  { label: "Languages", skills: ["Python", "Java", "TypeScript", "C++", "OCaml", "Solidity"] },
  { label: "Frontend", skills: ["React", "Tailwind CSS", "Vite", "Figma"] },
  { label: "Backend", skills: ["Node.js", "FastAPI", "PostgreSQL", "Docker"] },
  { label: "AI / ML", skills: ["PyTorch", "TensorFlow", "Scikit-learn", "RAG", "Agentic AI", "OpenCV"] },
];
