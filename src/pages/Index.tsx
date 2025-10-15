import { useState } from "react";
import { Castle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { INDEX } from "@/data/encyclopedia";
import { BrentArticle } from "@/components/articles/BrentArticle";
import { PerthArticle } from "@/components/articles/PerthArticle";
import { RomeArticle } from "@/components/articles/RomeArticle";
import { LondonArticle } from "@/components/articles/LondonArticle";
import { WessexWarsArticle } from "@/components/articles/WessexWarsArticle";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCat, setActiveCat] = useState<string>("all");
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const filteredList = INDEX.filter((entry) => {
    const catMatch = activeCat === "all" || entry.cat === activeCat;
    if (!catMatch) return false;
    
    if (!searchQuery.trim()) return true;
    
    const searchText = `${entry.title} ${entry.kicker} ${entry.result} ${entry.date || ""} ${entry.tags.join(" ")} ${entry.blurb}`.toLowerCase();
    return searchText.includes(searchQuery.toLowerCase());
  });

  const categories = [
    { id: "all", label: "All" },
    { id: "wars", label: "Wars & Battles" },
    { id: "figures", label: "Commanders & Figures" },
    { id: "factions", label: "Nations & Factions" },
    { id: "docs", label: "Chronicles & Documents" },
  ];

  const renderArticle = () => {
    switch (selectedArticle) {
      case "article-wessex-wars":
        return <WessexWarsArticle onBack={() => setSelectedArticle(null)} />;
      case "article-perth":
        return <PerthArticle onClose={() => setSelectedArticle(null)} />;
      case "article-rome":
        return <RomeArticle onClose={() => setSelectedArticle(null)} />;
      case "article-london":
        return <LondonArticle onClose={() => setSelectedArticle(null)} />;
      case "article-brent":
        return <BrentArticle onClose={() => setSelectedArticle(null)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-border bg-gradient-to-b from-card/95 to-card/80 backdrop-blur-sm">
        <div className="flex items-center gap-4 px-6 py-4">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-lg" />
            <Castle className="relative h-10 w-10 text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl font-bold tracking-wide">
              Medieval Empires Encyclopedia
            </h1>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              An Interactive Archive of the Medieval Empires Universe
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-5xl px-4 py-6">
        {/* Filters */}
        <div className="sticky top-[88px] z-10 space-y-4 rounded-lg border border-border bg-card/95 p-4 shadow-lg backdrop-blur-sm">
          <Input
            placeholder="Search articles…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
          />
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCat === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCat(cat.id)}
                aria-pressed={activeCat === cat.id}
              >
                {cat.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="mt-6 flex flex-col gap-0">
          {filteredList.map((entry, idx) => (
            <div key={entry.id}>
              <Card 
                className="cursor-pointer rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
                onClick={() => setSelectedArticle(entry.section)}
              >
                <div className="flex flex-col gap-3">
                  <div className="text-sm text-muted-foreground">{entry.kicker}</div>
                  <h3 className="font-serif text-xl font-semibold">{entry.title}</h3>
                  <div className="text-muted-foreground">{entry.result}</div>
                  <div className="text-sm text-muted-foreground opacity-85">{entry.date}</div>
                  <div className="flex flex-wrap gap-2">
                    {entry.tags.slice(0, 6).map((tag) => (
                      <Badge 
                        key={tag}
                        variant="secondary"
                        className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed">{entry.blurb}</p>
                  <div className="mt-2">
                    <span className="text-accent hover:underline">Open →</span>
                  </div>
                </div>
              </Card>
              {idx < filteredList.length - 1 && (
                <div className="my-3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
              )}
            </div>
          ))}
        </div>

        {filteredList.length === 0 && (
          <div className="mt-12 text-center text-lg text-muted-foreground">
            No entries found matching your criteria.
          </div>
        )}
      </main>

      <footer className="mt-8 border-t border-border p-4 text-center text-muted-foreground">
        © Medieval Empires Encyclopedia — Works offline.
      </footer>

      {/* Article Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-h-[90vh] max-w-6xl overflow-y-auto">
          {renderArticle()}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
