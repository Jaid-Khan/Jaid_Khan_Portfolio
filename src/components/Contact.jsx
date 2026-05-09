import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#020617] overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-fuchsia-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4">
            Get In Touch
          </p>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            Let’s Build
            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Something Great
            </span>
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-white/65 text-base sm:text-lg leading-relaxed">
            Open to frontend, MERN stack, AI, and full-stack development
            opportunities. Let’s connect and create impactful digital
            experiences.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* CONTACT CARD */}
            <div
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                shadow-[0_20px_60px_rgba(0,0,0,0.4)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10 pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 text-cyan-300 text-sm font-medium mb-8">
                  Available For Opportunities
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-lg shadow-lg">
                      <FaEnvelope />
                    </div>

                    <div>
                      <p className="text-white/50 text-sm mb-1">Email</p>

                      <a
                        href="mailto:jaidkhan04072001@gmail.com"
                        className="text-white hover:text-cyan-400 transition"
                      >
                        jaidkhan04072001@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-600 flex items-center justify-center text-white text-lg shadow-lg">
                      <FaPhoneAlt />
                    </div>

                    <div>
                      <p className="text-white/50 text-sm mb-1">Phone</p>

                      <a
                        href="tel:+918871104006"
                        className="text-white hover:text-violet-400 transition"
                      >
                        +91 8871104006
                      </a>
                    </div>
                  </div>
                </div>

                {/* SOCIAL LINKS */}
                <div className="mt-10">
                  <p className="text-white/50 text-sm mb-4">
                    Connect With Me
                  </p>

                  <div className="flex gap-4">
                    {[
                      {
                        icon: <FaGithub />,
                        link: "https://github.com/Jaid-Khan",
                      },
                      {
                        icon: <FaLinkedin />,
                        link: "https://www.linkedin.com/in/jaid-khan/",
                      },
                      {
                        icon: <FaEnvelope />,
                        link: "mailto:jaidkhan04072001@gmail.com",
                      },
                    ].map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          group
                          w-14 h-14 rounded-2xl
                          border border-white/10
                          bg-white/5
                          backdrop-blur-xl
                          flex items-center justify-center
                          text-xl text-white/70
                          hover:text-white
                          hover:border-cyan-400/30
                          hover:-translate-y-1
                          transition-all duration-300
                        "
                      >
                        <span className="group-hover:scale-110 transition">
                          {item.icon}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* MINI CTA */}
            <div
              className="
                relative overflow-hidden
                rounded-[2rem]
                border border-white/10
                bg-gradient-to-r from-cyan-500/10 to-violet-500/10
                backdrop-blur-2xl
                p-7
              "
            >
              <div className="relative z-10">
                <p className="text-cyan-300 text-sm font-medium mb-2">
                  MERN • React • AI Systems
                </p>

                <h3 className="text-2xl font-bold text-white leading-snug">
                  Clean UI.
                  <br />
                  Scalable Systems.
                </h3>
              </div>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              relative overflow-hidden
              rounded-[2rem]
              border border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8 sm:p-10
              shadow-[0_20px_60px_rgba(0,0,0,0.4)]
            "
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

            <div className="relative z-10">
              <div className="mb-8">
                <p className="text-violet-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                  Send Message
                </p>

                <h3 className="text-3xl font-black text-white">
                  Start A Conversation
                </h3>
              </div>

              <div className="space-y-5">
                {/* NAME */}
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-5 py-4 rounded-2xl
                      bg-black/30
                      border border-white/10
                      text-white
                      placeholder:text-white/35
                      focus:outline-none
                      focus:border-cyan-400/40
                      focus:bg-black/40
                      transition-all duration-300
                    "
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-5 py-4 rounded-2xl
                      bg-black/30
                      border border-white/10
                      text-white
                      placeholder:text-white/35
                      focus:outline-none
                      focus:border-violet-400/40
                      focus:bg-black/40
                      transition-all duration-300
                    "
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm text-white/60 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="
                      w-full px-5 py-4 rounded-2xl resize-none
                      bg-black/30
                      border border-white/10
                      text-white
                      placeholder:text-white/35
                      focus:outline-none
                      focus:border-cyan-400/40
                      focus:bg-black/40
                      transition-all duration-300
                    "
                  />
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="
                    group relative overflow-hidden
                    w-full py-4 rounded-2xl
                    font-semibold text-white
                    bg-gradient-to-r from-cyan-500 to-violet-600
                    hover:scale-[1.02]
                    transition-all duration-300
                    shadow-[0_0_40px_rgba(59,130,246,0.35)]
                  "
                >
                  <span className="relative z-10">
                    {submitted ? "✓ Message Sent!" : "Send Message"}
                  </span>

                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 bg-white/10 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}