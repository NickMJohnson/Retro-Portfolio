import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/ScrollReveal";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  tech: string[];
  categories: string[];
  demo?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Cornell Rocketry Autopilot",
    description: "GPS-guided parafoil autopilot running on embedded hardware, using sensor fusion of barometric and GPS altitude data to navigate a deployable glider back to a home coordinate.",
    tech: ["C++", "Arduino", "Embedded Systems", "GPS", "Sensor Fusion", "PID Control", "TinyGPS++", "PWM Servos"],
    categories: ["Systems"],
    demo: "https://nickmjohnson.github.io/Cornell-Rocketry-Autopilot/visualization.html",
    github: "https://github.com/NickMJohnson/Cornell-Rocketry-Autopilot",
  },
  {
    title: "BRB/USD Trading Platform",
    description: "Simulated cryptocurrency exchange in OCaml with a price-time priority order matching engine supporting partial fills. Users create accounts, deposit funds, and place buy/sell orders through an interactive CLI with live ASCII order book visualization and JSON-based persistent storage.",
    tech: ["OCaml", "Functional Programming", "Data Structures", "System Design", "Dune", "Yojson", "OUnit2", "Order Matching Engine"],
    categories: ["Systems"],
    github: "https://github.com/NickMJohnson/Auto-Market-Maker-3110",
  },
  {
    title: "RAG Course Tutor Chatbot",
    description: "Course tutor chatbot for Cornell's INFO 4940/5940 using Python Shiny and GPT-4.1-mini. Uses Retrieval-Augmented Generation to ground responses in course documents including the syllabus and homework assignments. Features a sidebar for help mode and language preference, with guardrails to guide rather than solve for students.",
    tech: ["Python", "OpenAI API", "RAG", "Python Shiny", "chatlas", "Posit Connect"],
    categories: ["AI/ML", "Web Dev"],
    github: "https://github.com/NickMJohnson/RAG-tutuor-bot/commits/main/",
  },
  {
    title: "Legalization Attitude Predictor",
    description: "Classification pipeline trained on General Social Survey data to predict public attitudes toward marijuana legalization. Compared Lasso, Elastic-Net, Random Forest, and Gradient Boosting models with hyperparameter tuning, class imbalance handling via downsampling, and evaluation across sensitivity, specificity, ROC AUC, and Brier score.",
    tech: ["Python", "scikit-learn", "imbalanced-learn", "NumPy", "Matplotlib", "GridSearchCV", "Logistic Regression", "Random Forest", "Gradient Boosting"],
    categories: ["AI/ML"],
    github: "https://github.com/NickMJohnson/hw-03-nmj37",
  },
  {
    title: "Coffee Preference Predictor",
    description: "Binary classification pipeline predicting whether survey respondents enjoy a specialty coffee, trained on the 2023 Great American Coffee Taste Test dataset. Compares logistic regression, random forest, and gradient boosting models using stratified cross-validation, with probability calibration and ROC/Brier score evaluation.",
    tech: ["Python", "scikit-learn", "Quarto", "Logistic Regression", "Random Forest", "Gradient Boosting", "Cross-Validation", "Model Calibration", "Feature Engineering"],
    categories: ["AI/ML"],
    github: "https://github.com/NickMJohnson/Coffee-predict",
  },
  {
    title: "NHANES Prediabetes Prediction API",
    description: "ML classifier predicting prediabetes likelihood from self-reported survey data, trained on 5,000+ CDC NHANES respondents. Evaluated four model families via stratified cross-validation, selecting a logistic regression pipeline deployed as a live REST API for use by clinics and community health programs.",
    tech: ["Python", "R", "scikit-learn", "FastAPI", "Vetiver", "Docker", "REST API", "Logistic Regression", "Machine Learning"],
    categories: ["AI/ML"],
    github: "https://github.com/NickMJohnson/proj-01-dank-corgi",
  },
  {
    title: "Image Eraser",
    description: "Click-to-remove object eraser using SAM for instant segmentation and Stable Diffusion inpainting to fill with realistic background.",
    tech: ["Python", "PyTorch", "Stable Diffusion", "Segment Anything", "Gradio", "HuggingFace"],
    categories: ["AI/ML"],
    github: "https://github.com/NickMJohnson/ImageEraser",
  },
  {
    title: "Distributed Key-Value Store",
    description: "Fault-tolerant distributed KV store implementing Raft consensus protocol.",
    tech: ["Go", "gRPC", "Docker"],
    categories: ["Systems"],
    github: "https://github.com/NickMJohnson/Keyval",
  },
  {
    title: "Image Search Engine",
    description: "Content-based image retrieval system using CLIP embeddings and approximate nearest neighbors.",
    tech: ["Python", "FAISS", "CLIP", "FastAPI"],
    categories: ["AI/ML"],
    github: "https://github.com",
  },
  {
    title: "Automatic Differentiation Engine",
    description: "Built a backpropagation engine from scratch in pure NumPy, implementing a computation graph with forward and backward passes. Verified correctness using numerical gradient checks.",
    tech: ["Python", "NumPy", "Automatic Differentiation", "Backpropagation", "Gradient Descent"],
    categories: ["AI/ML"],
    github: "https://github.com/NickMJohnson/Automatic-Differentiation-Engine.git",
  },
  {
    title: "Nick Johnson Portfolio",
    description: "This portfolio site — a retro-futuristic single-page app with featured project spotlights, an AI chat assistant trained on my background, contact form, and animated hero. Built with React, TypeScript, and Tailwind, deployed on Vercel with a serverless API layer.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Vercel", "Claude API", "Resend"],
    categories: ["Web Dev"],
    demo: "https://nickjohnson.site",
    github: "https://github.com/NickMJohnson/Retro-Portfolio",
  },
  {
    title: "LLM Policy Classification Benchmark",
    description: "Benchmarked a 3×3 grid of OpenAI models (GPT-4.1, GPT-5-nano, GPT-5) against naive, detailed, and chain-of-thought prompts on a U.S. legislative bill classification task using the Comparative Agendas Project taxonomy. Used batch inference to minimize cost and evaluated results across accuracy, macro F1, sensitivity, and specificity.",
    tech: ["Python", "OpenAI API", "Prompt Engineering", "Batch Inference", "chatlas", "scikit-learn", "Pandas"],
    categories: ["AI/ML"],
    github: "https://github.com/NickMJohnson/RAG-tutuor-bot/commits/main/",
  },
];

