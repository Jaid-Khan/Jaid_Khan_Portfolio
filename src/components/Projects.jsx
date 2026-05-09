export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Product Page",
      description:
        "Developed a responsive e-commerce web application with dynamic product rendering, reusable components, cart functionality, and clean UI architecture using React and Tailwind CSS.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Responsive UI",
        "Component Design",
      ],
      github: "https://github.com/Jaid-Khan/E-Commerce",
      demo: "https://urbaneaseecommerce.netlify.app/",
    },

    {
      title: "Cyber Cafe Website",
      description:
        "Built a modern responsive cyber café platform featuring digital services, quick navigation, form services, and smooth UI interactions with mobile-first design.",
      tech: [
        "HTML",
        "CSS3",
        "JavaScript",
        "Tailwind CSS",
        "Responsive Design",
      ],
      github: "https://github.com/Jaid-Khan/Always-Online-Cyber-Cafe-Website",
      demo: "https://alwaysonlineshop.netlify.app/",
    },

    {
      title: "Portfolio Website",
      description:
        "Designed and developed a personal developer portfolio showcasing projects, skills, certifications, and experience with a modern responsive UI.",
      tech: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "Animations",
      ],
      github: "https://github.com/Jaid-Khan/Jaid_Khan_Portfolio_Website",
      demo: "https://jaidkhanv1.netlify.app/",
    },

    {
      title: "Digital Clock",
      description:
        "A sleek real-time digital clock built with JavaScript and Tailwind CSS featuring responsive design and smooth UI styling.",
      tech: [
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "Responsive UI",
      ],
      github: "https://github.com/Jaid-Khan/Digital-Clock",
      demo: "https://digital-clock-jaid-khan.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#020617] text-white py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* GLOWS */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>

          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A collection of modern web applications, responsive interfaces, and
            MERN stack projects focused on clean architecture and user
            experience.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                overflow-hidden
                p-7
                hover:-translate-y-2
                transition-all duration-500
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
              </div>

              {/* TOP LIGHT */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* CONTENT */}
              <div className="relative z-10">
                {/* PROJECT NUMBER */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-sm text-white/40 font-medium">
                    0{index + 1}
                  </span>

                  <div className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-cyan-400 text-sm font-bold">
                    ↗
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-300 transition duration-300">
                  {project.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-white/60 leading-relaxed text-sm sm:text-base mb-6">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-4 py-2
                        rounded-xl
                        border border-white/10
                        bg-[#0f172a]/70
                        backdrop-blur-xl
                        text-xs sm:text-sm
                        text-white/70
                        hover:text-white
                        hover:border-cyan-400/30
                        hover:bg-white/10
                        transition-all duration-300
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      px-5 py-3
                      rounded-2xl
                      border border-white/10
                      bg-white/5
                      backdrop-blur-xl
                      text-center
                      text-sm font-semibold
                      text-white/80
                      hover:text-white
                      hover:bg-white/10
                      hover:border-cyan-400/30
                      transition-all duration-300
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1
                      px-5 py-3
                      rounded-2xl
                      text-center
                      text-sm font-semibold
                      bg-gradient-to-r
                      from-cyan-500
                      to-violet-600
                      hover:scale-[1.03]
                      transition-all duration-300
                      shadow-[0_0_30px_rgba(59,130,246,0.35)]
                    "
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}