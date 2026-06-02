import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaLock,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiAxios,
  SiExpress,
  SiPostman,
  SiNetlify,
  SiCanva,
  SiMongodb,
  SiMongoose,
  SiJsonwebtokens,
  SiRender,
  SiVercel,
  SiReactrouter,
} from "react-icons/si";

import { CgWebsite } from "react-icons/cg";
import { BiSolidComponent } from "react-icons/bi";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Responsive Design", icon: <CgWebsite /> },
        { name: "Component Architecture", icon: <BiSolidComponent /> },
        { name: "React Hooks", icon: <FaReact /> },
        { name: "Context API", icon: <FaReact /> },
        { name: "React Router", icon: <SiReactrouter /> },
        { name: "Axios", icon: <SiAxios /> },
        { name: "REST APIs", icon: <TbApi /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "Authentication", icon: <FaLock /> },
        { name: "JWT Auth", icon: <SiJsonwebtokens /> },
        { name: "Middleware", icon: <SiExpress /> },
        { name: "MVC Architecture", icon: <FaServer /> },
        { name: "Error Handling", icon: <FaServer /> },
        { name: "Async/Await", icon: <FaJs /> },
        { name: "Protected Routes", icon: <MdSecurity /> },
      ],
    },

    {
      title: "Database & MERN",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongoose /> },
        { name: "CRUD Operations", icon: <FaDatabase /> },
        { name: "Schema Design", icon: <FaDatabase /> },
        { name: "MERN Stack", icon: <FaReact /> },
        { name: "API Integration", icon: <TbApi /> },
        { name: "Project Architecture", icon: <FaServer /> },
        { name: "OpsMind AI", icon: <TbApi /> },
      ],
    },

    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Postman", icon: <SiPostman /> },
        { name: "VS Code", icon: <TbBrandVscode /> },
        { name: "Netlify", icon: <SiNetlify /> },
        { name: "Render", icon: <SiRender /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "Canva", icon: <SiCanva /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-10 bg-[#0F1117]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* HEADER */}
        <div className="mb-24">
          <p className="text-sm uppercase tracking-[0.25em] text-[#A1A1AA] mb-4">
            Capabilities
          </p>

          <h2 className="text-5xl md:text-7xl font-black text-[#F8FAFC] leading-none">
            Technologies
            <br />
            & Skills
          </h2>

          <p className="mt-8 max-w-3xl text-lg text-[#A1A1AA] leading-relaxed">
            Building scalable full-stack applications, backend systems,
            AI-powered products, and developer tooling with a focus on
            performance, maintainability, and production-ready architecture.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                bg-[#161A22]
                border border-[#272B35]
                rounded-3xl
                p-8
                hover:border-[#3A4150]
                transition-all duration-300
              "
            >
              {/* TOP */}
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-[#F8FAFC]">
                    {category.title}
                  </h3>
                </div>

              </div>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      flex items-center gap-2
                      px-4 py-2.5
                      rounded-xl
                      bg-[#222734]
                      border border-[#2B3140]
                      text-[#E5E7EB]
                      text-sm
                      hover:border-[#3F4759]
                      hover:bg-[#262D3C]
                      transition-all duration-300
                    "
                  >
                    <span className="text-base text-[#F8FAFC]">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* STATS */}
        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          <div className="bg-[#161A22] border border-[#272B35] rounded-3xl p-6">
            <p className="text-[#A1A1AA] text-sm mb-2">
              Primary Stack
            </p>

            <h3 className="text-2xl font-bold text-[#F8FAFC]">
              MERN
            </h3>
          </div>

          <div className="bg-[#161A22] border border-[#272B35] rounded-3xl p-6">
            <p className="text-[#A1A1AA] text-sm mb-2">
              Focus Area
            </p>

            <h3 className="text-2xl font-bold text-[#F8FAFC]">
              Backend + AI
            </h3>
          </div>

          <div className="bg-[#161A22] border border-[#272B35] rounded-3xl p-6">
            <p className="text-[#A1A1AA] text-sm mb-2">
              Experience
            </p>

            <h3 className="text-2xl font-bold text-[#F8FAFC]">
              1+ Years
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}