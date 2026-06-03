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
      title: "GitGuard AI — Automated Pull Request Sentinel",
      category: "AI Developer Platform",
      description:
        "Built an AI-powered GitHub code review platform that automatically analyzes pull requests, detects bugs, security vulnerabilities, performance issues, code quality concerns, and provides intelligent review feedback directly inside GitHub pull requests.",
      highlights: [
        "Implemented GitHub webhook-driven architecture for automated PR analysis",
        "Built AI-powered review engine using Groq and Llama 3.1",
        "Developed intelligent diff processing and changed-file analysis pipeline",
        "Implemented automated GitHub review comments and inline feedback system",
        "Built repository-level review settings with Strict Mode and filtering controls",
        "Created analytics dashboard with review history, severity tracking, repository insights, and review metrics",
      ],
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "GitHub Webhooks",
        "Octokit",
        "Groq API",
        "Llama 3.1",
        "AI Code Review",
        "Tailwind CSS",
      ],
      github: "https://github.com/Jaid-Khan/Git_Guard",
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
      github: "https://github.com/Jaid-Khan/Job_Portal_Frontend",
      github2: "https://github.com/Jaid-Khan/Job_Portal_Backend",
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
      github: "https://github.com/Jaid-Khan/University-Management-System",
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
      className="bg-[#070d1a] py-24 relative overflow-hidden"
    >

        {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="absolute inset-0 " />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-[#fca311]/80 mb-4">
            Featured Work
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95]">
            Products
            <br />& <span className="text-[#fca311]">Platforms</span>
          </h2>

          <p className="mt-8 text-lg text-[#cfd6e6]/75 max-w-3xl leading-relaxed">
            Production-focused systems, AI applications, backend platforms, and
            scalable MERN stack products built with real-world engineering
            practices.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-[#0b1220]
                border border-white/10
                rounded-3xl
                p-8 lg:p-10
                transition-all duration-300
                hover:border-[#fca311]/30
                hover:shadow-[0_0_40px_rgba(252,163,17,0.08)]
              "
            >
              {/* TOP */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                <div className="max-w-4xl">
                  <span
                    className="
                      inline-flex
                      px-3 py-1
                      rounded-full
                      bg-[#fca311]/10
                      border border-[#fca311]/20
                      text-[#fca311]
                      text-xs
                      uppercase
                      tracking-[0.15em]
                      font-semibold
                      mb-4
                    "
                  >
                    {project.category}
                  </span>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>

                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    border border-[#fca311]/20
                    bg-[#070d1a]
                    flex items-center justify-center
                    text-[#fca311]
                    font-bold
                    text-lg
                    shrink-0
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* DESCRIPTION */}
              <p className="text-[#cfd6e6]/75 leading-relaxed mb-8 max-w-5xl">
                {project.description}
              </p>

              {/* HIGHLIGHTS */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#fca311] mt-2 shrink-0" />

                    <p className="text-[#cfd6e6]/85 text-sm leading-relaxed">
                      {item}
                    </p>
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
                      bg-[#070d1a]
                      border border-white/10
                      text-[#fca311]
                      text-sm
                      font-medium
                      hover:border-[#fca311]/40
                      hover:bg-[#fca311]/5
                      transition
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
                    px-5 py-3
                    rounded-xl
                    bg-[#070d1a]
                    border border-white/10
                    text-white
                    text-sm
                    font-semibold
                    hover:border-[#fca311]/40
                    hover:text-[#fca311]
                    transition
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
                      px-5 py-3
                      rounded-xl
                      bg-[#070d1a]
                      border border-white/10
                      text-white
                      text-sm
                      font-semibold
                      hover:border-[#fca311]/40
                      hover:text-[#fca311]
                      transition
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
                      px-5 py-3
                      rounded-xl
                      bg-[#fca311]
                      text-black
                      text-sm
                      font-semibold
                      hover:scale-[1.03]
                      hover:shadow-[0_0_25px_rgba(252,163,17,0.35)]
                      transition
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
                      px-5 py-3
                      rounded-xl
                      border border-white/10
                      text-white
                      text-sm
                      font-semibold
                      hover:border-[#fca311]/40
                      hover:text-[#fca311]
                      hover:bg-[#070d1a]
                      transition
                    "
                  >
                    Admin Panel
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
