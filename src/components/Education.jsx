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
            Education
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-[#F8FAFC] leading-tight">
            Academic
            <br />
            Foundation
          </h2>

          <p className="mt-6 text-lg text-[#A1A1AA] max-w-3xl leading-relaxed">
            My educational journey that shaped my technical foundations in
            software development, computer science, networking, and engineering
            principles.
          </p>
        </div>

        {/* EDUCATION LIST */}
        <div className="space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="
                relative
                rounded-3xl
                border border-[#272B35]
                bg-[#161A22]
                p-8
                hover:border-[#3A4050]
                transition-all duration-300
              "
            >

              <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
                {/* ICON */}
                <div className="shrink-0">
                  <div
                    className="
                      w-24 h-24
                      rounded-3xl
                      border border-[#2B3140]
                      bg-[#222734]
                      flex items-center justify-center
                    "
                  >
                    <img
                      src={item.icon}
                      alt={item.degree}
                      className="w-14 h-14 object-contain"
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#F8FAFC] leading-tight">
                    {item.degree}
                  </h3>

                  <p className="mt-3 text-[#E5E7EB] font-medium">
                    {item.institute}
                  </p>

                  {/* META */}
                  <div className="flex flex-wrap gap-3 mt-5">
                    <div
                      className="
                        px-4 py-2
                        rounded-lg
                        border border-[#2B3140]
                        bg-[#222734]
                        text-sm
                        text-[#A1A1AA]
                      "
                    >
                      {item.duration}
                    </div>

                    <div
                      className="
                        px-4 py-2
                        rounded-lg
                        bg-[#F8FAFC]
                        text-[#0F1117]
                        text-sm
                        font-semibold
                      "
                    >
                      {item.score}
                    </div>
                  </div>

                  {/* HIGHLIGHTS */}
                  <div className="flex flex-wrap gap-3 mt-6">
                    {item.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="
                          px-4 py-2
                          rounded-lg
                          bg-[#222734]
                          border border-[#2B3140]
                          text-sm
                          text-[#E5E7EB]
                        "
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FOOTER STATS */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-[#161A22] border border-[#272B35] rounded-2xl p-6">
            <p className="text-[#71717A] text-sm mb-2">
              Highest Qualification
            </p>

            <h3 className="text-xl font-bold text-[#F8FAFC]">
              B.Tech CSE
            </h3>
          </div>

          <div className="bg-[#161A22] border border-[#272B35] rounded-2xl p-6">
            <p className="text-[#71717A] text-sm mb-2">
              University
            </p>

            <h3 className="text-xl font-bold text-[#F8FAFC]">
              RGPV Bhopal
            </h3>
          </div>

          <div className="bg-[#161A22] border border-[#272B35] rounded-2xl p-6">
            <p className="text-[#71717A] text-sm mb-2">
              Academic Focus
            </p>

            <h3 className="text-xl font-bold text-[#F8FAFC]">
              CS + Engineering
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}