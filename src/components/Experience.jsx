import { FaNetworkWired, FaCertificate, FaReact } from "react-icons/fa";

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
      company: "Zaalima Development Pvt. Ltd.",
      duration: "Mar 2026 – Present",
      icon: <FaReact />,

      description:
        "Worked as a MERN Stack Developer Intern on production-oriented web applications, enterprise platforms, authentication systems, AI-powered solutions, and scalable backend services. Contributed across the full development lifecycle including frontend engineering, API development, database design, application architecture, deployment workflows, and feature implementation.",

      responsibilities: [
        "Developed full-stack MERN applications using React.js, Node.js, Express.js, and MongoDB",
        "Built responsive user interfaces with reusable component architecture and Tailwind CSS",
        "Designed and integrated RESTful APIs, authentication systems, and protected routes",
        "Implemented JWT-based authentication, authorization, and role-based access control workflows",
        "Worked on database schema design, CRUD operations, validation, and backend business logic",
        "Integrated third-party APIs and AI-powered functionalities into enterprise applications",
        "Collaborated on scalable application architecture, code optimization, and production-ready development practices",
        "Participated in debugging, testing, feature enhancements, and deployment workflows",
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

      performance:
        "Top Performer • Delivered Enterprise MERN & AI-Powered Applications",
    },
    {
      role: "MERN Stack Developer Intern",
      company: "SkyRoute Solution",
      duration: "Jul 2025 – Nov 2025",
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
      className="py-16 md:py-24 bg-[#070d1a] relative overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="
      absolute inset-0 opacity-[0.03]
      bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      bg-[size:40px_40px]
    "
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="mb-14 md:mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#fca311]/80 mb-4">
            Career Journey
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none">
            Professional
            <br />
            Experience
          </h2>

          <p className="mt-6 md:mt-8 max-w-3xl text-base md:text-lg text-[#cfd6e6]/75 leading-relaxed">
            Professional experience across full-stack development, enterprise
            software engineering, networking infrastructure, and
            production-focused technology environments.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-10 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-20">
                {/* Timeline Dot - Hidden On Mobile */}
                <div
                  className="
      hidden md:flex
      absolute left-0 top-2
      w-12 h-12
      rounded-2xl
      bg-[#fca311]
      items-center justify-center
      text-black
      text-lg
      font-bold
      shadow-[0_0_25px_rgba(252,163,17,0.35)]
    "
                >
                  {exp.icon}
                </div>

                {/* Content */}
                <div
                  className="
                bg-[#0b1220]
                border border-white/10
                rounded-2xl md:rounded-3xl
                p-5 sm:p-6 md:p-8
                hover:border-[#fca311]/30
                hover:shadow-[0_0_30px_rgba(252,163,17,0.08)]
                transition-all duration-300
              "
                >
                  {/* TOP */}
                  <div className="flex flex-col lg:flex-row lg:justify-between gap-4 md:gap-6 mb-6">
                    <div>
                      <span
                        className="
                      inline-flex
                      px-3 py-1
                      rounded-full
                      bg-[#fca311]/10
                      border border-[#fca311]/20
                      text-[#fca311]
                      text-[10px] sm:text-xs
                      uppercase
                      tracking-[0.15em]
                      font-semibold
                      mb-4
                    "
                      >
                        {exp.duration}
                      </span>

                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>

                      <p className="text-[#cfd6e6] mt-2 text-sm md:text-base">
                        {exp.company}
                      </p>
                    </div>

                    {exp.certificate && (
                      <a
                        href={exp.certificate.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                      w-full sm:w-auto
                      justify-center
                      h-fit
                      inline-flex items-center gap-2
                      px-4 py-3
                      rounded-xl
                      bg-[#070d1a]
                      border border-white/10
                      text-white
                      text-sm
                      font-semibold
                      hover:border-[#fca311]/40
                      hover:text-[#fca311]
                      transition
                    "
                      >
                        <FaCertificate />
                        {exp.certificate.label}
                      </a>
                    )}
                  </div>

                  <p className="text-[#cfd6e6]/75 leading-relaxed mb-8 text-sm md:text-base">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-8">
                    {exp.responsibilities.map((item, i) => (
                      <div
                        key={i}
                        className="
                      flex items-start gap-3
                      p-3 md:p-4
                      rounded-2xl
                      bg-[#070d1a]
                      border border-white/10
                    "
                      >
                        <span className="w-2 h-2 rounded-full bg-[#fca311] mt-2 shrink-0" />

                        <p className="text-sm text-[#cfd6e6]/85">{item}</p>
                      </div>
                    ))}
                  </div>

                  {exp.skills && (
                    <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
                      {exp.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="
                        flex items-center gap-2
                        px-3 sm:px-4 py-2
                        rounded-xl
                        bg-[#070d1a]
                        border border-white/10
                        text-[#fca311]
                        text-sm
                        font-medium
                      "
                        >
                          {skill.icon}
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  )}

                  <div
                    className="
                  flex items-start gap-3
                  w-full sm:w-fit
                  px-4 py-3
                  rounded-xl
                  bg-[#fca311]/10
                  border border-[#fca311]/20
                  text-[#fca311]
                  text-sm
                  font-semibold
                "
                  >
                    <div className="w-2 h-2 rounded-full bg-[#fca311] mt-1 shrink-0" />
                    <span>{exp.performance}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Your existing stats cards */}
        </div>
      </div>
    </section>
  );
}
