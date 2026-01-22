import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 text-center transition-colors hover:border-primary/50">
      <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl mx-auto mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  )
}
