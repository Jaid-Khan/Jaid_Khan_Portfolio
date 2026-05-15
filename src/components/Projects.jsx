export default function Projects() {
  const projects = [
    {
      title: "OpsMind AI — Enterprise RAG SOP Assistant",
      category: "AI SaaS Platform",
      description:
        "Built a production-style Enterprise RAG (Retrieval-Augmented Generation) system that allows organizations to upload SOPs, HR policies, onboarding documents, and internal PDFs, then query them using natural language with AI-generated answers and source citations.",
      highlights: [
        "Implemented complete RAG pipeline with PDF ingestion, chunking, embeddings, vector search, and LLM response generation",
        "Built MongoDB Atlas Vector Search with semantic similarity retrieval",
        "Integrated Groq Llama 3.1 with strict hallucination-controlled prompting",
        "Implemented source citation system with filename & page references",
        "Designed scalable MERN backend with modular MVC architecture",
        "Built streaming response architecture and fallback AI response system",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vector Search",
        "RAG",
        "Groq API",
        "Llama 3.1",
        "Tailwind CSS",
        "Multer",
      ],
      github: "https://github.com/Jaid-Khan/OpsMind-AI",
      demo: "",
    },

    {
      title: "Government Job Portal & Recruitment Management System",
      category: "Full-Stack MERN Platform",
      description:
        "Developed a scalable MERN-based recruitment management platform for handling government job updates, admit cards, vacancies, results, eligibility criteria, application fees, and recruitment workflows through a secure admin-driven system.",
      highlights: [
        "Built secure JWT authentication with protected admin workflows",
        "Implemented dynamic recruitment schema architecture",
        "Designed category-wise vacancy allocation & fee management system",
        "Created scalable REST APIs with modular MVC architecture",
        "Built dynamic React admin dashboard with reusable form systems",
        "Implemented draft/publish workflow for recruitment lifecycle management",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "Axios",
        "REST APIs",
        "Mongoose",
        "CSS3",
      ],
      github:
        "https://github.com/Jaid-Khan/Job_Portal_Frontend",
      github2:
        "https://github.com/Jaid-Khan/Job_Portal_Backend",
      demo: "https://alwaysonlinejobs.netlify.app/",
      admin: "https://alwaysonlinejobs.netlify.app/admin",
    },

    {
      title: "University Management System",
      category: "Role-Based MERN Application",
      description:
        "Built a full-stack University Management System with Admin, Teacher, and Student modules supporting attendance tracking, course handling, grade management, RBAC workflows, and secure academic operations.",
      highlights: [
        "Implemented JWT authentication with RBAC architecture",
        "Built dedicated Admin, Teacher, and Student dashboards",
        "Developed attendance tracking & automatic percentage calculation",
        "Implemented marks management & automatic grade generation logic",
        "Created scalable REST API backend with centralized middleware handling",
        "Designed secure frontend/backend protected route system",
      ],
      tech: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "bcrypt",
        "REST APIs",
      ],
      github:
        "https://github.com/Jaid-Khan/University-Management-System",
      demo: "https://universitymanagementsystems.netlify.app/login",
    },

    {
      title: "E-Commerce Web Application",
      category: "Frontend React Application",
      description:
        "Designed and developed a responsive E-Commerce application with reusable component architecture, shopping cart functionality, dynamic product rendering, and mobile-first frontend engineering practices.",
      highlights: [
        "Built reusable React component architecture",
        "Implemented dynamic product rendering system",
        "Developed shopping cart & quantity management workflows",
        "Created responsive layouts optimized for all devices",
        "Implemented state-driven UI interactions using React Hooks",
        "Focused on scalable frontend folder structure & UX",
      ],
      tech: [
        "React.js",
        "JavaScript",
        "CSS3",
        "React Hooks",
        "Responsive Design",
      ],
      github: "https://github.com/Jaid-Khan/E-Commerce",
      demo: "https://urbaneaseecommerce.netlify.app/",
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
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-4">
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Featured
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Projects
            </span>
          </h2>

          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            A collection of scalable MERN stack applications, AI-powered
            systems, and production-focused projects demonstrating frontend,
            backend, authentication, REST API, and enterprise architecture
            expertise.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group relative
                rounded-3xl
                border border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                overflow-hidden
                p-8
                hover:-translate-y-2
                transition-all duration-500
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >
              {/* HOVER EFFECT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
              </div>

              {/* TOP LIGHT */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              <div className="relative z-10">
                {/* TOP */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs tracking-[0.2em] uppercase text-cyan-400 font-semibold">
                      {project.category}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold mt-3 leading-tight group-hover:text-cyan-300 transition duration-300">
                      {project.title}
                    </h3>
                  </div>

                  <div className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-cyan-400 font-bold shrink-0">
                    0{index + 1}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-white/65 leading-relaxed text-sm sm:text-base mb-7">
                  {project.description}
                </p>

                {/* HIGHLIGHTS */}
                <div className="space-y-3 mb-8">
                  {project.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-white/70"
                    >
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      <p>{item}</p>
                    </div>
                  ))}
                </div>

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
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex-1 min-w-[140px]
                      px-5 py-3
                      rounded-2xl
                      border border-white/10
                      bg-white/5
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

                  {project.github2 && (
                    <a
                      href={project.github2}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 min-w-[140px]
                        px-5 py-3
                        rounded-2xl
                        border border-white/10
                        bg-white/5
                        text-center
                        text-sm font-semibold
                        text-white/80
                        hover:text-white
                        hover:bg-white/10
                        hover:border-cyan-400/30
                        transition-all duration-300
                      "
                    >
                      Backend Repo
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 min-w-[140px]
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
                  )}

                  {project.admin && (
                    <a
                      href={project.admin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex-1 min-w-[140px]
                        px-5 py-3
                        rounded-2xl
                        border border-cyan-400/20
                        bg-cyan-500/10
                        text-center
                        text-sm font-semibold
                        text-cyan-300
                        hover:bg-cyan-500/20
                        transition-all duration-300
                      "
                    >
                      Admin Panel
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}