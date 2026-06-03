import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-[#070d1a] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm uppercase tracking-[0.25em] text-[#fca311]/80 mb-6">
            Contact
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95]">
            Let's Build
            <br />
            <span className="text-[#fca311]">Something Great</span>
          </h2>

          <p className="mt-8 text-lg text-[#cfd6e6]/75 leading-relaxed">
            Open to MERN Stack, Full Stack, Backend Development, and
            AI Application opportunities. Whether it's a job opportunity,
            freelance project, startup idea, or technical collaboration,
            I'd love to hear from you.
          </p>
        </div>

        {/* MAIN CARD */}
        <div
          className="
            mt-16
            border border-white/10
            rounded-3xl
            bg-black/10
            p-8 md:p-12
            hover:border-[#fca311]/30
            transition-all duration-300
          "
        >
          {/* CONTACT METHODS */}
          <div className="grid md:grid-cols-2 gap-6">
            <a
              href="mailto:jaidkhan04072001@gmail.com"
              className="
                group
                p-8
                rounded-3xl
                border border-white/10
                bg-black/10
                hover:border-[#fca311]/30
                transition-all duration-300
              "
            >
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#fca311]/10
                  border border-[#fca311]/20
                  flex items-center justify-center
                  text-[#fca311]
                  text-2xl
                  mb-5
                "
              >
                <FaEnvelope />
              </div>

              <p className="text-[#fca311] text-sm uppercase tracking-wider mb-2">
                Email
              </p>

              <h3 className="text-xl font-bold text-white break-all">
                jaidkhan04072001@gmail.com
              </h3>
            </a>

            <a
              href="tel:+918871104006"
              className="
                group
                p-8
                rounded-3xl
                border border-white/10
                bg-black/10
                hover:border-[#fca311]/30
                transition-all duration-300
              "
            >
              <div
                className="
                  w-16 h-16
                  rounded-2xl
                  bg-[#fca311]/10
                  border border-[#fca311]/20
                  flex items-center justify-center
                  text-[#fca311]
                  text-2xl
                  mb-5
                "
              >
                <FaPhoneAlt />
              </div>

              <p className="text-[#fca311] text-sm uppercase tracking-wider mb-2">
                Phone
              </p>

              <h3 className="text-xl font-bold text-white">
                +91 8871104006
              </h3>
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="mt-10 flex justify-center gap-5">
            <a
              href="https://github.com/Jaid-Khan"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-16 h-16
                rounded-2xl
                border border-white/10
                bg-black/10
                flex items-center justify-center
                text-white
                text-xl
                hover:border-[#fca311]/30
                hover:text-[#fca311]
                transition-all duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/jaid-khan/"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-16 h-16
                rounded-2xl
                border border-white/10
                bg-black/10
                flex items-center justify-center
                text-white
                text-xl
                hover:border-[#fca311]/30
                hover:text-[#fca311]
                transition-all duration-300
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:jaidkhan04072001@gmail.com"
              className="
                w-16 h-16
                rounded-2xl
                border border-white/10
                bg-black/10
                flex items-center justify-center
                text-white
                text-xl
                hover:border-[#fca311]/30
                hover:text-[#fca311]
                transition-all duration-300
              "
            >
              <FaEnvelope />
            </a>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="border-t border-[#fca311]/20 pt-6">
              <h3 className="text-4xl font-black text-[#fca311]">
                MERN
              </h3>

              <p className="mt-2 text-[#cfd6e6]/60">
                Full Stack Development
              </p>
            </div>

            <div className="border-t border-[#fca311]/20 pt-6">
              <h3 className="text-4xl font-black text-[#fca311]">
                AI
              </h3>

              <p className="mt-2 text-[#cfd6e6]/60">
                RAG & LLM Systems
              </p>
            </div>

            <div className="border-t border-[#fca311]/20 pt-6">
              <h3 className="text-4xl font-black text-[#fca311]">
                APIs
              </h3>

              <p className="mt-2 text-[#cfd6e6]/60">
                Backend Engineering
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}