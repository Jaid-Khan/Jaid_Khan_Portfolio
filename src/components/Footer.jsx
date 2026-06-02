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
      className="bg-[#0F1117] py-24"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-[#A1A1AA] mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] leading-tight">
            Let's build
            <br />
            something useful.
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-[#A1A1AA] leading-relaxed">
            Open to MERN Stack, Full Stack, Backend Development,
            and AI Application opportunities. Feel free to reach out
            if you'd like to discuss projects, roles, collaborations,
            or software engineering opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="border border-[#272B35] bg-[#161A22] rounded-3xl p-7">
              <p className="text-sm uppercase tracking-wider text-[#71717A] mb-3">
                Email
              </p>

              <a
                href="mailto:jaidkhan04072001@gmail.com"
                className="text-[#F8FAFC] text-lg font-semibold hover:text-white"
              >
                jaidkhan04072001@gmail.com
              </a>
            </div>

            <div className="border border-[#272B35] bg-[#161A22] rounded-3xl p-7">
              <p className="text-sm uppercase tracking-wider text-[#71717A] mb-3">
                Phone
              </p>

              <a
                href="tel:+918871104006"
                className="text-[#F8FAFC] text-lg font-semibold hover:text-white"
              >
                +91 8871104006
              </a>
            </div>

            <div className="border border-[#272B35] bg-[#161A22] rounded-3xl p-7">
              <p className="text-sm uppercase tracking-wider text-[#71717A] mb-4">
                Social Links
              </p>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Jaid-Khan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12
                    rounded-xl
                    border border-[#272B35]
                    flex items-center justify-center
                    text-[#F8FAFC]
                    hover:bg-[#202632]
                    transition
                  "
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/jaid-khan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-12 h-12
                    rounded-xl
                    border border-[#272B35]
                    flex items-center justify-center
                    text-[#F8FAFC]
                    hover:bg-[#202632]
                    transition
                  "
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:jaidkhan04072001@gmail.com"
                  className="
                    w-12 h-12
                    rounded-xl
                    border border-[#272B35]
                    flex items-center justify-center
                    text-[#F8FAFC]
                    hover:bg-[#202632]
                    transition
                  "
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="border border-[#272B35] bg-[#161A22] rounded-3xl p-10 flex flex-col justify-between">
            <div>
              <p className="text-sm uppercase tracking-wider text-[#71717A] mb-3">
                Current Focus
              </p>

              <h3 className="text-3xl font-black text-[#F8FAFC] mb-6">
                Backend Engineering,
                AI Applications &
                Developer Tools
              </h3>

              <p className="text-[#A1A1AA] text-lg leading-relaxed">
                Currently building production-focused systems using
                React.js, Node.js, Express.js, MongoDB, REST APIs,
                Retrieval-Augmented Generation (RAG), and AI-powered
                developer tooling.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-5 mt-12">
              <div className="border border-[#272B35] rounded-2xl p-5">
                <h4 className="text-xl font-bold text-[#F8FAFC]">
                  MERN
                </h4>

                <p className="text-[#A1A1AA] mt-2 text-sm">
                  Primary Stack
                </p>
              </div>

              <div className="border border-[#272B35] rounded-2xl p-5">
                <h4 className="text-xl font-bold text-[#F8FAFC]">
                  AI
                </h4>

                <p className="text-[#A1A1AA] mt-2 text-sm">
                  Applications
                </p>
              </div>

              <div className="border border-[#272B35] rounded-2xl p-5">
                <h4 className="text-xl font-bold text-[#F8FAFC]">
                  APIs
                </h4>

                <p className="text-[#A1A1AA] mt-2 text-sm">
                  Backend Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}