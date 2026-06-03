export default function About() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="py-24 bg-[#070d1a] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* SECTION LABEL */}
        <p className="text-sm uppercase tracking-[0.25em] text-[#fca311]/80 mb-6">
          About Me
        </p>

        {/* BIG STATEMENT */}
        <div className="max-w-5xl">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95]">
            I build software that solves
            <span className="text-[#fca311]"> real-world problems</span>,
            from scalable backend systems to AI-powered developer tools.
          </h2>
        </div>

        {/* STORY SECTION */}
        <div className="grid lg:grid-cols-2 gap-16 mt-20">
          <div>
            <p className="text-[#cfd6e6]/80 text-xl leading-relaxed">
              My journey started in Electronics & Telecommunication
              Engineering, where I developed a strong foundation in systems,
              networking, and problem-solving. Over time, curiosity led me
              toward software development and modern web technologies.
            </p>

            <p className="mt-8 text-[#cfd6e6]/75 text-lg leading-relaxed">
              Today, I specialize in MERN Stack Development with a growing
              focus on backend engineering, scalable architectures, and AI
              applications. I enjoy designing APIs, authentication systems,
              databases, and developer-focused products that create measurable
              value.
            </p>

            <p className="mt-8 text-[#cfd6e6]/75 text-lg leading-relaxed">
              Recently, I've been building AI-powered platforms like OpsMind AI
              and GitGuard AI while deepening my expertise in PostgreSQL,
              Redis, Docker, caching strategies, and production-grade backend
              systems.
            </p>
          </div>

          {/* HIGHLIGHT PANEL */}
          <div
            className="
              border border-white/10
              rounded-3xl
              p-8
              bg-black/10
              hover:border-[#fca311]/30
              transition
            "
          >
            <div className="space-y-8">
              <div>
                <p className="text-[#fca311] text-sm uppercase tracking-wider mb-2">
                  Primary Focus
                </p>

                <h3 className="text-3xl font-bold text-white">
                  Backend Engineering
                </h3>

                <p className="mt-3 text-[#cfd6e6]/75 leading-relaxed">
                  REST APIs, authentication systems, databases,
                  scalable architectures, and production-ready services.
                </p>
              </div>

              <div>
                <p className="text-[#fca311] text-sm uppercase tracking-wider mb-2">
                  Current Learning
                </p>

                <h3 className="text-3xl font-bold text-white">
                  Scaling Systems
                </h3>

                <p className="mt-3 text-[#cfd6e6]/75 leading-relaxed">
                  PostgreSQL, Redis, Docker, caching,
                  system design, and cloud-native architectures.
                </p>
              </div>

              <div>
                <p className="text-[#fca311] text-sm uppercase tracking-wider mb-2">
                  Open To
                </p>

                <h3 className="text-3xl font-bold text-white">
                  MERN • Full Stack • Backend Roles
                </h3>

                <button
                  onClick={scrollToContact}
                  className="
                    mt-6
                    px-6 py-3
                    rounded-xl
                    bg-[#fca311]
                    text-black
                    font-semibold
                    hover:scale-[1.03]
                    hover:shadow-[0_0_25px_rgba(252,163,17,0.35)]
                    transition
                  "
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* TECH TAGS */}
        <div className="flex flex-wrap gap-4 mt-20">
          {[
            "MERN Stack",
            "Backend Engineering",
            "REST APIs",
            "MongoDB",
            "Node.js",
            "Express.js",
            "AI Applications",
            "System Design",
            "Authentication",
            "Developer Tools",
          ].map((item) => (
            <span
              key={item}
              className="
                px-5 py-3
                rounded-2xl
                border border-white/10
                bg-black/10
                text-[#cfd6e6]
                hover:border-[#fca311]/30
                hover:text-white
                transition
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* LARGE STATS STRIP */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { value: "1+", label: "Years Experience" },
            { value: "10+", label: "Projects Built" },
            { value: "MERN", label: "Core Stack" },
            { value: "AI", label: "Specialization" },
          ].map((item) => (
            <div
              key={item.label}
              className="
                border-t border-[#fca311]/20
                pt-6
              "
            >
              <h3 className="text-4xl font-black text-[#fca311]">
                {item.value}
              </h3>

              <p className="mt-2 text-[#cfd6e6]/60">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

