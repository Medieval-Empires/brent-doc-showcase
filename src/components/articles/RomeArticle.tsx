import { Button } from "@/components/ui/button";

export function RomeArticle({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <Button variant="outline" onClick={onClose} className="mb-4">← Back to hub</Button>
      <article className="prose prose-invert max-w-none">
        <h1 className="font-serif text-4xl">The Skirmish of Rome</h1>
        <p className="text-muted-foreground">Minor Roman defensive success; IGC withdrew.</p>
        <p className="text-accent">7 October 2025 • Rome</p>
        <h2>Overview</h2>
        <p>Small incident approximately 2 hours after Perth. Brief fight outside the walls resulted in Benijoe (TitledMoon) being killed during a surprise strike.</p>
      </article>
    </div>
  );
}
