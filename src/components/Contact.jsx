"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Let's Connect</h2>
        <p className="text-center text-foreground/70 mb-12 text-lg">
          I'm always interested in hearing about new projects and opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-accent mb-3">Email</h3>
              <a href="mailto:jaid@example.com" className="text-foreground hover:text-primary transition-colors">
                jaid@example.com
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-accent mb-3">Social Links</h3>
              <div className="space-y-2 text-foreground/70">
                <a href="https://github.com" className="block hover:text-primary transition-colors">
                  GitHub
                </a>
                <a href="https://linkedin.com" className="block hover:text-primary transition-colors">
                  LinkedIn
                </a>
                <a href="https://twitter.com" className="block hover:text-primary transition-colors">
                  Twitter/X
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-muted/50 border border-border focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-200 hover:shadow-lg"
            >
              {submitted ? "✓ Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
