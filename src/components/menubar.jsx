
import { useEffect, useRef, useState } from "react";
import {
  Apple,
  Wifi,
  BatteryFull,
  Search,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";

const EMAIL = "jaiarjun1418@gmail.com";

function MenuBar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  const menus = {
    Finder: [
      { label: "About This Portfolio", action: () => window.alert("Jaiarjun Ashokkumar | AI / ML · Data Analytics · Python") },
      { label: "Refresh Portfolio", action: () => window.location.reload() },
    ],
    File: [
      {
        label: "Copy Portfolio Link",
        action: async () => {
          try {
            await navigator.clipboard.writeText(window.location.href);
            window.alert("Portfolio link copied!");
          } catch {
            window.alert("Please copy the portfolio URL from your browser.");
          }
        },
      },
      { label: "Contact by Email", action: () => window.location.href = `mailto:${EMAIL}` },
    ],
    Edit: [
      {
        label: "Copy Email Address",
        action: async () => {
          try {
            await navigator.clipboard.writeText(EMAIL);
            window.alert("Email address copied!");
          } catch {
            window.location.href = `mailto:${EMAIL}`;
          }
        },
      },
      { label: "Select All Text", action: () => document.execCommand("selectAll") },
    ],
    View: [
      {
        label: "Enter Full Screen",
        action: async () => {
          try {
            if (!document.fullscreenElement) {
              await document.documentElement.requestFullscreen();
            } else {
              await document.exitFullscreen();
            }
          } catch {
            window.alert("Full screen is not available in this browser.");
          }
        },
      },
      { label: "Refresh View", action: () => window.location.reload() },
    ],
    Go: [
      { label: "Back to Top", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
      { label: "Go Back", action: () => window.history.back() },
    ],
    Window: [
      { label: "Close Menu", action: () => setActiveMenu(null) },
      { label: "Refresh Portfolio", action: () => window.location.reload() },
    ],
    Help: [
      { label: "Contact Support", action: () => window.location.href = `mailto:${EMAIL}?subject=Portfolio%20Enquiry` },
      { label: "Visit GitHub", action: () => window.open("https://github.com/Arjunjai18", "_blank", "noopener,noreferrer") },
      { label: "Visit LinkedIn", action: () => window.open("https://www.linkedin.com/in/jai-arjun-a-40a53b243/", "_blank", "noopener,noreferrer") },
    ],
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setActiveMenu(null);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  const handleMenuAction = (action) => {
    setActiveMenu(null);
    action();
  };

  return (
    <header className="menu-bar">
      <div className="menu-left" ref={menuRef}>
        <button
          className="menu-apple"
          onClick={() => setActiveMenu(activeMenu === "Finder" ? null : "Finder")}
          aria-label="Open Finder menu"
        >
          <Apple size={17} fill="white" />
        </button>

        {Object.entries(menus).map(([menuName, items]) => (
          <div className="menu-item-wrapper" key={menuName}>
            <button
              className={`menu-trigger ${activeMenu === menuName ? "active" : ""}`}
              onClick={() =>
                setActiveMenu(activeMenu === menuName ? null : menuName)
              }
              aria-expanded={activeMenu === menuName}
            >
              {menuName}
              <ChevronDown size={10} className="menu-chevron" />
            </button>

            {activeMenu === menuName && (
              <div className="menu-dropdown">
                {items.map((item) => (
                  <button
                    className="menu-dropdown-item"
                    key={item.label}
                    onClick={() => handleMenuAction(item.action)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="menu-right">
        <Wifi size={16} />
        <BatteryFull size={18} />
        <Search size={16} />
        <SlidersHorizontal size={16} />
        <span>
          {new Date().toLocaleDateString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
        <span>
          {new Date().toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </header>
  );
}

export default MenuBar;
