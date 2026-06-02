import heroImg from "../assets/Jaid-Khan-IMG.png";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-[#0F1117] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-10">
        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-16 items-center">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#F8FAFC] leading-[0.95]">
              Building
              <br />
              software that
              <br />
              solves real
              <br />
              problems.
            </h1>

            <p className="mt-8 text-lg md:text-xl text-[#A1A1AA] max-w-2xl leading-relaxed">
              I build AI-powered developer tools, enterprise knowledge systems,
              backend services, and production-ready web applications using
              modern JavaScript technologies.
            </p>

            {/* PROJECTS */}
            <div className="mt-12 border-t border-[#272B35] pt-8">
              <p className="text-sm uppercase tracking-wider text-[#A1A1AA] mb-6">
                Active Systems
              </p>

              <div className="space-y-5">
                <div>
                  <h3 className="font-bold text-xl text-[#F8FAFC]">
                    GitGuard AI
                  </h3>

                  <p className="text-[#A1A1AA]">
                    Automated pull request review system powered by GitHub
                    webhooks and AI.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#F8FAFC]">
                    OpsMind AI
                  </h3>

                  <p className="text-[#A1A1AA]">
                    Enterprise RAG assistant with semantic retrieval and
                    citation-based responses.
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-xl text-[#F8FAFC]">
                    Recruitment Platform
                  </h3>

                  <p className="text-[#A1A1AA]">
                    Complete hiring workflow automation with role-based access
                    control.
                  </p>
                </div>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-12">
              <button
                onClick={() => scrollToSection("projects")}
                className="
                  px-7 py-4
                  bg-[#F8FAFC]
                  text-[#0F1117]
                  rounded-xl
                  font-semibold
                  hover:translate-y-[-2px]
                  transition
                "
              >
                Explore Work
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="
                  px-7 py-4
                  border border-[#272B35]
                  rounded-xl
                  font-semibold
                  text-[#F8FAFC]
                  hover:bg-[#161A22]
                  transition
                "
              >
                Contact
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div className="border border-[#272B35] bg-[#161A22] rounded-3xl p-6">
              <img
                src={heroImg}
                alt="Jaid Khan"
                className="w-full h-[400px] object-cover rounded-2xl"
              />

              <div className="mt-6">
                <div className="flex justify-between py-3 border-b border-[#272B35]">
                  <span className="text-[#A1A1AA]">Role</span>
                  <span className="font-semibold text-[#F8FAFC]">
                    Software Engineer
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b border-[#272B35]">
                  <span className="text-[#A1A1AA]">Focus</span>
                  <span className="font-semibold text-[#F8FAFC]">
                    AI + Backend
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b border-[#272B35]">
                  <span className="text-[#A1A1AA]">Experience</span>
                  <span className="font-semibold text-[#F8FAFC]">
                    1+ Years
                  </span>
                </div>

                <div className="flex justify-between py-3">
                  <span className="text-[#A1A1AA]">Stack</span>
                  <span className="font-semibold text-[#F8FAFC]">
                    MERN + AI Systems
                  </span>
                </div>
              </div>
            </div>

            {/* CURRENT FOCUS */}
            <div className="mt-6 border border-[#272B35] rounded-2xl p-5 bg-[#161A22]">
              <p className="text-sm uppercase tracking-wider text-[#A1A1AA] mb-4">
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
                      rounded-lg
                      bg-[#222734]
                      text-sm
                      text-[#E5E7EB]
                      border border-[#2B3140]
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