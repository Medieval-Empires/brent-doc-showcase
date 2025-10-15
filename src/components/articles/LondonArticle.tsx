import { Button } from "@/components/ui/button";

export function LondonArticle({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <Button variant="outline" onClick={onClose} className="mb-4">← Back to hub</Button>
      <article className="prose prose-invert max-w-none">
        <h1 className="font-serif text-4xl">Battle of London</h1>
        <p className="text-muted-foreground">Wessex victory; coalition retreat in chaos.</p>
        <p className="text-accent">12 October 2025 • London, Kingdom of Wessex</p>
        <h2>Overview</h2>
        <p>Defensive stand inside the capital featuring a TNT breach, counter-attack, and heavy French losses. Disputed rumors exist regarding equipment used during the defense.</p>
        <h2>Result</h2>
        <p><strong>Wessex victory</strong> — Coalition forces retreated in disarray after Austrian withdrawal triggered a collapse of the remaining frontage.</p>
      </article>
    </div>
  );
}
