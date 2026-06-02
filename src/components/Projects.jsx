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
    className="bg-[#0F1117] py-10"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* HEADER */}
      <div className="mb-20">
        <p className="text-sm uppercase tracking-[0.25em] text-[#A1A1AA] mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] leading-tight">
          Selected
          <br />
          Projects
        </h2>

        <p className="mt-6 text-lg text-[#A1A1AA] max-w-3xl leading-relaxed">
          Production-focused systems, AI applications, backend platforms,
          and scalable MERN stack products built with real-world engineering
          practices.
        </p>
      </div>

      {/* PROJECTS */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-[#161A22]
              border border-[#272B35]
              rounded-3xl
              p-8 lg:p-10
              transition-all duration-300
              hover:border-[#343B49]
            "
          >
            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div className="max-w-4xl">
                <p className="text-sm uppercase tracking-[0.2em] text-[#A1A1AA] mb-3">
                  {project.category}
                </p>

                <h3 className="text-2xl lg:text-3xl font-bold text-[#F8FAFC] leading-tight">
                  {project.title}
                </h3>
              </div>

              <div
                className="
                  w-12 h-12
                  rounded-2xl
                  border border-[#272B35]
                  bg-[#0F1117]
                  flex items-center justify-center
                  text-[#F8FAFC]
                  font-bold
                  shrink-0
                "
              >
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#A1A1AA] leading-relaxed mb-8 max-w-5xl">
              {project.description}
            </p>

            {/* HIGHLIGHTS */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {project.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3"
                >
                  <span className="w-2 h-2 rounded-full bg-[#F8FAFC] mt-2 shrink-0" />

                  <p className="text-[#D4D4D8] text-sm leading-relaxed">
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
                    bg-[#222734]
                    border border-[#2B3140]
                    text-[#E5E7EB]
                    text-sm
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
                  bg-[#222734]
                  border border-[#2B3140]
                  text-[#F8FAFC]
                  text-sm font-semibold
                  hover:border-[#434C5E]
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
                    bg-[#222734]
                    border border-[#2B3140]
                    text-[#F8FAFC]
                    text-sm font-semibold
                    hover:border-[#434C5E]
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
                    bg-[#F8FAFC]
                    text-[#0F1117]
                    text-sm font-semibold
                    hover:opacity-90
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
                    border border-[#2B3140]
                    text-[#F8FAFC]
                    text-sm font-semibold
                    hover:bg-[#222734]
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