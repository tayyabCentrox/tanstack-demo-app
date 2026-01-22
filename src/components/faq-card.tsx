import { Card, CardContent } from "@/components/ui/card"

interface FAQCardProps {
  question: string
  answer: string
}

export function FAQCard({ question, answer }: FAQCardProps) {
  return (
    <Card className="transition-colors hover:border-primary/50">
      <CardContent className="p-6">
        <h3 className="font-semibold text-card-foreground mb-2">{question}</h3>
        <p className="text-sm text-muted-foreground">{answer}</p>
      </CardContent>
    </Card>
  )
}