const categories = ["All", "AI/ML", "Web Dev", "Systems"];

const PAGE_SIZE = 6;

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === "All" ? projects : projects.filter((p) => p.categories.includes(activeCategory));
  const visible = showAll ? filtered : filtered.slice(0, PAGE_SIZE);
  const hasMore = filtered.length > PAGE_SIZE;

  return (
    <section id="projects">
      <div className="section-container">
        <ScrollReveal>
          <h2 className="section-heading"><span className="gradient-text">Projects</span></h2>
          <p className="section-subheading">// ls ~/projects</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setShowAll(false); }}
                className={cn(
                  "px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-all duration-300",
                  activeCategory === cat
                    ? "bg-primary/10 text-primary border border-primary shadow-[0_0_12px_hsla(var(--neon-cyan)/0.3)]"
                    : "text-muted-foreground border border-border hover:border-primary/50 hover:text-primary"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {visible.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.05}>
              <div className="group cyber-card h-full flex flex-col transition-all duration-300 hover:shadow-[0_0_20px_hsla(var(--neon-cyan)/0.15)]">
                <h3 className="font-semibold text-foreground mb-1.5 text-sm">{project.title}</h3>
                <p className="text-xs text-muted-foreground mb-4 flex-1 font-mono leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 font-mono text-accent-foreground bg-accent/10 border border-accent/20">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.demo && (
                    <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 font-mono text-xs" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-1" /> Demo
                      </a>
                    </Button>
                  )}
                  {project.github && (
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground font-mono text-xs" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3 mr-1" /> Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="px-6 py-2 text-xs font-mono uppercase tracking-wider border border-primary text-primary hover:bg-primary/10 transition-all duration-300"
            >
              {showAll ? "show_less()" : "load_more()"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
