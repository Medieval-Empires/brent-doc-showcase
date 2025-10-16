import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NetherlandsArticleProps {
  onClose: () => void;
}

export const NetherlandsArticle = ({ onClose }: NetherlandsArticleProps) => {
  return (
    <article className="relative">
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-0 top-0"
        onClick={onClose}
      >
        <X className="h-4 w-4" />
      </Button>

      <div className="space-y-6">
        {/* Header */}
        <header className="border-b border-border pb-4">
          <div className="mb-2 text-sm uppercase tracking-wider text-muted-foreground">
            Nations & Factions
          </div>
          <h1 className="font-serif text-4xl font-bold">The Netherlands</h1>
          <div className="mt-2 text-lg text-muted-foreground">
            Monarchy led by Queen and Don von Craft
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Founded after fall of Western Federation
          </div>
        </header>

        {/* Overview */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">Overview</h2>
          <p className="leading-relaxed text-muted-foreground">
            The Netherlands was formed after the fall of the Western Federation, which gave birth to France, Spain, Rome, and the Netherlands. Chaos swept across western Europe, and the heirs of Queen Elizabeth the Western Sun were forgotten. Queen Elizabeth died during the birth of the Silver and Golden Queens. After this tumultuous period, the rulers of new kingdoms and empires arose across the continent.
          </p>
        </section>

        {/* Formation & Leadership */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">Leadership & Royal Lineage</h2>
          <p className="leading-relaxed text-muted-foreground">
            As the new kingdoms took shape, several leaders emerged: <b>DSK_Sayan</b> became the leader of France, <b>Kanzo</b> claimed Spain, and <b>Acht</b> secured the Roman Empire. Amid this political reshuffling, four principal figures came to prominence in the Netherlands: the Queen herself, a French advisor, the Queen's daughter with striking silver hair and blazing red eyes who possessed both compassion for her people and cold strategic calculation, and <b>Don von Craft</b>, the royal historian and advisor to King Manji the Great.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The rulers governed with peace and prosperity. The Queen commanded the Dutch elite mercenaries, later known as the Order of the Black Lion, leading them in combat for allies and close friends. She participated in battles against Skane and in the coalition against King Will. The tragic death of King Manji the Great led the Silver Queen and Don von Craft to assume joint leadership of the Netherlands, with Don von Craft elevated to King.
          </p>
        </section>

        {/* Key Facts */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">Key Information</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><b>Formation:</b> After the fall of the Western Federation</li>
            <li><b>Co-Leaders:</b> The Queen (Silver Queen) and Don von Craft</li>
            <li><b>Royal Lineage:</b> Descended from Queen Elizabeth the Western Sun, Silver and Golden Queens</li>
            <li><b>Military Force:</b> Dutch elite mercenaries (Order of the Black Lion)</li>
            <li><b>Notable Figures:</b> DSK_Sayan (French leader), Kanzo (Spain), Acht (Roman Empire), King Manji the Great</li>
            <li><b>Government:</b> Monarchy (Queen and Don von Craft as King)</li>
          </ul>
        </section>

        {/* Tags */}
        <footer className="border-t border-border pt-4">
          <div className="text-sm text-muted-foreground">
            Tags: Netherlands · DSK_Sayan · Kanzo · Acht · Queen Elizabeth · Don von Craft · Silver Queen · Manji · Order of the Black Lion
          </div>
        </footer>
      </div>
    </article>
  );
};
