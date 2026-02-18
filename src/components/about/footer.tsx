export function Footer() {
  return (
    <footer id="contact" className="bg-secondary border-t border-border py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">P</span>
            </div>
            <span className="text-foreground font-display font-bold text-xl tracking-tight">
              Prodigy Wildfire Solutions
            </span>
          </div>
          <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
            Engineering the future of wildfire protection. Precision-built systems that safeguard lives, homes, businesses and communities.
          </p>
          <div className="flex gap-8 text-sm">
            <a href="#mission" className="text-muted-foreground hover:text-foreground transition-colors">
              Mission
            </a>
            <a href="#engineering" className="text-muted-foreground hover:text-foreground transition-colors">
              Engineering
            </a>
            <a href="#team" className="text-muted-foreground hover:text-foreground transition-colors">
              Team
            </a>
          </div>
          <div className="h-px w-full max-w-md bg-border" />
          <p className="text-xs text-muted-foreground">
            {"© 2026 Prodigy Wildfire Solutions Inc. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  )
}
