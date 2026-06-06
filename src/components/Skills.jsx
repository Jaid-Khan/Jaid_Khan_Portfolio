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
      title: "Database & AI Systems",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongoose /> },
        { name: "CRUD Operations", icon: <FaDatabase /> },
        { name: "Schema Design", icon: <FaDatabase /> },
        { name: "MERN Stack", icon: <FaReact /> },
        { name: "API Integration", icon: <TbApi /> },
        { name: "Project Architecture", icon: <FaServer /> },
        { name: "Vector Search", icon: <FaDatabase /> },
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

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="mb-20">
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#fca311]/80 mb-4">
            Core Technologies
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none">
            Engineering
            <br />
            Stack
          </h2>

          <p className="mt-8 max-w-3xl text-base sm:text-lg text-[#cfd6e6]/75 leading-relaxed">
            Technologies, frameworks, and tools used to build scalable web
            applications, backend systems, AI-powered products, and developer
            platforms.
          </p>
        </div>

        {/* SKILLS GRID */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                group
                bg-[#070d1a]
                border border-white/10
                rounded-3xl
                p-8
                hover:border-[#fca311]/30
                hover:shadow-[0_0_25px_rgba(252,163,17,0.08)]
                transition-all duration-300
              "
            >
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#fca311] transition">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      group/skill
                      flex items-center gap-2
                      px-4 py-2.5
                      rounded-xl
                      bg-black/20
                      border border-white/10
                      text-[#cfd6e6]
                      text-xs sm:text-sm
                      hover:border-[#fca311]/40
                      hover:bg-black/40
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    <span
                      className="
                        text-sm sm:text-base
                        text-[#fca311]
                        group-hover/skill:scale-110
                        transition
                      "
                    >
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
        {/* <div className="mt-12 grid sm:grid-cols-3 gap-6">
          <div
            className="
              bg-[#070d1a]
              border border-white/10
              rounded-3xl
              p-6
              hover:border-[#fca311]/30
              hover:shadow-[0_0_20px_rgba(252,163,17,0.08)]
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-xs sm:text-sm mb-2">
              Core Stack
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#fca311]">
              MERN
            </h3>
          </div>

          <div
            className="
              bg-[#070d1a]
              border border-white/10
              rounded-3xl
              p-6
              hover:border-[#fca311]/30
              hover:shadow-[0_0_20px_rgba(252,163,17,0.08)]
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-xs sm:text-sm mb-2">
              Specialization
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#fca311]">
              AI Systems
            </h3>
          </div>

          <div
            className="
              bg-[#070d1a]
              border border-white/10
              rounded-3xl
              p-6
              hover:border-[#fca311]/30
              hover:shadow-[0_0_20px_rgba(252,163,17,0.08)]
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-xs sm:text-sm mb-2">
              Experience
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#fca311]">
              1+ Years
            </h3>
          </div>
        </div> */}
      </div>
    </section>
  );
}