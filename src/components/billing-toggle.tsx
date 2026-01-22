import * as React from "react"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

type BillingCycle = "monthly" | "yearly"

interface BillingToggleProps {
  value: BillingCycle
  onChange: (value: BillingCycle) => void
}

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <Label
        onClick={() => onChange("monthly")}
        className={`text-sm font-medium transition-colors cursor-pointer ${
          value === "monthly" ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Monthly
      </Label>
      <button
        onClick={() => onChange(value === "monthly" ? "yearly" : "monthly")}
        type="button"
        role="switch"
        aria-checked={value === "yearly"}
        className={cn(
          "relative w-14 h-7 rounded-full transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          value === "yearly" ? "bg-primary" : "bg-input"
        )}
      >
        <span
          className={cn(
            "absolute top-1 w-5 h-5 bg-white rounded-full shadow transition-transform",
            value === "yearly" ? "translate-x-7" : "translate-x-1"
          )}
        />
      </button>
      <Label
        onClick={() => onChange("yearly")}
        className={`text-sm font-medium transition-colors cursor-pointer ${
          value === "yearly" ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Yearly
      </Label>
      <span className="ml-2 px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full">
        Save 17%
      </span>
    </div>
  )
}
