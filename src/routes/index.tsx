import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Lock, FileCheck, Activity, Users, Shield } from "lucide-react";

export const Route = createFileRoute("/")({ component: LandingPage });

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen grid lg:grid-cols-2 gap-12 items-center px-6 py-24 lg:px-8 overflow-hidden bg-gradient-to-b from-slate-50 to-background">
        {/* Background gradient effect */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/5 w-[80%] h-[150%] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-2xl relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
            Trusted by 100+ Medical Boards
          </div>

          {/* Title */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6">
            Streamline Doctor License{" "}
            <span className="gradient-text">SMS Notifications</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mb-8">
            Automate license renewals, verification alerts, and compliance updates
            with our secure SMS platform built for medical licensing boards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 mb-16">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Get Started Free
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-foreground font-medium rounded-lg border border-border hover:bg-slate-50 transition-colors"
            >
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="text-3xl font-bold text-foreground">50K+</div>
              <div className="text-sm text-muted-foreground mt-1">SMS Sent Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Delivery Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-foreground">&lt;2min</div>
              <div className="text-sm text-muted-foreground mt-1">Avg. Delivery</div>
            </div>
          </div>
        </div>

        {/* Hero Visual - Floating Cards */}
        <div className="relative h-[500px] hidden lg:block">
          <div className="absolute top-[20%] right-[10%] flex items-center gap-4 p-5 bg-white rounded-2xl shadow-xl border border-slate-100 animate-float">
            <div className="w-10 h-10 flex items-center justify-center bg-emerald-100 text-emerald-600 rounded-xl">
              ✓
            </div>
            <div>
              <div className="font-semibold text-sm">License Renewed</div>
              <div className="text-xs text-muted-foreground">Just now</div>
            </div>
          </div>

          <div className="absolute top-[45%] left-[5%] flex items-center gap-4 p-5 bg-white rounded-2xl shadow-xl border border-slate-100 animate-float" style={{ animationDelay: "1s" }}>
            <div className="w-10 h-10 flex items-center justify-center bg-sky-100 text-sky-600 rounded-xl">
              📧
            </div>
            <div>
              <div className="font-semibold text-sm">SMS Sent</div>
              <div className="text-xs text-muted-foreground">Dr. Johnson</div>
            </div>
          </div>

          <div className="absolute bottom-[15%] right-[25%] flex items-center gap-4 p-5 bg-white rounded-2xl shadow-xl border border-slate-100 animate-float" style={{ animationDelay: "2s" }}>
            <div className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-600 rounded-xl">
              ⚡
            </div>
            <div>
              <div className="font-semibold text-sm">Verification Complete</div>
              <div className="text-xs text-muted-foreground">247 physicians</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
              Everything you need to manage{" "}
              <span className="gradient-text">medical licensing communications</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Purpose-built for medical boards, hospitals, and healthcare systems
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              icon={<Phone className="w-6 h-6" />}
              title="Automated Reminders"
              description="Schedule automated SMS reminders for license renewals, CME credits, and compliance deadlines."
            />
            <FeatureCard
              icon={<Lock className="w-6 h-6" />}
              title="HIPAA Compliant"
              description="End-to-end encryption and full HIPAA compliance to protect sensitive patient and physician data."
            />
            <FeatureCard
              icon={<FileCheck className="w-6 h-6" />}
              title="License Verification"
              description="Instant SMS verification for medical licenses. Real-time status updates for employers and hospitals."
            />
            <FeatureCard
              icon={<Activity className="w-6 h-6" />}
              title="Real-time Analytics"
              description="Track delivery rates, open rates, and engagement with comprehensive analytics dashboard."
            />
            <FeatureCard
              icon={<Users className="w-6 h-6" />}
              title="Bulk Messaging"
              description="Send targeted messages to specific physician groups by specialty, location, or license status."
            />
            <FeatureCard
              icon={<Shield className="w-6 h-6" />}
              title="Audit Trails"
              description="Complete logging of all communications with timestamp tracking for compliance and reporting."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to modernize your licensing communications?
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Join medical boards across the country who trust our platform for secure, reliable SMS notifications.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-purple-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Start Free Trial
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white/20 hover:bg-white/10 transition-colors"
            >
              Contact Sales
            </Link>
          </div>
          <p className="text-sm text-slate-400">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            {/* Brand */}
            <div className="max-w-xs">
              <div className="text-xl font-bold text-foreground mb-2">MedLicense SMS</div>
              <p className="text-sm text-muted-foreground">Secure SMS solutions for medical licensing</p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-12">
              <FooterColumn
                title="Product"
                links={["Features", "Pricing", "Integrations", "API"]}
              />
              <FooterColumn
                title="Resources"
                links={["Documentation", "Blog", "Support", "Status"]}
              />
              <FooterColumn
                title="Company"
                links={["About", "Careers", "Privacy", "Terms"]}
              />
            </div>
          </div>

          {/* Bottom */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 MedLicense SMS. All rights reserved.
            </p>
            <div className="flex gap-4">
              <SocialLink
                href="#"
                label="Twitter"
                icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg>}
              />
              <SocialLink
                href="#"
                label="GitHub"
                icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>}
              />
              <SocialLink
                href="#"
                label="LinkedIn"
                icon={<svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>}
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-card rounded-2xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-primary/15 to-purple-600/15 text-primary rounded-xl mb-5">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

// Footer Column Component
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: string[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-foreground mb-4">{title}</h4>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="block text-sm text-muted-foreground hover:text-primary transition-colors mb-3"
        >
          {link}
        </a>
      ))}
    </div>
  );
}

// Social Link Component
function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex items-center justify-center w-9 h-9 rounded-lg text-muted-foreground hover:bg-slate-100 hover:text-primary transition-colors"
    >
      {icon}
    </a>
  );
}
