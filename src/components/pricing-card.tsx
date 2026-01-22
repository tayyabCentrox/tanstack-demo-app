import { Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface PricingFeature {
  feature: string
  included: boolean
}

interface PricingCardProps {
  name: string
  description: string
  price: number
  period: "month" | "year"
  features: string[]
  cta: string
  href: string
  popular?: boolean
}

export function PricingCard({
  name,
  description,
  price,
  period,
  features,
  cta,
  href,
  popular = false,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl border p-8 transition-all hover:shadow-xl",
        popular
          ? "border-primary shadow-lg shadow-primary/10 bg-card"
          : "border-border bg-card"
      )}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-xl font-bold mb-2 text-card-foreground">
          {name}
        </h3>
        <p className="text-sm mb-6 text-muted-foreground">
          {description}
        </p>
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-bold text-card-foreground">
            ${price}
          </span>
          <span className="text-lg text-muted-foreground">
            /{period}
          </span>
        </div>
      </div>

      <a
        href={href}
        className={cn(
          "flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold transition-all",
          popular
            ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md"
            : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
        )}
      >
        {cta}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5M6 12l5-5m0 0l5 5" />
        </svg>
      </a>

      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="w-5 h-5 flex-shrink-0 mt-0.5 rounded-full bg-primary/10 flex items-center justify-center">
              <Check className="w-3 h-3 text-primary" />
            </div>
            <span className="text-sm text-card-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
