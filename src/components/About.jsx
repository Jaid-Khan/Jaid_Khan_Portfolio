export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm a passionate frontend developer with a strong foundation in Computer Science Engineering concepts. My
              journey started with a Diploma in Electronics & Telecommunication Engineering, and I've been steadily
              building expertise in modern web development.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              I'm particularly interested in crafting pixel-perfect, responsive interfaces that provide exceptional user
              experiences. I believe in writing clean, maintainable code and staying updated with the latest web
              technologies.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-background rounded-lg border border-border/50">
              <h3 className="font-semibold text-accent mb-3">Education</h3>
              <ul className="space-y-2 text-foreground/70">
                <li>• Diploma in Electronics & Telecommunication Engineering</li>
                <li>• Computer Science Engineering Foundation</li>
                <li>• Networking Fundamentals</li>
              </ul>
            </div>

            <div className="p-6 bg-background rounded-lg border border-border/50">
              <h3 className="font-semibold text-accent mb-3">Current Focus</h3>
              <p className="text-foreground/70">
                Mastering MERN stack development and building full-stack applications with modern tools and best
                practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
