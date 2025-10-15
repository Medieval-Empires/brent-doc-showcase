import { Castle } from "lucide-react";

export const EncyclopediaHeader = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-sm">
      <div className="flex items-center gap-4 px-6 py-4">
        <div className="relative">
          <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-lg" />
          <Castle className="relative h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
        </div>
        <div className="flex flex-col">
          <h1 className="font-serif text-2xl font-bold tracking-wide text-foreground">
            Medieval Empires Encyclopedia
          </h1>
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            An Interactive Archive of the Medieval Empires Universe
          </p>
        </div>
      </div>
    </header>
  );
};
