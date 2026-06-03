import { FaCertificate } from "react-icons/fa";

import javascriptCert from "../assets/javascript-bootcamp-certification.jpg";
import gitCert from "../assets/git&github-certification.jpg";
import htmlCssCert from "../assets/html&css-bootcamp-certification.jpg";
import cssHackerrankCert from "../assets/css-certification-hackerrank.jpg";

export default function Certifications() {
  const certifications = [
    {
      title: "JavaScript Bootcamp",
      provider: "LetsUpgrade",
      link: javascriptCert,
      skills: [
        "JavaScript",
        "ES6+",
        "DOM",
        "Async/Await",
        "Frontend",
      ],
    },

    {
      title: "Git & GitHub",
      provider: "LetsUpgrade",
      link: gitCert,
      skills: [
        "Git",
        "GitHub",
        "Version Control",
        "Branching",
        "Collaboration",
      ],
    },

    {
      title: "HTML & CSS Bootcamp",
      provider: "LetsUpgrade",
      link: htmlCssCert,
      skills: [
        "HTML5",
        "CSS3",
        "Responsive Design",
        "Flexbox",
        "Grid",
      ],
    },

    {
      title: "CSS (Basic)",
      provider: "HackerRank",
      link: cssHackerrankCert,
      skills: [
        "CSS",
        "Responsive UI",
        "Layouts",
        "Selectors",
        "Styling",
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="py-24 bg-[#070d1a] relative overflow-hidden"
    >
      {/* Grid */}
      <div
        className="
          absolute inset-0 opacity-[0.03]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-[#fca311]/80 mb-4">
            Credentials
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-white leading-none">
            Verified
            <br />
            Skills
          </h2>

          <p className="mt-8 max-w-3xl text-lg text-[#cfd6e6]/75 leading-relaxed">
            Industry-recognized certifications validating my knowledge of
            modern web development, frontend engineering, version control,
            and software development workflows.
          </p>
        </div>

        {/* CERTIFICATION WALL */}
        <div className="space-y-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                group
                flex flex-col lg:flex-row
                lg:items-center
                justify-between
                gap-8
                p-8
                border-b
                border-white/10
                hover:border-[#fca311]/30
                transition-all
              "
            >
              {/* LEFT */}
              <div className="flex items-start gap-6">
                {/* <div
                  className="
                    text-5xl
                    md:text-6xl
                    font-black
                    text-[#fca311]/20
                    min-w-[80px]
                  "
                >
                  {String(index + 1).padStart(2, "0")}
                </div> */}

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[#fca311] mb-2">
                    {cert.provider}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {cert.title}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-2
                          rounded-xl
                          bg-black/20
                          border border-white/10
                          text-[#cfd6e6]
                          text-sm
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-6
                  py-3
                  rounded-xl
                  bg-[#fca311]
                  text-black
                  font-semibold
                  hover:scale-[1.03]
                  hover:shadow-[0_0_25px_rgba(252,163,17,0.35)]
                  transition
                  shrink-0
                "
              >
                <FaCertificate />
                View Certificate
              </a>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div
            className="
              bg-[#070d1a]
              border border-white/10
              rounded-3xl
              p-8
              hover:border-[#fca311]/30
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-sm mb-2">
              Certifications
            </p>

            <h3 className="text-4xl font-black text-[#fca311]">
              4+
            </h3>
          </div>

          <div
            className="
              bg-[#070d1a]
              border border-white/10
              rounded-3xl
              p-8
              hover:border-[#fca311]/30
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-sm mb-2">
              Focus Area
            </p>

            <h3 className="text-4xl font-black text-[#fca311]">
              Frontend
            </h3>
          </div>

          <div
            className="
              bg-[#070d1a]
              border border-white/10
              rounded-3xl
              p-8
              hover:border-[#fca311]/30
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-sm mb-2">
              Learning Mindset
            </p>

            <h3 className="text-4xl font-black text-[#fca311]">
              Continuous
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}