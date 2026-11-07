
import {
  User,
  Folder,
  Code,
  BrainCircuit,
  GraduationCap,
  FileText,
  ExternalLink,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";

const dockItems = [
  { name: "About Me", icon: User, color: "purple" },
  { name: "Projects", icon: Folder, color: "cyan" },
  { name: "Skills", icon: Code, color: "blue" },
  { name: "Experience", icon: BrainCircuit, color: "orange" },
  { name: "Education", icon: GraduationCap, color: "green" },
  { name: "Contact", icon: Mail, color: "pink", divider: true },
  { name: "Resume", icon: FileText, color: "red" },
  { name: "GitHub", icon: ExternalLink, color: "dark" },
];

function Dock({ onOpen }) {
  return (
    <motion.footer
      className="dock"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {dockItems.map((item) => {
        const Icon = item.icon;

        return (
          <div className="dock-item-wrapper" key={item.name}>
            {item.divider && <span className="dock-divider" />}

            <motion.button
              className={`dock-icon dock-${item.color}`}
              title={item.name}
              aria-label={item.name}
              onClick={() => onOpen(item.name)}
              whileHover={{ scale: 1.22, y: -10 }}
              whileTap={{ scale: 0.9 }}
              transition={{
                type: "spring",
                stiffness: 350,
                damping: 17,
              }}
            >
              <Icon size={27} strokeWidth={1.8} />
              <span className="dock-tooltip">{item.name}</span>
            </motion.button>
          </div>
        );
      })}
    </motion.footer>
  );
}

export default Dock;
