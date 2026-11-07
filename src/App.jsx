
import "./App.css";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import MenuBar from "./components/menubar";
import Desktop from "./components/desktop";
import Finder from "./components/finder";
import Dock from "./components/dock";
import {
  ArrowUpRight,
  ExternalLink,
  Mail,
  Sparkles,
  BrainCircuit,
  BarChart3,
  Workflow,
  Code2,
  GraduationCap,
  Activity,
  ArrowDown,
} from "lucide-react";
function WorkspaceDashboard({ onContinue, onOpenSection, onBack }) {
  const [activeFocus, setActiveFocus] = useState("AI / ML");

  const focusAreas = [
    {
      name: "AI / ML",
      detail: "Building intelligent applications",
      icon: BrainCircuit,
      number: "01",
    },
    {
      name: "Data Analytics",
      detail: "Finding insights through data",
      icon: BarChart3,
      number: "02",
    },
    {
      name: "Agentic AI",
      detail: "Exploring autonomous workflows",
      icon: Workflow,
      number: "03",
    },
  ];

  const skills = [
    "Python",
    "Java",
    "React",
    "SQL",
    "OpenCV",
    "MediaPipe",
    "JavaScript",
    "Git & GitHub",
  ];

  const projects = [
    {
      number: "02",
      name: "Employee Attendance Automation",
      category: "WORKFLOW AUTOMATION",
      description:
        "An automated workflow for employee check-ins, validation, attendance records and notifications.",
      tech: ["Automation", "APIs", "Data Processing"],
      symbol: "A",
      color: "automation",
    },
    {
      number: "03",
      name: "Insurance Cost Prediction",
      category: "MACHINE LEARNING",
      description:
        "A predictive modelling project exploring data analysis and insurance cost estimation.",
      tech: ["Python", "Machine Learning", "Data Analysis"],
      symbol: "I",
      color: "insurance",
    },
  ];

  return (
    <motion.section
      className="wsx-page"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      {/* AMBIENT BACKGROUND */}
      <div className="wsx-glow wsx-glow-one" />
      <div className="wsx-glow wsx-glow-two" />
      <div className="wsx-grid-bg" />

      {/* TOP NAVIGATION */}
      <header className="wsx-header">
        <button className="wsx-brand" onClick={onBack}>
          <span className="wsx-logo">JA<span>.</span></span>
          <span className="wsx-brand-label">THE CREATIVE LAB</span>
        </button>

        <div className="wsx-header-right">
          <span className="wsx-availability">
            <i />
            AVAILABLE FOR OPPORTUNITIES
          </span>
          <button className="wsx-menu-button" onClick={onContinue}>
            Explore desktop <ArrowUpRight size={16} />
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="wsx-hero">
        <div className="wsx-hero-copy">
          <div className="wsx-eyebrow">
            <Sparkles size={14} />
            PERSONAL SPACE / 2026
          </div>

          <h1>
            Ideas into
            <br />
            <span>intelligent</span>
            <br />
            experiences.
          </h1>

          <p className="wsx-intro">
            I'm <strong>Jaiarjun Ashokkumar</strong>, a Computer Science
            Engineering graduate exploring AI, data and the art of building
            useful technology.
          </p>

          <div className="wsx-hero-actions">
            <button
              className="wsx-primary-button"
              onClick={() => onOpenSection("Projects")}
            >
              Explore my work <ArrowUpRight size={17} />
            </button>

            <a
              className="wsx-secondary-button"
              href="/resume-ai-ml.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View resume
            </a>
          </div>

          <div className="wsx-socials">
            <a
              href="https://github.com/Arjunjai18"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <ExternalLink size={17} /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jai-arjun-a-40a53b243/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <ExternalLink size={17} /> LinkedIn
            </a>
            <a href="mailto:jaiarjun1418@gmail.com">
              <Mail size={17} /> Email
            </a>
          </div>
        </div>

        <div className="wsx-hero-art">
          <div className="wsx-orbit wsx-orbit-one" />
          <div className="wsx-orbit wsx-orbit-two" />
          <div className="wsx-orbit wsx-orbit-three" />

          <div className="wsx-hero-core">
            <span>JA</span>
            <i />
          </div>

          <span className="wsx-orbit-label wsx-label-one">AI / ML</span>
          <span className="wsx-orbit-label wsx-label-two">DATA</span>
          <span className="wsx-orbit-label wsx-label-three">BUILD</span>

          <div className="wsx-art-caption">
            <span>CREATIVE THINKING</span>
            <span>EST. 2026</span>
          </div>
        </div>

        <div className="wsx-scroll-hint">
          <ArrowDown size={15} /> SCROLL TO EXPLORE
        </div>
      </section>

      {/* INTRODUCTION STRIP */}
      <section className="wsx-info-strip">
        <div>
          <span className="wsx-mini-label">BASED IN</span>
          <strong>India</strong>
        </div>
        <div>
          <span className="wsx-mini-label">EDUCATION</span>
          <strong>Computer Science Engineering</strong>
        </div>
        <div>
          <span className="wsx-mini-label">GRADUATION</span>
          <strong>Class of 2026</strong>
        </div>
        <div>
          <span className="wsx-mini-label">CURRENT MODE</span>
          <strong className="wsx-learning"><i /> Learning & Building</strong>
        </div>
      </section>

      {/* FOCUS AREAS */}
      <section className="wsx-section">
        <div className="wsx-section-heading">
          <div>
            <span className="wsx-eyebrow">01 / WHAT I'M EXPLORING</span>
            <h2>Curiosity drives <span>creation.</span></h2>
          </div>
          <p>Three areas shaping what I learn and build next.</p>
        </div>

        <div className="wsx-focus-grid">
          {focusAreas.map((item) => {
            const Icon = item.icon;
            const selected = activeFocus === item.name;

            return (
              <motion.button
                key={item.name}
                className={`wsx-focus-card ${selected ? "selected" : ""}`}
                onClick={() => setActiveFocus(item.name)}
                whileHover={{ y: -7 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="wsx-focus-top">
                  <span>{item.number} / FOCUS</span>
                  <Icon size={23} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.detail}</p>
                <div className="wsx-focus-bottom">
                  <span>{selected ? "CURRENTLY SELECTED" : "EXPLORE AREA"}</span>
                  <ArrowUpRight size={17} />
                </div>
              </motion.button>
            );
          })}
        </div>

        <p className="wsx-focus-note">
          <Sparkles size={15} />
          Currently exploring: <strong>{activeFocus}</strong>
        </p>
      </section>

      {/* FEATURED PROJECT */}
      <section className="wsx-section">
        <div className="wsx-section-heading">
          <div>
            <span className="wsx-eyebrow">02 / FEATURED PROJECT</span>
            <h2>Built with <span>purpose.</span></h2>
          </div>
          <span className="wsx-complete-label">
            <i /> COMPLETED PROJECT
          </span>
        </div>

        <article className="wsx-featured">
          <div className="wsx-featured-visual">
            <div className="wsx-scan-line" />
            <div className="wsx-repsense-rings">
              <div className="wsx-repsense-ring ring-a" />
              <div className="wsx-repsense-ring ring-b" />
              <div className="wsx-repsense-ring ring-c" />
              <div className="wsx-repsense-logo">R</div>
            </div>
            <div className="wsx-visual-top">
              <span>PROJECT_001</span>
              <span>COMPUTER VISION / AI</span>
            </div>
            <div className="wsx-visual-bottom">
              <span>REPSENSE</span>
              <span>POSE DETECTION SYSTEM</span>
            </div>
            <div className="wsx-visual-decoration">RS_01</div>
          </div>

          <div className="wsx-featured-content">
            <div>
              <span className="wsx-mini-label">AI FITNESS COACH</span>
              <h3>RepSense — AI Fitness Coach</h3>
              <p>
                A computer vision-based fitness application that detects body
                poses, tracks squat repetitions and calculates knee angles
                in real time.
              </p>
            </div>

            <button
              className="wsx-primary-button"
              onClick={() => onOpenSection("Projects")}
            >
              Discover RepSense <ArrowUpRight size={17} />
            </button>
          </div>

          <div className="wsx-featured-tech">
            <span>PYTHON</span>
            <span>OPENCV</span>
            <span>MEDIAPIPE</span>
            <span>AI / ML</span>
          </div>
        </article>
      </section>

      {/* OTHER PROJECTS */}
      <section className="wsx-section">
        <div className="wsx-section-heading">
          <div>
            <span className="wsx-eyebrow">03 / SELECTED WORK</span>
            <h2>More things I've <span>created.</span></h2>
          </div>
          <button
            className="wsx-inline-link"
            onClick={() => onOpenSection("Projects")}
          >
            All projects <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="wsx-project-grid">
          {projects.map((project) => (
            <motion.article
              className={`wsx-project-card ${project.color}`}
              key={project.number}
              whileHover={{ y: -6 }}
            >
              <div className="wsx-project-card-top">
                <span>PROJECT / {project.number}</span>
                <ArrowUpRight size={19} />
              </div>
              <div className="wsx-project-symbol">{project.symbol}</div>
              <span className="wsx-mini-label">{project.category}</span>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="wsx-project-tags">
                {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
              </div>
              <button
                className="wsx-project-open"
                onClick={() => onOpenSection("Projects")}
              >
                View project details <ArrowUpRight size={15} />
              </button>
            </motion.article>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section className="wsx-section wsx-skills-section">
        <div className="wsx-section-heading">
          <div>
            <span className="wsx-eyebrow">04 / MY TOOLKIT</span>
            <h2>Tools of the <span>trade.</span></h2>
          </div>
          <Code2 size={27} />
        </div>

        <div className="wsx-skills">
          {skills.map((skill, index) => (
            <motion.div
              className="wsx-skill"
              key={skill}
              whileHover={{ y: -5, scale: 1.04 }}
            >
              <span>0{index + 1}</span>
              <strong>{skill}</strong>
              <ArrowUpRight size={15} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* JOURNEY */}
      <section className="wsx-section">
        <div className="wsx-section-heading">
          <div>
            <span className="wsx-eyebrow">05 / THE JOURNEY</span>
            <h2>Learning by <span>building.</span></h2>
          </div>
          <GraduationCap size={29} />
        </div>

        <div className="wsx-journey">
          <div className="wsx-journey-item">
            <span className="wsx-journey-number">01</span>
            <div>
              <span className="wsx-mini-label">EDUCATION</span>
              <h3>Computer Science Engineering</h3>
              <p>Hindustan Institute of Technology and Science</p>
            </div>
            <span className="wsx-journey-year">2026</span>
          </div>

          <div className="wsx-journey-item">
            <span className="wsx-journey-number">02</span>
            <div>
              <span className="wsx-mini-label">PROJECT BUILDING</span>
              <h3>Developing practical applications</h3>
              <p>Exploring computer vision, automation and predictive modelling.</p>
            </div>
            <Activity size={20} />
          </div>

          <div className="wsx-journey-item">
            <span className="wsx-journey-number">03</span>
            <div>
              <span className="wsx-mini-label">WHAT'S NEXT</span>
              <h3>Exploring intelligent systems</h3>
              <p>Learning AI/ML, Data Analytics and Agentic AI.</p>
            </div>
            <Sparkles size={20} />
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="wsx-contact">
        <div className="wsx-contact-orb" />
        <span className="wsx-eyebrow">HAVE AN IDEA OR OPPORTUNITY?</span>
        <h2>Let's build something <span>meaningful.</span></h2>
        <p>Open to fresher opportunities, collaborations and learning experiences.</p>
        <button
          className="wsx-primary-button"
          onClick={() => onOpenSection("Contact")}
        >
          Get in touch <ArrowUpRight size={17} />
        </button>
      </section>

      {/* FOOTER */}
      <footer className="wsx-footer">
        <button onClick={onBack}>← Back to Home</button>
        <span>JA. / PERSONAL CREATIVE LAB / 2026</span>
        <button onClick={onContinue}>Explore macOS portfolio ↗</button>
      </footer>
    </motion.section>
  );
}
function App() {
  // PAGE 1 = Landing
  // PAGE 2 = Workspace
  // PAGE 3 = macOS Portfolio

  const [currentPage, setCurrentPage] = useState(1);

  const [activeSection, setActiveSection] = useState("About Me");
  const [finderOpen, setFinderOpen] = useState(false);

  const [history, setHistory] = useState(["About Me"]);
  const [historyIndex, setHistoryIndex] = useState(0);

  const enterWorkspace = () => {
    setCurrentPage(2);
    setFinderOpen(false);
  };

  const enterDesktop = () => {
    setCurrentPage(3);
    setFinderOpen(false);
  };

  const openSection = (section) => {
    if (section === history[historyIndex]) {
      setFinderOpen(true);
      return;
    }

    const newHistory = history.slice(0, historyIndex + 1);
    newHistory.push(section);

    setHistory(newHistory);
    setHistoryIndex(newHistory.length - 1);
    setActiveSection(section);
    setFinderOpen(true);
  };

  const openSectionFromWorkspace = (section) => {
    setCurrentPage(3);
    openSection(section);
  };

  const goBack = () => {
    if (historyIndex > 0) {
      const newIndex = historyIndex - 1;

      setHistoryIndex(newIndex);
      setActiveSection(history[newIndex]);
    }
  };

  const goForward = () => {
    if (historyIndex < history.length - 1) {
      const newIndex = historyIndex + 1;

      setHistoryIndex(newIndex);
      setActiveSection(history[newIndex]);
    }
  };

  // PAGE 1: LANDING PAGE

  if (currentPage === 1) {
    return (
      <main className="portfolio-landing">
        <div className="landing-glow landing-glow-one"></div>
        <div className="landing-glow landing-glow-two"></div>

        <nav className="landing-nav">
          <div className="landing-logo">JA.</div>

          <div className="landing-nav-links">
            <a
              href="https://github.com/Arjunjai18"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jai-arjun-a-40a53b243/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </nav>

        <section className="landing-hero">
          <div className="landing-status">
            <span className="landing-status-dot"></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="landing-greeting">HELLO, I'M</p>

          <h1>
            Jaiarjun
            <span> Ashokkumar.</span>
          </h1>

          <h2>
            AI / ML <span>·</span> Data Analytics <span>·</span> Python
          </h2>

          <p className="landing-description">
            A Computer Science Engineering graduate passionate about
            building intelligent applications, exploring data, and
            creating practical technology solutions.
          </p>

          <div className="landing-actions">
            <button
              className="landing-explore-button"
              onClick={enterWorkspace}
            >
              Explore Portfolio
              <span>↗</span>
            </button>

            <a
              className="landing-secondary-button"
              href="/resume-ai-ml.pdf"
              target="_blank"
              rel="noreferrer"
            >
              View Resume
            </a>
          </div>

          <div className="landing-bottom">
            <span>COMPUTER SCIENCE ENGINEERING · 2026</span>
            <span>SCROLL LESS. EXPLORE MORE.</span>
          </div>
        </section>
      </main>
    );
  }

  // PAGE 2: PERSONAL DEVELOPER WORKSPACE

  if (currentPage === 2) {
    return (
      <main className="desktop workspace-page">
        <WorkspaceDashboard
          onContinue={enterDesktop}
          onOpenSection={openSectionFromWorkspace}
          onBack={() => setCurrentPage(1)}
        />
      </main>
    );
  }

  // PAGE 3: MACOS PORTFOLIO WITH DOCK AND FINDER

  return (
    <main className="desktop">
  <MenuBar />

  <button
    className="desktop-back-button"
    onClick={() => {
      setCurrentPage(2);
      setFinderOpen(false);
    }}
  >
    ← Back to Workspace
  </button>

  <Desktop onOpen={openSection} />

      <AnimatePresence>
        {finderOpen && (
          <div className="window-stage">
            <Finder
              key="portfolio-finder"
              activeSection={activeSection}
              onSelect={openSection}
              onClose={() => setFinderOpen(false)}
              onMinimize={() => setFinderOpen(false)}
              onBack={goBack}
              onForward={goForward}
              canGoBack={historyIndex > 0}
              canGoForward={historyIndex < history.length - 1}
            />
          </div>
        )}
      </AnimatePresence>

      <Dock onOpen={openSection} />
    </main>
  );
}

export default App;
