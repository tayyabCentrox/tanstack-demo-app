import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { BillingToggle } from "@/components/billing-toggle";
import { PricingCard } from "@/components/pricing-card";
import { FeatureCard } from "@/components/feature-card";
import { FAQCard } from "@/components/faq-card";

export const Route = createFileRoute("/pricing/")({
  component: PricingPage,
});

function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individual practitioners",
      monthlyPrice: 5,
      yearlyPrice: 50,
      features: [
        "Up to 500 SMS per month",
        "Basic license tracking",
        "Email support",
        "HIPAA compliant",
        "Standard delivery speed",
        "Basic analytics dashboard",
        "1 user account",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing medical practices",
      monthlyPrice: 5,
      yearlyPrice: 50,
      features: [
        "Up to 5000 SMS per month",
        "Advanced license management",
        "Priority email & chat support",
        "HIPAA compliant with enhanced security",
        "Fastest delivery speed",
        "Advanced analytics & reporting",
        "Up to 10 user accounts",
        "Custom templates",
        "API access",
        "Bulk messaging",
        "Audit logs & compliance reports",
      ],
      cta: "Get Started",
      popular: true,
    },
  ];

  return (
    <div className="min-h-screen py-24 px-4 bg-gradient-to-b from-slate-50 to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that works best for your medical licensing needs
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <BillingToggle value={billingCycle} onChange={setBillingCycle} />
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              period={billingCycle === "monthly" ? "month" : "year"}
              features={plan.features}
              cta={plan.cta}
              href="/signup"
              popular={plan.popular}
            />
          ))}
        </div>

        {/* Feature Cards */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Everything you need to manage medical licensing communications
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-8.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="HIPAA Compliant"
              description="End-to-end encryption for all sensitive medical data"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Lightning Fast"
              description="SMS delivery in under 2 minutes, guaranteed"
            />
            <FeatureCard
              icon={
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              }
              title="24/7 Support"
              description="Dedicated support for all your licensing needs"
            />
          </div>
        </div>

        {/* FAQ Cards */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <FAQCard
              question="Can I change plans anytime?"
              answer="Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
            />
            <FAQCard
              question="What payment methods do you accept?"
              answer="We accept all major credit cards, debit cards, and bank transfers for yearly plans."
            />
            <FAQCard
              question="Is there a free trial?"
              answer="Yes! All plans come with a 14-day free trial. No credit card required to start."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Not sure which plan is right for you?</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-card text-foreground font-medium rounded-lg border border-border hover:bg-secondary transition-colors"
          >
            Contact Sales
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
