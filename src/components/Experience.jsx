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
    className="bg-[#0F1117] py-10"
  >
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* HEADER */}
      <div className="mb-20">
        <p className="text-sm uppercase tracking-[0.25em] text-[#A1A1AA] mb-4">
          Career Journey
        </p>

        <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] leading-tight">
          Professional
          <br />
          Experience
        </h2>

        <p className="mt-6 text-lg text-[#A1A1AA] max-w-3xl leading-relaxed">
          Professional experience across full-stack development,
          enterprise software engineering, networking infrastructure,
          and production-focused technology environments.
        </p>
      </div>

      {/* EXPERIENCE LIST */}
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="
              bg-[#161A22]
              border border-[#272B35]
              rounded-3xl
              p-8 lg:p-10
              transition-all duration-300
              hover:border-[#343B49]
            "
          >
            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
              <div className="flex gap-5">
                <div
                  className="
                    w-14 h-14
                    rounded-2xl
                    bg-[#222734]
                    border border-[#2B3140]
                    flex items-center justify-center
                    text-[#F8FAFC]
                    text-xl
                    shrink-0
                  "
                >
                  {exp.icon}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC]">
                    {exp.role}
                  </h3>

                  <p className="mt-1 text-[#D4D4D8] font-medium">
                    {exp.company}
                  </p>

                  <p className="mt-2 text-sm text-[#A1A1AA]">
                    {exp.duration}
                  </p>
                </div>
              </div>

              {exp.certificate && (
                <a
                  href={exp.certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-5 py-3
                    rounded-xl
                    bg-[#222734]
                    border border-[#2B3140]
                    text-[#F8FAFC]
                    text-sm font-semibold
                    hover:border-[#434C5E]
                    transition
                  "
                >
                  <FaCertificate />

                  {exp.certificate.label}
                </a>
              )}
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#A1A1AA] leading-relaxed mb-8">
              {exp.description}
            </p>

            {/* RESPONSIBILITIES */}
            <div className="mb-8">
              <h4 className="text-[#F8FAFC] font-semibold mb-5">
                Key Responsibilities
              </h4>

              <div className="grid md:grid-cols-2 gap-4">
                {exp.responsibilities.map((item, i) => (
                  <div
                    key={i}
                    className="
                      flex items-start gap-3
                      p-4
                      rounded-2xl
                      bg-[#222734]
                      border border-[#2B3140]
                    "
                  >
                    <span className="w-2 h-2 rounded-full bg-[#F8FAFC] mt-2 shrink-0" />

                    <p className="text-sm text-[#D4D4D8] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* SKILLS */}
            {exp.skills && (
              <div className="mb-8">
                <h4 className="text-[#F8FAFC] font-semibold mb-5">
                  Technologies & Skills
                </h4>

                <div className="flex flex-wrap gap-3">
                  {exp.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="
                        flex items-center gap-2
                        px-4 py-2
                        rounded-xl
                        bg-[#222734]
                        border border-[#2B3140]
                        text-[#E5E7EB]
                        text-sm
                      "
                    >
                      <span className="text-base">
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
                inline-flex items-center gap-3
                px-4 py-3
                rounded-xl
                bg-[#222734]
                border border-[#2B3140]
                text-[#F8FAFC]
                text-sm font-medium
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#F8FAFC]" />

              {exp.performance}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
}