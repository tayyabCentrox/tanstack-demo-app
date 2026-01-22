import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/")({
  component: DemoPage,
});

function DemoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1>Demo</h1>
    </div>
  );
}
