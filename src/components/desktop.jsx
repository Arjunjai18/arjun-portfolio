
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Clock,
  CalendarDays,
  FolderKanban,
  Code2,
  Sparkles,
  ArrowUpRight,
  Mail,
  Cpu,
  GraduationCap,
  Activity,
  UserRound,
  Layers,
} from "lucide-react";

function Desktop({ onOpen }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const shortcuts = [
    { label: "About Me", icon: UserRound, color: "violet" },
    { label: "Projects", icon: FolderKanban, color: "blue" },
    { label: "Skills", icon: Code2, color: "cyan" },
    { label: "Education", icon: GraduationCap, color: "orange" },
  ];

  return (
    <section className="macos-desktop-content">
      <div className="desktop-welcome">
        <motion.div
          className="desktop-intro"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="desktop-eyebrow">
            <span className="desktop-live-dot" />
            PERSONAL DIGITAL SPACE
          </span>

          <h1>
            Think. Build.
            <br />
            <span>Create what's next.</span>
          </h1>

          <p>
            Welcome to my portfolio. Explore my projects, technical skills,
            learning journey and the things I'm building.
          </p>

          <div className="desktop-shortcuts">
            {shortcuts.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="desktop-shortcut"
                  onClick={() => onOpen(item.label)}
                >
                  <span className={`shortcut-icon ${item.color}`}>
                    <Icon size={19} />
                  </span>
                  <span>{item.label}</span>
                  <ArrowUpRight size={13} />
                </button>
              );
            })}
          </div>
        </motion.div>

        <motion.aside
          className="desktop-widgets"
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <div className="desktop-widget clock-widget">
            <div className="widget-topline">
              <span><Clock size={14} /> LOCAL TIME</span>
              <span className="widget-live">LIVE</span>
            </div>
            <strong>
              {time.toLocaleTimeString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </strong>
            <p>
              {time.toLocaleDateString("en-IN", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          <button
            className="desktop-widget featured-widget"
            onClick={() => onOpen("Projects")}
          >
            <div className="widget-topline">
              <span><Sparkles size={14} /> FEATURED PROJECT</span>
              <ArrowUpRight size={15} />
            </div>
            <div className="widget-project-icon">
              <Activity size={27} />
            </div>
            <h3>RepSense</h3>
            <p>AI Fitness Coach · Computer Vision</p>
            <span className="widget-project-status">COMPLETED PROJECT</span>
          </button>

          <div className="desktop-widget status-widget">
            <div className="widget-topline">
              <span><Cpu size={14} /> CURRENT FOCUS</span>
              <Layers size={15} />
            </div>
            <div className="widget-focus-tags">
              <span>AI / ML</span>
              <span>Data Analytics</span>
              <span>Agentic AI</span>
            </div>
          </div>

          <button
            className="desktop-widget contact-widget"
            onClick={() => onOpen("Contact")}
          >
            <span className="contact-widget-icon"><Mail size={17} /></span>
            <span>
              <strong>Let's connect</strong>
              <small>Open to fresher opportunities</small>
            </span>
            <ArrowUpRight size={16} />
          </button>
        </motion.aside>
      </div>

      <div className="desktop-bottom-note">
        <span><CalendarDays size={13} /> JA — PORTFOLIO DESKTOP</span>
        <span>DESIGNED TO EXPLORE · BUILT TO CREATE</span>
      </div>
    </section>
  );
}

export default Desktop;
