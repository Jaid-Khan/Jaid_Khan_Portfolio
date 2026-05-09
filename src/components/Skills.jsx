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
      className="relative overflow-hidden bg-[#020617] text-white py-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16">
        {/* SECTION TITLE */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            Expertise
          </p>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Skills &
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              {" "}
              Technologies
            </span>
          </h2>

          <p className="mt-6 text-white/60 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Crafting modern full-stack applications with scalable architecture,
            clean UI systems, and production-ready MERN solutions.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group relative
                rounded-3xl
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-6
                overflow-hidden
                hover:-translate-y-2
                transition-all duration-500
                shadow-[0_10px_40px_rgba(0,0,0,0.35)]
              "
            >
              {/* HOVER GLOW */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-violet-500/10" />
              </div>

              {/* TOP BORDER GLOW */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              {/* TITLE */}
              <h3 className="relative text-xl font-bold mb-6">
                {category.title}
              </h3>

              {/* SKILLS */}
              <div className="relative flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      group/skill
                      flex items-center gap-2
                      px-4 py-2
                      rounded-xl
                      border border-white/10
                      bg-[#0f172a]/70
                      backdrop-blur-xl
                      text-sm text-white/75
                      hover:text-white
                      hover:border-cyan-400/30
                      hover:bg-white/10
                      hover:scale-105
                      transition-all duration-300
                    "
                  >
                    <span className="text-base text-cyan-400 group-hover/skill:text-cyan-300 transition">
                      {skill.icon}
                    </span>

                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}