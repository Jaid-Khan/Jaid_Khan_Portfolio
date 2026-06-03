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
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 sm:px-6 lg:px-10 pt-3">

        <div className="
          max-w-7xl mx-auto
          h-14
          rounded-2xl
          border border-white/10
          bg-[#070d1a]/80
          backdrop-blur-xl
          flex items-center justify-between
          px-4 sm:px-6
        ">

          {/* LOGO */}
          <Link
            to="/"
            className="
              text-xl font-black tracking-tight
              text-white
              hover:text-[#fca311]
              transition
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
                  text-[#cfd6e6]/70
                  hover:text-white
                  transition-all duration-300
                "
              >

                {/* hover background */}
                <span className="
                  absolute inset-0 rounded-xl
                  bg-white/5
                  opacity-0 group-hover:opacity-100
                  transition
                " />

                {/* hover border */}
                <span className="
                  absolute inset-0 rounded-xl
                  border border-transparent
                  group-hover:border-white/10
                  transition
                " />

                {/* hover accent glow */}
                <span className="
                  absolute inset-0 rounded-xl
                  opacity-0 group-hover:opacity-100
                  bg-gradient-to-r from-[#fca311]/10 to-transparent
                  transition
                " />

                <span className="relative z-10 group-hover:text-[#fca311] transition">
                  {link.label}
                </span>

              </button>
            ))}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">

            {/* HIRE ME */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                hidden sm:flex
                px-4 py-2 rounded-xl
                text-sm font-semibold
                bg-[#fca311]
                text-black
                hover:scale-[1.05]
                hover:shadow-[0_0_20px_rgba(252,163,17,0.35)]
                transition
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

                <span className={`
                  h-0.5 w-full bg-white rounded-full
                  transition-all duration-300
                  ${isOpen ? "rotate-45 translate-y-2.5" : ""}
                `} />

                <span className={`
                  h-0.5 w-full bg-white rounded-full
                  transition-all duration-300
                  ${isOpen ? "opacity-0" : ""}
                `} />

                <span className={`
                  h-0.5 w-full bg-white rounded-full
                  transition-all duration-300
                  ${isOpen ? "-rotate-45 -translate-y-2.5" : ""}
                `} />

              </div>
            </button>

          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      <div className={`
        fixed inset-0 z-40
        bg-[#070d1a]/95
        backdrop-blur-xl
        pt-10
        flex flex-col items-center justify-center
        gap-5
        transition-all duration-500 lg:hidden
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
      `}>

        {navLinks.map((link, index) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className="
              w-[220px]
              px-6 py-4
              rounded-2xl
              border border-white/10
              bg-[#0b1226]
              text-lg font-semibold
              text-[#cfd6e6]
              hover:text-[#fca311]
              hover:border-[#fca311]/30
              hover:bg-black/30
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