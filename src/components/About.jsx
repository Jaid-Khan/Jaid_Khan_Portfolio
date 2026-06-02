export default function About() {
  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="bg-[#0F1117] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-[#A1A1AA] mb-4">
            About
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] leading-tight">
            Building software
            <br />
            for real-world use.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          {/* LEFT */}
          <div>
            <div className="space-y-7 text-lg leading-relaxed text-[#A1A1AA]">
              <p>
                I'm a MERN Stack Developer focused on building scalable
                full-stack applications, backend services, AI-powered systems,
                and modern web platforms using JavaScript technologies.
              </p>

              <p>
                My journey started from Electronics &
                Telecommunication Engineering and evolved into software
                development through hands-on project building, internships,
                backend engineering, and real-world product development.
              </p>

              <p>
                I enjoy designing APIs, authentication systems, database
                architecture, reusable frontend systems, and developer-focused
                tools that solve practical problems.
              </p>

              <p>
                Recently, I've been working on AI-powered applications such as
                OpsMind AI and GitGuard AI while expanding my expertise in
                backend engineering, system design, PostgreSQL, Redis, Docker,
                and scalable architectures.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "MERN Stack",
                "Backend Engineering",
                "REST APIs",
                "MongoDB",
                "AI Applications",
                "System Design",
                "Authentication",
                "Developer Tools",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    px-4 py-2
                    rounded-xl
                    bg-[#161A22]
                    border border-[#272B35]
                    text-sm
                    text-[#E4E4E7]
                  "
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            {/* CARD 1 */}
            <div className="border border-[#272B35] bg-[#161A22] rounded-3xl p-7">
              <p className="text-sm uppercase tracking-wider text-[#71717A] mb-3">
                Primary Focus
              </p>

              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">
                Backend + AI Systems
              </h3>

              <p className="text-[#A1A1AA] leading-relaxed">
                Building production-ready APIs, AI integrations,
                authentication systems, database architectures, and scalable
                backend workflows.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="border border-[#272B35] bg-[#161A22] rounded-3xl p-7">
              <p className="text-sm uppercase tracking-wider text-[#71717A] mb-3">
                Current Learning
              </p>

              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">
                Scaling Applications
              </h3>

              <p className="text-[#A1A1AA] leading-relaxed">
                Exploring PostgreSQL, Redis, Docker, caching strategies,
                scalable backend architecture, and production deployment
                workflows.
              </p>
            </div>

            {/* CTA */}
            <div className="border border-[#272B35] bg-[#161A22] rounded-3xl p-7">
              <p className="text-sm uppercase tracking-wider text-[#71717A] mb-3">
                Open To
              </p>

              <h3 className="text-2xl font-bold text-[#F8FAFC] mb-4">
                MERN, Full Stack &
                Backend Opportunities
              </h3>

              <button
                onClick={scrollToContact}
                className="
                  mt-2
                  px-6 py-3
                  bg-[#F8FAFC]
                  text-[#0F1117]
                  rounded-xl
                  font-semibold
                  hover:translate-y-[-2px]
                  transition
                "
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {[
            {
              value: "MERN",
              label: "Primary Stack",
            },
            {
              value: "AI",
              label: "Applications",
            },
            {
              value: "REST APIs",
              label: "Backend Focus",
            },
            {
              value: "1+ Years",
              label: "Experience",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                border border-[#272B35]
                bg-[#161A22]
                rounded-3xl
                p-6
              "
            >
              <h3 className="text-2xl font-bold text-[#F8FAFC]">
                {item.value}
              </h3>

              <p className="text-[#A1A1AA] mt-2">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}