import btechIcon from "../assets/graduated.png";
import diplomaIcon from "../assets/diploma.png";

export default function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
      duration: "Aug 2021 – Jun 2024",
      score: "CGPA: 7.61",
      icon: btechIcon,

      highlights: [
        "Frontend & MERN Stack Development",
        "Data Structures & Programming",
        "Database Management Systems",
        "Software Engineering",
      ],
    },

    {
      degree: "Diploma in Electronics & Telecommunication Engineering",
      institute: "Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal",
      duration: "Aug 2018 – Jun 2021",
      score: "CGPA: 7.57",
      icon: diplomaIcon,

      highlights: [
        "Networking Fundamentals",
        "Telecommunication Systems",
        "Hardware & Circuit Concepts",
        "Technical Problem Solving",
      ],
    },
  ];

  return (
    <section
      id="education"
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
            Academic Journey
          </p>

          <h2 className="text-4xl sm:text-5xl font-black leading-tight">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
        </div>

        {/* EDUCATION CARDS */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
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

              <div className="relative flex flex-col lg:flex-row gap-8 lg:items-center">
                {/* ICON */}
                <div className="shrink-0 flex justify-center lg:justify-start">
                  <div
                    className="
                      w-24 h-24 sm:w-28 sm:h-28
                      rounded-3xl
                      flex items-center justify-center
                      bg-gradient-to-br from-cyan-500 to-violet-600
                      shadow-[0_0_40px_rgba(59,130,246,0.35)]
                      group-hover:scale-105
                      transition-all duration-300
                    "
                  >
                    <img
                      src={item.icon}
                      alt={item.degree}
                      className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-cyan-400 font-semibold text-base sm:text-lg">
                    {item.institute}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 mt-4 justify-center lg:justify-start">
                    <div
                      className="
                        inline-flex items-center justify-center
                        px-4 py-2 rounded-full
                        border border-white/10
                        bg-white/5
                        text-sm text-white/70
                      "
                    >
                      {item.duration}
                    </div>

                    <div
                      className="
                        inline-flex items-center justify-center
                        px-4 py-2 rounded-full
                        bg-cyan-500/10
                        border border-cyan-400/20
                        text-cyan-300 text-sm font-semibold
                      "
                    >
                      {item.score}
                    </div>
                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="
                          px-4 py-2 rounded-full
                          border border-white/10
                          bg-white/5
                          backdrop-blur-xl
                          text-sm text-white/75
                          hover:border-cyan-400/30
                          hover:bg-white/10
                          transition-all duration-300
                        "
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CORNER GLOW */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}