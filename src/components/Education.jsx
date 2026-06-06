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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* HEADER */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.25em] text-[#fca311]/80 mb-4">
            Education
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white leading-none">
            Academic
            <br />
            Journey
          </h2>

          <p className="mt-8 max-w-3xl text-lg text-[#cfd6e6]/75 leading-relaxed">
            The academic foundation that shaped my transition from Electronics &
            Telecommunications to Software Engineering, Full-Stack Development,
            and AI-powered applications.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">
          <div className="hidden md:block absolute left-10 top-0 bottom-0 w-px bg-white/10" />

          <div className="space-y-8 md:space-y-16">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row gap-4 md:gap-8"
              >
                {/* TIMELINE DOT */}
                <div className="relative z-10 flex items-start justify-center md:justify-start">
                  <div
                    className="
      w-14 h-14 md:w-20 md:h-20
      rounded-2xl md:rounded-3xl
      bg-[#070d1a]
      border border-[#fca311]/30
      flex items-center justify-center
      shadow-[0_0_25px_rgba(252,163,17,0.15)]
    "
                  >
                    <img
                      src={item.icon}
                      alt={item.degree}
                      className="w-7 h-7 md:w-10 md:h-10 object-contain"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div
                  className="
                    flex-1
                    border border-white/10
                    rounded-3xl
                    p-5 sm:p-6 md:p-8
                    bg-black/10
                    hover:border-[#fca311]/30
                    hover:shadow-[0_0_25px_rgba(252,163,17,0.08)]
                    transition-all duration-300
                  "
                >
                  <div className="flex flex-wrap gap-3 mb-5">
                    <span
                      className="
                        px-4 py-2
                        rounded-xl
                        bg-[#fca311]/10
                        border border-[#fca311]/20
                        text-[#fca311]
                        text-sm
                        font-medium
                      "
                    >
                      {item.duration}
                    </span>

                    <span
                      className="
                        px-4 py-2
                        rounded-xl
                        bg-black/20
                        border border-white/10
                        text-white
                        text-sm
                        font-semibold
                      "
                    >
                      {item.score}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-3 text-[#cfd6e6]/80 text-sm md:text-lg">
                    {item.institute}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-6 md:mt-8">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="
                          px-3 md:px-4 py-2
                          rounded-xl
                          bg-black/20
                          border border-white/10
                          text-[#cfd6e6]
                          text-sm
                          hover:border-[#fca311]/30
                          hover:text-white
                          transition
                        "
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div className="mt-20 grid sm:grid-cols-3 gap-6">
          <div
            className="
              border border-white/10
              rounded-3xl
              p-6
              hover:border-[#fca311]/30
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-sm mb-2">
              Highest Qualification
            </p>

            <h3 className="text-2xl font-bold text-[#fca311]">B.Tech CSE</h3>
          </div>

          <div
            className="
              border border-white/10
              rounded-3xl
              p-6
              hover:border-[#fca311]/30
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-sm mb-2">University</p>

            <h3 className="text-2xl font-bold text-[#fca311]">RGPV Bhopal</h3>
          </div>

          <div
            className="
              border border-white/10
              rounded-3xl
              p-6
              hover:border-[#fca311]/30
              transition
            "
          >
            <p className="text-[#cfd6e6]/60 text-sm mb-2">Academic Focus</p>

            <h3 className="text-2xl font-bold text-[#fca311]">
              Software Engineering
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
