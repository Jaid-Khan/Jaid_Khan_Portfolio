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
      className="relative bg-[#0F1117] py-24 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-white/[0.02] blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-white/[0.02] blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-[#71717A] mb-4">
            Certifications
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] leading-tight">
            Verified Skills &
            <br />
            Credentials
          </h2>

          <p className="mt-6 text-lg text-[#A1A1AA] max-w-3xl leading-relaxed">
            Professional certifications and technical training that support my
            expertise in frontend engineering, version control systems, and
            modern web development practices.
          </p>
        </div>

        {/* CERTIFICATIONS GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-3xl
                border border-[#272B35]
                bg-[#161A22]
                p-8
                hover:border-[#3A4050]
                transition-all duration-300
              "
            >

              {/* CONTENT */}
              <div className="relative z-10">
                <p className="text-sm uppercase tracking-wider text-[#71717A]">
                  {cert.provider}
                </p>

                <h3 className="text-2xl font-bold text-[#F8FAFC] mt-3">
                  {cert.title}
                </h3>

                <p className="mt-5 text-[#A1A1AA] leading-relaxed">
                  {cert.description}
                </p>

                {/* SKILLS */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        px-3 py-2
                        rounded-lg
                        bg-[#222734]
                        border border-[#2B3140]
                        text-xs
                        text-[#E5E7EB]
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    mt-8
                    px-5 py-3
                    rounded-xl
                    bg-[#F8FAFC]
                    text-[#0F1117]
                    font-semibold
                    hover:translate-y-[-2px]
                    transition
                  "
                >
                  <FaCertificate />
                  View Certificate
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#161A22] border border-[#272B35] rounded-2xl p-6">
            <p className="text-[#71717A] text-sm mb-2">
              Certifications
            </p>

            <h3 className="text-2xl font-bold text-[#F8FAFC]">
              4+
            </h3>
          </div>

          <div className="bg-[#161A22] border border-[#272B35] rounded-2xl p-6">
            <p className="text-[#71717A] text-sm mb-2">
              Focus Area
            </p>

            <h3 className="text-2xl font-bold text-[#F8FAFC]">
              Web Development
            </h3>
          </div>

          <div className="bg-[#161A22] border border-[#272B35] rounded-2xl p-6">
            <p className="text-[#71717A] text-sm mb-2">
              Learning Style
            </p>

            <h3 className="text-2xl font-bold text-[#F8FAFC]">
              Continuous
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}