import heroImg from "../assets/hero-image.png";

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#020617] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute top-0 left-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-violet-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] sm:w-[500px] h-[400px] sm:h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-fuchsia-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 pt-14 pb-20">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div className="relative z-10 text-center lg:text-left">
            {/* HEADING */}
            <h1 className="text-4xl sm:text-6xl lg:text-6xl font-black leading-[1.05] tracking-tight">
              Building
              <br />

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                Modern Frontend
              </span>

              <br />
              Experiences
            </h1>

            {/* SUBTEXT */}
            <p className="mt-8 text-base sm:text-lg lg:text-xl text-white/65 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              Frontend-focused MERN Stack Developer crafting scalable web
              applications, AI-powered systems, and modern user experiences
              using React, Tailwind, Node.js, and MongoDB.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden px-8 py-4 rounded-2xl font-semibold bg-gradient-to-r from-cyan-500 to-violet-600 hover:scale-[1.03] transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.35)]"
              >
                <span className="relative z-10">View Projects</span>

                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300" />
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-all duration-300 text-white/90 hover:text-white"
              >
                Contact Me
              </button>
            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-3 mt-10 justify-center lg:justify-start">
              {[
                "React",
                "Tailwind",
                "Node.js",
                "MongoDB",
                "Express",
                "REST APIs",
                "AI",
                "RAG",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/5 backdrop-blur-xl text-white/70 hover:text-white hover:border-cyan-400/40 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
<div className="relative flex justify-center">
  <div className="relative w-full max-w-[420px] sm:max-w-[500px] h-[420px] sm:h-[500px]">

    {/* MAIN IMAGE CARD */}
    <div className="absolute top-10 right-8 sm:right-14 w-[240px] sm:w-[320px] h-[320px] sm:h-[400px] rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl rotate-2 sm:rotate-3 hover:rotate-0 transition duration-500 z-10">
      <img
        src={heroImg}
        alt="Jaid Khan"
        className="w-full h-full object-cover"
      />
    </div>

    {/* CARD 1 */}
    <div className="absolute top-4 left-0 p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl w-[150px] sm:w-[180px] hover:-translate-y-2 transition duration-300 z-20">
      <p className="text-[10px] sm:text-xs text-cyan-400 mb-1">
        Frontend Engineer
      </p>

      <h3 className="text-sm sm:text-base font-bold leading-snug">
        Clean & scalable interfaces
      </h3>
    </div>

    {/* CARD 2 */}
    <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-8 p-3 sm:p-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-xl w-[170px] sm:w-[200px] hover:-translate-y-2 transition duration-300 z-20">
      <p className="text-[10px] sm:text-xs text-violet-400 mb-1">
        Featured Project
      </p>

      <h3 className="text-lg sm:text-xl font-bold mb-1">
        OpsMind AI
      </h3>

      <p className="text-[10px] sm:text-xs text-white/60 leading-relaxed">
        Enterprise RAG system with conversational AI responses.
      </p>
    </div>

    {/* CARD 3 */}
    <div className="absolute top-28 sm:top-36 right-0 px-3 py-2 sm:px-4 sm:py-3 rounded-xl border border-white/10 bg-[#0f172a]/80 backdrop-blur-xl shadow-xl hover:scale-105 transition z-20">
      <p className="text-[10px] sm:text-xs text-white/60">
        Experience
      </p>

      <h3 className="text-base sm:text-lg font-bold">
        1+ Years
      </h3>
    </div>

    {/* GLOW */}
    <div className="absolute inset-0 border border-cyan-500/10 rounded-full blur-3xl scale-110 -z-10" />
  </div>
</div>
        </div>
      </div>
    </section>
  );
}