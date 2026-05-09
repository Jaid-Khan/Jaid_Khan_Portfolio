export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-fuchsia-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            About Me
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-white">
            Building Modern
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Full Stack Applications
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-white/65 text-base sm:text-lg leading-relaxed">
            MERN Stack Developer focused on creating scalable web applications,
            responsive interfaces, REST APIs, and modern full-stack systems
            using industry-standard technologies.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          {/* LEFT SIDE */}
          <div
            className="
              relative overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8 sm:p-10
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 pointer-events-none" />

            <div className="relative z-10">
              {/* Mini Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-8">
                MERN Stack Developer
              </div>

              {/* Text */}
              <div className="space-y-6 text-white/75 text-lg leading-relaxed">
                <p>
                  I’m a passionate{" "}
                  <span className="text-cyan-400 font-semibold">
                    Full Stack MERN Developer
                  </span>{" "}
                  with a strong foundation in Computer Science Engineering and
                  hands-on experience building responsive and scalable web
                  applications.
                </p>

                <p>
                  My development journey evolved from Electronics &
                  Telecommunication Engineering into modern web technologies
                  including{" "}
                  <span className="text-violet-400 font-semibold">
                    MongoDB, Express.js, React.js, Node.js, and Tailwind CSS
                  </span>
                  .
                </p>

                <p>
                  I enjoy creating{" "}
                  <span className="text-cyan-400 font-semibold">
                    clean frontend interfaces and powerful backend systems
                  </span>{" "}
                  with reusable architecture, REST APIs, authentication flows,
                  and responsive user experiences.
                </p>

                <p>
                  Currently working on real-world MERN applications and
                  AI-powered systems like{" "}
                  <span className="text-violet-400 font-semibold">
                    OpsMind AI
                  </span>
                  , focusing on scalable architecture and production-ready
                  development practices.
                </p>
              </div>

              {/* Bottom Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10">
                {[
                  { value: "MongoDB", label: "Database" },
                  { value: "React", label: "Frontend" },
                  { value: "Node.js", label: "Backend" },
                  { value: "REST API", label: "Integration" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      p-4 text-center
                    "
                  >
                    <h3 className="text-lg font-black text-white">
                      {item.value}
                    </h3>

                    <p className="text-sm text-white/55 mt-1">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">
            {/* CARD 1 */}
            <div
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-7
                hover:border-cyan-400/30
                transition-all duration-300
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-2xl shadow-lg mb-5">
                  ⚡
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Technical Skills
                </h3>

                <ul className="space-y-3 text-white/70">
                  <li>• MongoDB & Mongoose Database Management</li>
                  <li>• Express.js & Node.js Backend Development</li>
                  <li>• React.js & Tailwind CSS Frontend UI</li>
                  <li>• REST API Development & Integration</li>
                  <li>• Authentication & Full Stack Architecture</li>
                </ul>
              </div>
            </div>

            {/* CARD 2 */}
            <div
              className="
                group relative overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-7
                hover:border-violet-400/30
                transition-all duration-300
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-2xl shadow-lg mb-5">
                  🚀
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  Tools & Workflow
                </h3>

                <p className="text-white/70 leading-relaxed">
                  Experienced with Git, GitHub, Postman, VS Code, Netlify,
                  Render, and Vercel for version control, API testing,
                  deployment, and efficient full-stack development workflows.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-gradient-to-r from-cyan-500/10 to-violet-500/10
                backdrop-blur-2xl
                p-7
              "
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div>
                  <p className="text-cyan-300 text-sm font-medium mb-2">
                    Full Stack Development
                  </p>

                  <h3 className="text-2xl font-bold text-white leading-snug">
                    Clean UI.
                    <br />
                    Powerful Backend.
                  </h3>
                </div>

                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="
                    px-6 py-3 rounded-2xl
                    bg-gradient-to-r from-cyan-500 to-violet-600
                    text-white font-semibold
                    hover:scale-105
                    transition-all duration-300
                    shadow-[0_0_30px_rgba(59,130,246,0.35)]
                  "
                >
                  Let's Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}