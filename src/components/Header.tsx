import { Link } from '@tanstack/react-router'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="flex items-center justify-between px-6 lg:px-8 h-16 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            MedLicense SMS
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link
            to="/login"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-lg hover:shadow-lg transition-all"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}
