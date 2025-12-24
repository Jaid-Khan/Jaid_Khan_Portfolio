export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6+)",
        "React.js",
        "Tailwind CSS",
        "Bootstrap",
        "Responsive Design",
        "Component Architecture",
      ],
    },
    {
      title: "Backend (Learning)",
      skills: ["Node.js", "Express.js", "REST APIs", "CORS & Middleware", "Axios", "Fetch API"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Netlify", "Vercel"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="p-8 rounded-xl bg-card border border-border/50 hover:border-accent/30 transition-colors duration-200"
            >
              <h3 className="text-xl font-bold mb-6 text-accent">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
