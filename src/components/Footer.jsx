import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#020617] border-t border-white/10">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Jaid Khan
            </h3>

            <p className="mt-3 text-white/60 max-w-md leading-relaxed">
              Full Stack MERN Developer focused on building scalable web
              applications, modern UI experiences, REST APIs, and AI-powered
              systems.
            </p>
          </div>

          {/* CENTER SOCIALS */}
          <div className="flex items-center gap-4">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/Jaid-Khan",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/jaid-khan",
              },
              {
                icon: <FaEnvelope />,
                link: "mailto:jaidkhan04072001@gmail.com",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  w-12 h-12 rounded-2xl
                  border border-white/10
                  bg-white/5
                  backdrop-blur-xl
                  flex items-center justify-center
                  text-lg text-white/70
                  hover:text-white
                  hover:border-cyan-400/30
                  hover:-translate-y-1
                  transition-all duration-300
                "
              >
                <span className="group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
              </a>
            ))}
          </div>

          {/* RIGHT */}
          <button
            onClick={scrollToTop}
            className="
              group
              flex items-center gap-2
              px-5 py-3 rounded-2xl
              border border-white/10
              bg-white/5
              backdrop-blur-xl
              text-white/70 hover:text-white
              hover:border-violet-400/30
              hover:-translate-y-1
              transition-all duration-300
            "
          >
            <span className="text-sm font-medium">Back To Top</span>

            <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* DIVIDER */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-white/45 text-center md:text-left">
            © {currentYear}{" "}
            <span className="text-cyan-400 font-medium">Jaid Khan</span>. All
            rights reserved.
          </p>

          <p className="text-white/40 text-center">
            Designed & Built using{" "}
            <span className="text-cyan-400">React.js</span>,{" "}
            <span className="text-violet-400">Tailwind CSS</span>, and modern
            web technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}