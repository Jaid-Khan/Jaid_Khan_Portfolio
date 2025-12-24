"use client"

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold text-balance mb-4">
              Hi, I'm{" "}
              <span className="glow-text bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Jaid Khan
              </span>
            </h1>
            <p className="text-xl text-accent font-medium mb-2">Frontend Developer | MERN Stack Learner</p>
          </div>

          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            I build modern, responsive, and scalable web applications using React and modern frontend tools. Currently
            learning full-stack development with the MERN stack.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-foreground font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-200 transform hover:scale-105"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 rounded-lg border-2 border-accent text-accent font-semibold hover:bg-accent/10 hover:shadow-lg hover:shadow-accent/30 transition-all duration-200 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
