import { Button } from "@/components/ui/button";

export function PerthArticle({ onClose }: { onClose: () => void }) {
  return (
    <div>
      <Button variant="outline" onClick={onClose} className="mb-4">← Back to hub</Button>
      <article className="prose prose-invert max-w-none">
        <h1 className="font-serif text-4xl">Battle of Perth</h1>
        <p className="text-muted-foreground">Chronological start of the Wessex Restoration Wars. Wessex–IGC victory; Australia exits war.</p>
        <p className="text-accent">7 October 2025 • Perth, Australia</p>
        <h2>Overview</h2>
        <p>The Battle of Perth marked the opening engagement of the Wessex Restoration Wars, fought on Australia's west coast. Forces from Wessex and the International Guild Coalition launched a decisive raid against Australian positions.</p>
      </article>
    </div>
  );
}
