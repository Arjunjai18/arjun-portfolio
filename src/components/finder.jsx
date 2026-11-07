
import { useState } from "react";
import { motion } from "framer-motion";

import {
  X,
  Minus,
  Maximize2,
  User,
  Folder,
  Code,
  Briefcase,
  GraduationCap,
  FileText,
  Mail,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Workflow,
  ChartNoAxesCombined,
  BrainCircuit,
  ExternalLink,
  Download,
  Copy,
  Check,
} from "lucide-react";

const sections = [
  { name: "About Me", icon: User },
  { name: "Projects", icon: Folder },
  { name: "Skills", icon: Code },
  { name: "Experience", icon: Briefcase },
  { name: "Education", icon: GraduationCap },
  { name: "Resume", icon: FileText },
  { name: "Contact", icon: Mail },
  { name: "GitHub", icon: Code },
];

const projects = [
  {
    name: "RepSense",
    title: "RepSense – AI Fitness Coach",
    icon: Dumbbell,
    description:
      "An AI-powered fitness application that tracks body movements and analyzes exercise repetitions in real time.",
    details:
      "RepSense uses computer vision and pose estimation to identify body landmarks, calculate joint angles, and analyze squat repetitions.",
    features: [
      "Real-time body pose detection",
      "Squat repetition tracking",
      "Knee-angle calculation",
      "Live workout analysis",
    ],
    technologies: ["Python", "OpenCV", "MediaPipe", "AI / ML"],
    category: "AI / Computer Vision",
  },
  {
    name: "Attendance Automation",
    title: "Employee Attendance Automation",
    icon: Workflow,
    description:
      "An automated workflow designed to simplify employee attendance processing and reduce repetitive administrative tasks.",
    details:
      "The workflow handles employee check-ins, validates attendance, updates centralized records, and supports automated notifications.",
    features: [
      "Employee check-in processing",
      "Attendance validation",
      "Centralized attendance records",
      "Automated notifications",
    ],
    technologies: [
      "Workflow Automation",
      "APIs",
      "AI",
      "Data Processing",
    ],
    category: "Automation",
  },
  {
    name: "Insurance Cost Prediction",
    title: "Insurance Cost Prediction",
    icon: ChartNoAxesCombined,
    description:
      "A machine learning project focused on estimating insurance costs using relevant input data.",
    details:
      "The project explores data analysis and predictive modelling to understand factors associated with insurance costs.",
    features: [
      "Data exploration",
      "Data preprocessing",
      "Predictive modelling",
      "Cost estimation",
    ],
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    category: "Machine Learning",
  },
];

const skills = {
  Programming: ["Python", "Java", "JavaScript", "SQL"],
  "AI / Data": [
    "Machine Learning",
    "Data Analytics",
    "OpenCV",
    "MediaPipe",
  ],
  Development: ["React", "HTML", "CSS", "REST APIs", "JSON"],
  Tools: ["Git", "GitHub", "Automation", "Power BI"],
};

const EMAIL = "jaiarjun1418@gmail.com";
const GITHUB_URL = "https://github.com/Arjunjai18";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/jai-arjun-a-40a53b243/";

const AI_RESUME = "/resume-ai-ml.pdf";
const ANALYTICS_RESUME = "/resume-data-analytics.pdf";

