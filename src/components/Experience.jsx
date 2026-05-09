import {
  FaNetworkWired,
  FaCertificate,
  FaReact,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

import experienceCertificate from "../assets/MHRDexperience-certificate.jpg";
import skyrouteCertificate from "../assets/SkyRoute_Experience_Letter.jpg";

export default function Experience() {
  const experiences = [
    {
      role: "MERN Stack Developer Intern",
      company: "SkyRoute Solution",
      duration: "Jul 2025 – Nov 2025 · Remote Internship",
      icon: <FaReact />,
      description:
        "Completed a 4-month MERN Stack Development internship focused on modern frontend development, REST API integration, scalable application architecture, and real-world full stack development workflows.",

      responsibilities: [
        "Built responsive frontend interfaces using React.js and Tailwind CSS",
        "Worked with reusable component architecture and state management",
        "Integrated backend APIs and handled asynchronous data flow",
        "Developed MERN-based features with MongoDB, Express.js, React, and Node.js",
        "Collaborated on scalable application structure and clean coding practices",
        "Worked on AI-powered OpsMind RAG system concepts and API workflows",
      ],

      skills: [
        {
          name: "React.js",
          icon: <FaReact />,
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
        },
        {
          name: "Express.js",
          icon: <SiExpress />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
        },
      ],

      performance: "Certified MERN Stack Developer Intern",

      certificate: {
        label: "View Internship Certificate",
        link: skyrouteCertificate,
      },
    },

    {
      role: "Network Technician Apprentice",
      company: "Bharat Sanchar Nigam Limited (BSNL), Bhopal",
      duration: "Jan 2022 – Jan 2023 · Apprenticeship (Govt. of India)",
      icon: <FaNetworkWired />,

      description:
        "Completed a one-year National Apprenticeship Training Scheme (NATS) program under the Ministry of Education, Government of India, gaining hands-on experience in telecommunication systems and network infrastructure within a large-scale public-sector organization.",

      responsibilities: [
        "Configured, monitored, and maintained routers, switches, and networking equipment",
        "Assisted senior engineers in troubleshooting network and connectivity issues",
        "Supported installation, testing, and monitoring of telecom systems",
        "Maintained technical documentation, workflow records, and operational reports",
        "Demonstrated strong communication, analytical, and technical skills as per formal skill assessment",
      ],

      performance:
        "Performance Rating: Good (as per official skill assessment)",

      certificate: {
        label: "View Experience Certificate",
        link: experienceCertificate,
      },
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#020617] text-white py-24 px-5 sm:px-8 lg:px-16"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* SECTION TITLE */}
        <div className="mb-16 text-center lg:text-left">
          <p className="text-cyan-400 text-sm tracking-[0.3em] uppercase mb-4">
            Career Journey
          </p>

          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                p-6 sm:p-8 lg:p-10
                hover:-translate-y-1
                transition-all duration-500
              "
            >
              {/* CARD GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 opacity-0 hover:opacity-100 transition duration-500" />

              {/* TOP */}
              <div className="relative flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* LEFT */}
                <div className="flex gap-5">
                  {/* ICON */}
                  <div
                    className="
                      min-w-[60px] h-[60px]
                      rounded-2xl
                      flex items-center justify-center
                      bg-gradient-to-br from-cyan-500 to-violet-600
                      text-2xl
                      shadow-[0_0_30px_rgba(59,130,246,0.35)]
                    "
                  >
                    {exp.icon}
                  </div>

                  {/* CONTENT */}
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {exp.role}
                    </h3>

                    <p className="mt-1 text-cyan-400 font-semibold">
                      {exp.company}
                    </p>

                    <p className="mt-2 text-sm text-white/50">
                      {exp.duration}
                    </p>
                  </div>
                </div>

                {/* CERTIFICATE BUTTON */}
                {exp.certificate && (
                  <a
                    href={exp.certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group inline-flex items-center justify-center gap-2
                      px-5 py-3 rounded-xl
                      bg-white/5
                      border border-white/10
                      backdrop-blur-xl
                      text-sm font-semibold text-white/80
                      hover:text-white
                      hover:border-cyan-400/30
                      hover:bg-white/10
                      transition-all duration-300
                    "
                  >
                    <FaCertificate className="text-cyan-400" />

                    {exp.certificate.label}
                  </a>
                )}
              </div>

              {/* DESCRIPTION */}
              <p className="relative mt-8 text-white/70 leading-relaxed text-sm sm:text-base">
                {exp.description}
              </p>

              {/* RESPONSIBILITIES */}
              <div className="relative mt-8">
                <h4 className="text-white font-semibold mb-4">
                  Key Responsibilities
                </h4>

                <div className="grid sm:grid-cols-2 gap-3">
                  {exp.responsibilities.map((item, i) => (
                    <div
                      key={i}
                      className="
                        flex items-start gap-3
                        rounded-xl
                        border border-white/10
                        bg-white/5
                        px-4 py-3
                      "
                    >
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2" />

                      <p className="text-sm text-white/70 leading-relaxed">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* SKILLS */}
              {exp.skills && (
                <div className="relative mt-8">
                  <h4 className="text-white font-semibold mb-4">
                    Technologies & Skills
                  </h4>

                  <div className="flex flex-wrap gap-3">
                    {exp.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="
                          flex items-center gap-2
                          px-4 py-2 rounded-full
                          border border-white/10
                          bg-white/5
                          backdrop-blur-xl
                          text-sm text-white/80
                          hover:border-cyan-400/30
                          hover:bg-white/10
                          transition-all duration-300
                        "
                      >
                        <span className="text-cyan-400 text-lg">
                          {skill.icon}
                        </span>

                        {skill.name}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* PERFORMANCE */}
              <div
                className="
                  relative mt-8
                  inline-flex items-center gap-2
                  px-4 py-2 rounded-full
                  bg-cyan-500/10
                  border border-cyan-400/20
                  text-cyan-300 text-sm font-medium
                "
              >
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                {exp.performance}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}