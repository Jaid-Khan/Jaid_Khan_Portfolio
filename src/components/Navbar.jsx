import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  const navLinks = [
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10 pt-3">
        <div
          className="
            max-w-7xl mx-auto
            h-14
            rounded-2xl
            border border-white/10
            bg-white/5
            backdrop-blur-2xl
            shadow-[0_8px_32px_rgba(0,0,0,0.35)]
            flex items-center justify-between
            px-4 sm:px-6
          "
        >
          {/* LOGO */}
          <Link
            to="/"
            className="
              text-xl font-black tracking-tight
              bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500
              bg-clip-text text-transparent
            "
          >
            JK
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="
                  group relative overflow-hidden
                  px-4 py-2 rounded-xl
                  text-sm font-medium
                  text-white/70 hover:text-white
                  transition-all duration-300
                "
              >
                {/* Hover Glow */}
                <span
                  className="
                    absolute inset-0
                    rounded-xl
                    bg-gradient-to-r from-cyan-500/20 to-violet-500/20
                    opacity-0 group-hover:opacity-100
                    transition duration-300
                  "
                />

                {/* Border */}
                <span
                  className="
                    absolute inset-0 rounded-xl
                    border border-white/0
                    group-hover:border-white/10
                    transition duration-300
                  "
                />

                <span className="relative z-10">{link.label}</span>
              </button>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            {/* Resume Button */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                hidden sm:flex
               px-4 py-2 rounded-xl
                text-sm font-semibold
                bg-gradient-to-r from-cyan-500 to-violet-600
                hover:scale-105
                transition-all duration-300
                shadow-[0_0_30px_rgba(59,130,246,0.35)]
              "
            >
              Hire Me
            </button>

            {/* HAMBURGER */}
            <button
              className="lg:hidden relative z-50"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              <div className="w-7 h-6 flex flex-col justify-between">
                <span
                  className={`
                    h-0.5 w-full bg-white rounded-full
                    transition-all duration-300
                    ${isOpen ? "rotate-45 translate-y-2.5" : ""}
                  `}
                />

                <span
                  className={`
                    h-0.5 w-full bg-white rounded-full
                    transition-all duration-300
                    ${isOpen ? "opacity-0" : ""}
                  `}
                />

                <span
                  className={`
                    h-0.5 w-full bg-white rounded-full
                    transition-all duration-300
                    ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}
                  `}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`
          fixed inset-0 z-40
          bg-[#020617]/95
          backdrop-blur-2xl
          pt-10
          flex flex-col items-center justify-center
          gap-5
          transition-all duration-500 lg:hidden

          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Background Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/20 blur-[120px] rounded-full" />

        {navLinks.map((link, index) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="
              relative z-10
              w-[220px]
              px-6 py-4
              rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              text-lg font-semibold
              text-white/80 hover:text-white
              hover:border-cyan-400/30
              hover:bg-white/10
              hover:scale-105
              transition-all duration-300
            "
            style={{
              transitionDelay: `${index * 80}ms`,
            }}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* SPACER */}
      <div className="h-20" />
    </>
  );
}