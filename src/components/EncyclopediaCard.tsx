import { EncyclopediaEntry } from "@/data/encyclopedia";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface EncyclopediaCardProps {
  entry: EncyclopediaEntry;
  onClick: () => void;
}

export const EncyclopediaCard = ({ entry, onClick }: EncyclopediaCardProps) => {
  return (
    <Card 
      className="cursor-pointer transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-lg"
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <CardTitle className="font-serif text-xl">{entry.title}</CardTitle>
          <Badge variant="secondary" className="shrink-0 border border-primary/30 bg-primary/10 text-primary">
            {entry.category}
          </Badge>
        </div>
        <CardDescription className="text-muted-foreground">
          {entry.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {entry.tags.map((tag) => (
            <span 
              key={tag}
              className="rounded-full border border-border bg-accent/10 px-3 py-1 text-xs text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {entry.date && (
          <p className="mt-3 text-sm text-muted-foreground">
            <span className="font-medium text-accent">Date:</span> {entry.date}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
