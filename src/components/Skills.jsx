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
  SiPostgresql,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
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
        { name: "JavaScript (ES6+)", icon: <FaJs /> },
        { name: "React.js", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Responsive Web Design", icon: <CgWebsite /> },
        { name: "Component Architecture", icon: <BiSolidComponent /> },
        { name: "React Hooks", icon: <FaReact /> },
        { name: "useState / useEffect / useRef", icon: <FaReact /> },
        { name: "Conditional Rendering", icon: <FaReact /> },
        { name: "Dynamic UI Rendering", icon: <FaReact /> },
        { name: "Form Handling", icon: <FaReact /> },
        { name: "Context API", icon: <FaReact /> },
        { name: "State Management", icon: <FaReact /> },
        { name: "React Router DOM", icon: <SiReactrouter /> },
        { name: "Protected Routes", icon: <MdSecurity /> },
        { name: "Axios API Integration", icon: <SiAxios /> },
        { name: "Fetch API", icon: <TbApi /> },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST APIs", icon: <TbApi /> },
        { name: "CRUD Operations", icon: <TbApi /> },
        { name: "Express Routing", icon: <SiExpress /> },
        { name: "Middleware", icon: <SiExpress /> },
        { name: "Custom Middleware", icon: <SiExpress /> },
        { name: "Authentication Systems", icon: <FaLock /> },
        { name: "JWT Authentication", icon: <SiJsonwebtokens /> },
        { name: "Cookie-Based Auth", icon: <MdSecurity /> },
        { name: "Session-Based Auth", icon: <MdSecurity /> },
        { name: "bcrypt Password Hashing", icon: <FaLock /> },
        { name: "Protected Backend Routes", icon: <MdSecurity /> },
        { name: "CORS", icon: <FaServer /> },
        { name: "MVC Architecture", icon: <FaServer /> },
        { name: "File Uploads (Multer)", icon: <SiExpress /> },
        { name: "Client-Server Architecture", icon: <FaServer /> },
        { name: "Error Handling", icon: <FaServer /> },
        { name: "Async/Await", icon: <FaJs /> },
      ],
    },

    {
      title: "Database & Full Stack",
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongoose /> },
        { name: "MongoDB CRUD", icon: <FaDatabase /> },
        { name: "Schema Design", icon: <FaDatabase /> },
        { name: "Database Queries", icon: <FaDatabase /> },
        { name: "API Integration", icon: <TbApi /> },
        { name: "React + Express Integration", icon: <FaServer /> },
        { name: "Full Stack Authentication Flow", icon: <MdSecurity /> },
        { name: "Project Architecture", icon: <FaServer /> },
        { name: "MERN Stack Development", icon: <FaReact /> },
        { name: "OpsMind AI RAG System", icon: <TbApi /> },
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
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-yellow-400/10 blur-3xl rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-orange-500/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="
                relative p-8 rounded-2xl
                bg-white/5 backdrop-blur-xl
                border border-white/10
                shadow-[0_20px_40px_rgba(0,0,0,0.4)]
                hover:-translate-y-2 hover:shadow-yellow-400/20
                transition-all duration-300
              "
            >
              {/* Card Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-yellow-400/10 to-orange-500/10 opacity-0 hover:opacity-100 transition pointer-events-none" />

              <h3 className="text-xl font-bold mb-6 text-white relative">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3 relative">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="
                      flex items-center gap-2 px-4 py-2 rounded-full
                      text-sm font-medium
                      bg-white/10 backdrop-blur
                      border border-white/20
                      text-yellow-400
                      shadow-md
                      hover:bg-gradient-to-r hover:from-yellow-400 hover:to-orange-500
                      hover:text-black hover:scale-105
                      transition-all duration-300
                    "
                  >
                    <span className="text-lg">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}