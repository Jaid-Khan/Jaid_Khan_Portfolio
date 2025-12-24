"use client"

export default function Projects() {
  const projects = [
    {
      title: "Task Manager App",
      description:
        "A feature-rich task management application built with React, showcasing state management and UI patterns.",
      tech: ["React.js", "JavaScript", "CSS3", "localStorage"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "REST API Integration",
      description:
        "Dynamic React application that fetches and displays data from REST APIs with error handling and loading states.",
      tech: ["React.js", "Fetch API", "Node.js", "Express.js"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Responsive weather application with real-time data fetching, built to demonstrate API integration and responsive design.",
      tech: ["React.js", "Axios", "Tailwind CSS", "Responsive Design"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "E-Commerce Product Page",
      description:
        "A modern product showcase page with filtering, sorting, and interactive features using component-based architecture.",
      tech: ["React.js", "JavaScript", "Tailwind CSS", "Component Design"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio demonstrating modern web design, smooth animations, and responsive layouts.",
      tech: ["React.js", "Next.js", "Tailwind CSS", "Animation"],
      github: "https://github.com",
      demo: "#",
    },
    {
      title: "Chat Application UI",
      description:
        "Interactive chat interface showcasing component composition, state management, and modern UI patterns.",
      tech: ["React.js", "CSS Modules", "JavaScript", "UI/UX Design"],
      github: "https://github.com",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-card border border-primary/30 rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 transition-all duration-300" />

              <div className="p-6 space-y-4 relative z-10">
                <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs bg-accent/20 text-accent font-medium border border-accent/30 hover:border-accent transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-lg text-center text-sm font-semibold bg-primary/20 text-primary hover:bg-primary hover:text-foreground transition-all border border-primary/30 hover:border-primary"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 rounded-lg text-center text-sm font-semibold bg-accent/20 text-accent hover:bg-accent hover:text-background transition-all border border-accent/30 hover:border-accent"
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
  )
}
