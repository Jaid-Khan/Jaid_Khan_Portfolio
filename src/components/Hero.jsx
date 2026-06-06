import heroImg from "../assets/Jaid_Khan_IMG.png";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#070d1a] flex items-center relative overflow-hidden">
      {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* subtle ambient glow */}
      <div className="absolute inset-0 " />

      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-10 relative z-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight text-white leading-[0.95]">
              Building
              <br />
              software that
              <br />
              solves real
              <br />
              <span className="text-[#fca311]">problems.</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg md:text-xl text-[#cfd6e6]/75 max-w-2xl leading-relaxed">
              I'm <span className="text-white font-semibold">Jaid Khan</span>, I
              build AI-powered developer tools, enterprise knowledge systems,
              backend services, and production-ready web applications using
              modern JavaScript technologies.
            </p>

            {/* PROJECTS */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#fca311]/80 mb-6">
                Active Systems
              </p>

              <div className="space-y-6">
                {[
                  [
                    "GitGuard AI",
                    "Automated pull request review system powered by GitHub webhooks and AI.",
                  ],
                  [
                    "OpsMind AI",
                    "Enterprise RAG assistant with semantic retrieval and citation-based responses.",
                  ],
                  [
                    "Recruitment Platform",
                    "Complete hiring workflow automation with role-based access control.",
                  ],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="
                      group
                      hover:translate-x-1
                      transition
                    "
                  >
                    <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#fca311] transition">
                      {title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#cfd6e6]/70">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="
                  px-7 py-4
                  bg-[#fca311]
                  text-black
                  text-sm sm:text-base
                  rounded-xl
                  font-semibold
                  hover:scale-[1.04]
                  hover:shadow-[0_0_25px_rgba(252,163,17,0.35)]
                  transition
                "
              >
                Explore Work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="
                  px-7 py-4
                  border border-white/15
                  rounded-xl
                  font-semibold
                  text-sm sm:text-base
                  text-white
                  hover:bg-white/10
                  hover:border-[#fca311]/40
                  transition
                "
              >
                Contact
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div
              className="
                border border-white/10
                rounded-2xl
                p-6
                shadow-2xl
                shadow-[#070d1a]
                hover:shadow-[#fca311]/10
                transition
              "
            >
              <img
                src={heroImg}
                alt="Jaid Khan"
                className="
                  w-full
                  h-auto
                  max-h-[500px]
                  object-contain
                  object-center
                  rounded-2xl
                  drop-shadow-[0_20px_40px_rgba(0,0,0,0.45)]
                  transform-gpu
                  transition-all
                  duration-700
                  hover:-translate-y-1
                  hover:scale-[1.01]
                "
              />

              <div className="mt-6">
                {[
                  ["Role", "Software Engineer"],
                  ["Focus", "AI + Backend"],
                  ["Experience", "1+ Years"],
                  ["Stack", "MERN + AI Systems"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="
                      flex justify-between py-4
                      border-b border-white/10
                      hover:bg-white/5
                      px-2
                      transition
                    "
                  >
                    <span className="text-sm sm:text-base text-[#cfd6e6]/60">
                      {label}
                    </span>

                    <span className="text-sm sm:text-base text-[#fca311] font-semibold">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CURRENT FOCUS */}
            <div
              className="
                mt-6
                border border-white/10
                bg-[#070d1a]
                rounded-2xl
                p-5
              "
            >
              <p className="text-xs sm:text-sm uppercase tracking-wider text-[#fca311]/80 mb-4">
                Current Focus
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Backend Engineering",
                  "AI Applications",
                  "System Design",
                  "Developer Tooling",
                ].map((item) => (
                  <span
                    key={item}
                    className="
                      px-3 py-2
                      bg-black/30
                      text-[#cfd6e6]
                      border border-white/10
                      rounded-lg
                      text-xs sm:text-sm
                      hover:border-[#fca311]/50
                      hover:text-[#fca311]
                      hover:bg-black/50
                      transition
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}