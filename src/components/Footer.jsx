export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-foreground/60 text-sm">© {currentYear} Jaid Khan. All rights reserved.</div>

          <div className="flex gap-6 text-foreground/60">
            <a href="https://github.com" className="hover:text-foreground transition-colors text-sm">
              GitHub
            </a>
            <a href="https://linkedin.com" className="hover:text-foreground transition-colors text-sm">
              LinkedIn
            </a>
            <a href="mailto:jaid@example.com" className="hover:text-foreground transition-colors text-sm">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
