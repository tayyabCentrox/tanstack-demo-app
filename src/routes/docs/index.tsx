import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";

export const Route = createFileRoute("/docs/")({
  component: DocsPage,
});

const docsSections = [
  {
    title: "Getting Started",
    items: [
      { id: "introduction", title: "Introduction", description: "Overview of MedLicense SMS platform" },
      { id: "quick-start", title: "Quick Start Guide", description: "Get up and running in 5 minutes" },
      { id: "authentication", title: "Authentication", description: "API keys and security setup" },
    ],
  },
  {
    title: "Core Features",
    items: [
      { id: "sending-sms", title: "Sending SMS", description: "Send single and bulk messages" },
      { id: "license-verification", title: "License Verification", description: "Verify medical licenses automatically" },
      { id: "templates", title: "Message Templates", description: "Create reusable templates" },
      { id: "scheduling", title: "Scheduled Messages", description: "Schedule campaigns in advance" },
    ],
  },
  {
    title: "API Reference",
    items: [
      { id: "api-overview", title: "API Overview", description: "Base URLs, versioning, and format" },
      { id: "endpoints", title: "Endpoints", description: "Complete API endpoint reference" },
      { id: "webhooks", title: "Webhooks", description: "Configure real-time notifications" },
      { id: "errors", title: "Error Handling", description: "Error codes and troubleshooting" },
    ],
  },
  {
    title: "Integrations",
    items: [
      { id: "crm-integration", title: "CRM Integration", description: "Connect with popular CRM systems" },
      { id: "ehr-integration", title: "EHR Integration", description: "Electronic Health Record integrations" },
      { id: "webhooks-guide", title: "Webhook Setup Guide", description: "Implement webhook handlers" },
    ],
  },
  {
    title: "Best Practices",
    items: [
      { id: "hipaa-compliance", title: "HIPAA Compliance", description: "Maintain healthcare privacy standards" },
      { id: "deliverability", title: "Message Deliverability", description: "Optimize delivery rates" },
      { id: "security", title: "Security Guidelines", description: "Keep your account secure" },
    ],
  },
];

function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Documentation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Complete guide to integrating and using MedLicense SMS platform
          </p>
        </div>

        {/* Search Box */}
        <div className="mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search documentation..."
              className="w-full px-4 py-3 pl-12 bg-card border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <nav className="sticky top-8 space-y-8">
              {docsSections.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.items.map((item) => (
                      <li key={item.id}>
                        <Link
                          to={`/docs/${item.id}`}
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
                        >
                          {item.title}
                          <ChevronRight className="w-3 h-3" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            {/* Quick Start Card */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Start</h2>
              <p className="text-muted-foreground mb-6">
                Get started with MedLicense SMS in just a few simple steps.
              </p>

              <div className="space-y-6">
                <Step number={1} title="Create an account">
                  Sign up for a free account at <Link to="/signup" className="text-primary hover:underline">medlicense-sms.com/signup</Link>
                </Step>
                <Step number={2} title="Get your API key">
                  Navigate to Settings → API Keys and generate your secret API key
                </Step>
                <Step number={3} title="Send your first SMS">
                  Use our API or dashboard to send your first license renewal notification
                </Step>
              </div>

              <div className="mt-8 flex gap-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground font-semibold rounded-lg border border-border hover:bg-secondary transition-colors"
                >
                  View Pricing
                </Link>
              </div>
            </div>

            {/* API Example */}
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">API Example</h2>
              <p className="text-muted-foreground mb-6">
                Send an SMS notification with a simple API call:
              </p>

              <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-slate-300">
                  <code>{`curl -X POST https://api.medlicense-sms.com/v1/sms \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+1234567890",
    "message": "Your medical license expires in 30 days. Renew now to avoid interruptions.",
    "licenseId": "MD-12345"
  }'`}</code>
                </pre>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <FeatureHighlight
                title="HIPAA Compliant"
                description="All data is encrypted in transit and at rest. We maintain full HIPAA compliance for healthcare data."
              />
              <FeatureHighlight
                title="99.9% Uptime"
                description="Our platform is built for reliability with redundant infrastructure across multiple regions."
              />
              <FeatureHighlight
                title="Real-time Analytics"
                description="Monitor delivery rates, open rates, and engagement through our comprehensive dashboard."
              />
              <FeatureHighlight
                title="24/7 Support"
                description="Our dedicated support team is available around the clock to help you succeed."
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center bg-primary text-primary-foreground font-semibold rounded-full">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

function FeatureHighlight({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-card border border-border rounded-xl p-6">
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
