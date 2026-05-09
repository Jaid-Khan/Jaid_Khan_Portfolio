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

      description:
        "Completed an intensive JavaScript Bootcamp covering modern JavaScript concepts, ES6+, DOM manipulation, asynchronous programming, and real-world frontend development fundamentals.",

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

      description:
        "Hands-on certification focused on Git workflows, version control systems, repository management, branching, collaboration, and professional development practices.",

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

      description:
        "Built strong foundations in semantic HTML, responsive layouts, Flexbox, Grid systems, and modern CSS styling techniques for professional web development.",

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

      description:
        "Certified in CSS fundamentals including selectors, layouts, spacing systems, responsive design principles, and modern styling best practices.",

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
      className="relative overflow-hidden bg-[#020617] text-white py-24 px-5 sm:px-8 lg:px-16"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* SECTION HEADER */}
        <div className="mb-16 text-center lg:text-left">
          <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4">
            Achievements
          </p>

          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
        </div>

        {/* CERTIFICATION GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-6 sm:p-8
                shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                hover:-translate-y-1
                transition-all duration-500
                group
              "
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* ICON */}
              <div
                className="
                  relative
                  w-14 h-14 rounded-2xl
                  flex items-center justify-center
                  bg-gradient-to-br from-cyan-500 to-violet-600
                  text-2xl
                  shadow-[0_0_30px_rgba(59,130,246,0.35)]
                  mb-6
                "
              >
                <FaCertificate />
              </div>

              {/* CONTENT */}
              <div className="relative">
                <h3 className="text-2xl font-bold text-white leading-snug">
                  {cert.title}
                </h3>

                <p className="mt-2 text-cyan-400 font-semibold">
                  {cert.provider}
                </p>

                <p className="mt-5 text-sm sm:text-base text-white/70 leading-relaxed">
                  {cert.description}
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 py-1.5 rounded-full
                        border border-white/10
                        bg-white/5
                        backdrop-blur-xl
                        text-xs font-medium
                        text-white/75
                        hover:border-cyan-400/30
                        hover:bg-white/10
                        transition-all duration-300
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <div className="mt-8">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center justify-center gap-2
                      px-5 py-3 rounded-xl
                      bg-gradient-to-r from-cyan-500 to-violet-600
                      text-sm font-semibold
                      shadow-[0_0_30px_rgba(59,130,246,0.35)]
                      hover:scale-[1.03]
                      transition-all duration-300
                    "
                  >
                    <FaCertificate />

                    View Certificate
                  </a>
                </div>
              </div>

              {/* CORNER GLOW */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}