function Finder({
  activeSection,
  onSelect,
  onClose,
  onMinimize,
  onBack,
  onForward,
  canGoBack,
  canGoForward,
}) {
  // ALL STATE VARIABLES
  const [isMaximized, setIsMaximized] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [emailCopied, setEmailCopied] = useState(false);

  // COPY EMAIL
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (error) {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  // NAVIGATION FUNCTIONS
  const selectSection = (section) => {
    setSelectedProject(null);
    onSelect(section);
  };

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const goToProjects = () => {
    setSelectedProject(null);
    onSelect("Projects");
  };

  // MAIN RETURN
  return (
    <motion.section
      className={`finder-window ${isMaximized ? "maximized" : ""}`}
      drag={!isMaximized}
      dragMomentum={false}
      dragElastic={0.05}
      whileDrag={{ scale: 1.01 }}
      initial={{ opacity: 0, scale: 0.94, y: 25 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: 20 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* TITLE BAR */}
      <div className="finder-titlebar">
        <div className="window-controls">
          <button className="close" onClick={onClose} title="Close">
            <X size={12} />
          </button>

          <button className="minimize" onClick={onMinimize} title="Minimize">
            <Minus size={12} />
          </button>

          <button
            className="maximize"
            onClick={() => setIsMaximized(!isMaximized)}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            <Maximize2 size={12} />
          </button>
        </div>

        <div className="finder-title">Jaiarjun — Portfolio</div>

        <div className="finder-arrows">
          <button
            onClick={() => {
              setSelectedProject(null);
              onBack();
            }}
            disabled={!canGoBack}
            title="Go Back"
          >
            <ChevronLeft size={17} />
          </button>

          <button
            onClick={() => {
              setSelectedProject(null);
              onForward();
            }}
            disabled={!canGoForward}
            title="Go Forward"
          >
            <ChevronRight size={17} />
          </button>
        </div>
      </div>

      {/* FINDER BODY */}
      <div className="finder-body">
        {/* SIDEBAR */}
        <aside className="finder-sidebar">
          <p className="sidebar-heading">FAVOURITES</p>

          {sections.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                className={`sidebar-item ${
                  activeSection === item.name && !selectedProject
                    ? "selected"
                    : ""
                }`}
                onClick={() => selectSection(item.name)}
              >
                <Icon size={17} />
                <span>{item.name}</span>
              </button>
            );
          })}
        </aside>

        {/* MAIN CONTENT */}
        <div className="finder-content">
          <div className="content-heading">
            <span>
              {selectedProject ? selectedProject.name : activeSection}
            </span>
            <span className="item-count">Portfolio</span>
          </div>

          {/* ABOUT ME */}
          {activeSection === "About Me" && !selectedProject && (
            <div className="info-content about-section">
              <div className="profile-circle">J</div>

              <p className="section-eyebrow">HELLO, I'M</p>
              <h2>Jaiarjun Ashokkumar</h2>

              <p className="about-role">
                Aspiring Data Analyst | AI Automation
              </p>

              <p>
                I'm a Computer Science Engineering graduate interested in
                Artificial Intelligence, Machine Learning, Data Analytics,
                and software development.
              </p>

              <p>
                I enjoy building practical applications, exploring new
                technologies, and creating solutions that simplify everyday
                tasks through data and automation.
              </p>

              <div className="about-highlights">
                <div>
                  <BrainCircuit size={22} />
                  <span>AI & Machine Learning</span>
                </div>
                <div>
                  <ChartNoAxesCombined size={22} />
                  <span>Data Analytics</span>
                </div>
                <div>
                  <Code size={22} />
                  <span>Software Development</span>
                </div>
              </div>

              <button className="explore-button" onClick={goToProjects}>
                Explore My Projects →
              </button>
            </div>
          )}

          {/* PROJECT PREVIEWS */}
          {activeSection === "Projects" && !selectedProject && (
            <div className="project-preview-grid">
              {projects.map((project, index) => {
                const Icon = project.icon;

                const previewClasses = [
                  "repsense-preview",
                  "attendance-preview",
                  "insurance-preview",
                ];

                return (
                  <motion.button
                    key={project.name}
                    className="project-preview-card"
                    onClick={() => openProject(project)}
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div
                      className={`project-visual ${previewClasses[index]}`}
                    >
                      <div className="visual-glow" />
                      <div className="visual-icon">
                        <Icon size={54} strokeWidth={1.5} />
                      </div>
                      <span className="visual-label">
                        {project.category}
                      </span>
                      <div className="visual-decoration">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>

                    <div className="project-card-content">
                      <span className="project-category">
                        PROJECT 0{index + 1}
                      </span>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="preview-tags">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech}>{tech}</span>
                        ))}
                      </div>

                      <span className="project-open">
                        Explore Project <ExternalLink size={14} />
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          )}

          {/* PROJECT DETAILS */}
          {selectedProject && (
            <div className="info-content project-details">
              <div className="project-icon">
                {(() => {
                  const Icon = selectedProject.icon;
                  return <Icon size={42} />;
                })()}
              </div>

              <p className="project-subtitle">{selectedProject.category}</p>
              <h2>{selectedProject.title}</h2>

              <h3>About the Project</h3>
              <p>{selectedProject.details}</p>

              <h3>Key Features</h3>
              <ul>
                {selectedProject.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>

              <h3>Technologies Used</h3>
              <div className="tech-tags">
                {selectedProject.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <button onClick={goToProjects}>← Back to Projects</button>
            </div>
          )}

          {/* SKILLS */}
          {activeSection === "Skills" && !selectedProject && (
            <div className="info-content skills-section">
              <div className="skills-intro">
                <span className="section-eyebrow">WHAT I WORK WITH</span>
                <h2>Technical Skills</h2>
                <p>
                  Technologies, tools, and concepts I use to build applications
                  and explore data-driven solutions.
                </p>
              </div>

              <div className="skills-dashboard">
                {Object.entries(skills).map(([category, items], index) => {
                  const SkillIcon =
                    category === "Programming"
                      ? Code
                      : category === "AI / Data"
                        ? BrainCircuit
                        : category === "Development"
                          ? Workflow
                          : ChartNoAxesCombined;

                  return (
                    <motion.div
                      className="skill-category-card"
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                    >
                      <div className="skill-card-header">
                        <div className="skill-icon">
                          <SkillIcon size={24} />
                        </div>
                        <span className="skill-number">0{index + 1}</span>
                      </div>

                      <h3>{category}</h3>

                      <div className="skill-items">
                        {items.map((skill) => (
                          <span className="skill-chip" key={skill}>
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="skills-footer">
                <BrainCircuit size={20} />
                <p>
                  Always learning, experimenting, and improving my technical
                  skills.
                </p>
              </div>
            </div>
          )}

          
{/* EXPERIENCE */}
{activeSection === "Experience" && !selectedProject && (
  <div className="info-content experience-section">

    <div className="experience-intro">
      <span className="section-eyebrow">WHAT I'VE BUILT</span>
      <h2>Practical Experience</h2>
      <p>
        Applying my technical knowledge through hands-on
        projects involving AI, machine learning, automation,
        and data analysis.
      </p>
    </div>

    <div className="experience-timeline">

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ y: -4 }}
      >
        <div className="experience-card-icon">
          <Dumbbell size={25} />
        </div>

        <div className="experience-card-content">
          <span className="experience-type">
            AI / COMPUTER VISION
          </span>

          <h3>RepSense – AI Fitness Coach</h3>

          <p>
            Developed an AI-powered fitness application
            that uses computer vision and pose estimation
            to track squat repetitions and analyze body movements.
          </p>

          <div className="experience-tags">
            <span>Python</span>
            <span>OpenCV</span>
            <span>MediaPipe</span>
            <span>AI / ML</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ y: -4 }}
      >
        <div className="experience-card-icon">
          <Workflow size={25} />
        </div>

        <div className="experience-card-content">
          <span className="experience-type">
            WORKFLOW AUTOMATION
          </span>

          <h3>Employee Attendance Automation</h3>

          <p>
            Designed an automated attendance workflow
            covering employee check-ins, validation,
            centralized records, and automated notifications.
          </p>

          <div className="experience-tags">
            <span>Automation</span>
            <span>APIs</span>
            <span>Data Processing</span>
            <span>AI</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="experience-card"
        initial={{ opacity: 0, x: -15 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        whileHover={{ y: -4 }}
      >
        <div className="experience-card-icon">
          <ChartNoAxesCombined size={25} />
        </div>

        <div className="experience-card-content">
          <span className="experience-type">
            MACHINE LEARNING
          </span>

          <h3>Insurance Cost Prediction</h3>

          <p>
            Explored data analysis, preprocessing,
            and predictive modelling to estimate
            insurance costs using relevant input data.
          </p>

          <div className="experience-tags">
            <span>Python</span>
            <span>Machine Learning</span>
            <span>Data Analysis</span>
          </div>
        </div>
      </motion.div>

    </div>

    <div className="experience-footer">
      <BrainCircuit size={20} />
      <p>
        Continuously learning and building projects
        to strengthen my technical skills.
      </p>
    </div>

  </div>
)}


{/* EDUCATION */}
{activeSection === "Education" && !selectedProject && (
  <div className="info-content education-section">

    <div className="education-intro">
      <span className="section-eyebrow">MY ACADEMIC BACKGROUND</span>
      <h2>Education</h2>
      <p>
        Building a strong foundation in computer science,
        programming, and emerging technologies.
      </p>
    </div>

    <motion.div
      className="education-timeline-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
    >
      <div className="education-top">
        <div className="education-icon">
          <GraduationCap size={30} />
        </div>

        <span className="education-status">
          Graduated · 2026
        </span>
      </div>

      <span className="section-eyebrow">UNDERGRADUATE EDUCATION</span>

      <h3>Computer Science Engineering</h3>

      <h4>Hindustan Institute of Technology and Science</h4>

      <p>
        Developed an academic foundation in computer science,
        programming, software development, and technology.
      </p>

      <div className="education-tags">
        <span>Computer Science</span>
        <span>Programming</span>
        <span>Software Development</span>
      </div>

      <div className="education-year">
        <span>Graduation Year</span>
        <strong>2026</strong>
      </div>
    </motion.div>

  </div>
)}


          {/* RESUME */}
          {activeSection === "Resume" && !selectedProject && (
            <div className="info-content">
              <FileText size={45} />
              <h2>My Resumes</h2>
              <p>
                Choose the resume relevant to the opportunity you're exploring.
              </p>

              <div className="resume-list">
                <div className="resume-card">
                  <div>
                    <h3>AI / ML Resume</h3>
                    <p>Artificial Intelligence and Machine Learning</p>
                  </div>

                  <a href={AI_RESUME} target="_blank" rel="noreferrer">
                    <ExternalLink size={17} />
                    Open
                  </a>
                  <a href={AI_RESUME} download>
                    <Download size={17} />
                    Download
                  </a>
                </div>

                <div className="resume-card">
                  <div>
                    <h3>Data Analytics Resume</h3>
                    <p>Data Analytics and related skills</p>
                  </div>

                  <a
                    href={ANALYTICS_RESUME}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={17} />
                    Open
                  </a>
                  <a href={ANALYTICS_RESUME} download>
                    <Download size={17} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* CONTACT */}
          {activeSection === "Contact" && !selectedProject && (
            <div className="info-content contact-section contact-dashboard">
              <div className="contact-intro">
                <span className="section-eyebrow">GET IN TOUCH</span>
                <h2>Let's Build Something Together.</h2>
                <p>
                  I'm open to fresher opportunities, collaborations, and
                  conversations about AI, data, and technology.
                </p>
              </div>

              <motion.div
                className="contact-email-card"
                whileHover={{ y: -4 }}
              >
                <div className="contact-card-icon">
                  <Mail size={25} />
                </div>

                <div className="contact-email-details">
                  <span>Email Me</span>
                  <h3>{EMAIL}</h3>
                </div>

                <button
                  className="copy-email-button"
                  onClick={copyEmail}
                  title="Copy email"
                >
                  {emailCopied ? <Check size={18} /> : <Copy size={18} />}
                  {emailCopied ? "Copied" : "Copy"}
                </button>
              </motion.div>

              <h3 className="contact-social-heading">Connect With Me</h3>

              <div className="contact-social-grid">
                <motion.a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="social-icon linkedin-icon">
                    <ExternalLink size={24} />
                  </div>
                  <div>
                    <h3>LinkedIn</h3>
                    <p>Professional profile</p>
                  </div>
                  <ExternalLink size={17} />
                </motion.a>

                <motion.a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-social-card"
                  whileHover={{ y: -5 }}
                >
                  <div className="social-icon github-icon">
                    <Code size={24} />
                  </div>
                  <div>
                    <h3>GitHub</h3>
                    <p>Explore my projects</p>
                  </div>
                  <ExternalLink size={17} />
                </motion.a>
              </div>

              <div className="contact-availability">
                <span className="availability-dot" />
                Open to fresher opportunities and collaborations
              </div>
            </div>
          )}

          {/* GITHUB */}
          {activeSection === "GitHub" && !selectedProject && (
            <div className="info-content">
              <Code size={45} />
              <h2>GitHub</h2>
              <p>Explore my code, experiments, and development projects.</p>

              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="action-link"
              >
                Visit GitHub <ExternalLink size={15} />
              </a>
            </div>
          )}
        </div>
        {/* END FINDER CONTENT */}
      </div>
      {/* END FINDER BODY */}
    </motion.section>
  );
}

export default Finder;
