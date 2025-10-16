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
            The creation of the Netherlands is unknown but it was made after the fall of the Western Federation (lore thing which gave birth to France, Spain, Rome and Netherlands). The chaos took over the western Europe forgetting about the heirs of the Queen Elizabeth the Western Sun. (Which she died at the birth of Silver and Golden Queen more about them later on) after some time the rulers of new kingdoms and empires had arisen.
          </p>
        </section>

        {/* Formation & Leadership */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">Leadership & Royal Lineage</h2>
          <p className="leading-relaxed text-muted-foreground">
            The leader of the French has become <b>DSK_Sayan</b> while Spain got <b>Kanzo</b> (check if it's not right remember how it's spelled). On top of that the advisor Achi from PSC territory while Spain was starting to claim the thrones new faces were shown, 4 main people a Queen, a French advisor and a daughter of the Queen with beautiful silver hair with blazing red eyes with heart for her people and cold calculations, The Don von Craft the royal historian and advisor of the King, his personal best friend and king's own Daughter, the mix of blood of The Silver Queen and King Manji the Great.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            They ruled with peace and bread, only Queen had ruled over dutch elite mercenaries (later on Order of the black Lion) which she led in combat for her allies and close friends. She took part in battle against Skane or coalition against the king Will and tragically death of the monarch Manji lead Silver Queen and Don von Craft into the leadership (but they are not married but don is now king).
          </p>
        </section>

        {/* Note */}
        <section className="rounded-lg border border-border bg-muted/30 p-4">
          <p className="text-sm italic text-muted-foreground">
            This is a shortcut for all the stories and evenrs
          </p>
          <p className="mt-2 text-sm font-semibold">Events</p>
        </section>

        {/* Key Facts */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">Key Information</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><b>Formation:</b> After the fall of the Western Federation</li>
            <li><b>Co-Leaders:</b> The Queen (Silver Queen) and Don von Craft</li>
            <li><b>Royal Lineage:</b> Descended from Queen Elizabeth the Western Sun, Silver and Golden Queens</li>
            <li><b>Military Force:</b> Dutch elite mercenaries (Order of the Black Lion)</li>
            <li><b>Notable Figures:</b> DSK_Sayan (French leader), Kanzo (Spain), King Manji the Great</li>
            <li><b>Government:</b> Monarchy (Queen and Don von Craft as King)</li>
          </ul>
        </section>

        {/* Tags */}
        <footer className="border-t border-border pt-4">
          <div className="text-sm text-muted-foreground">
            Tags: Netherlands · DSK_Sayan · Kanzo · Queen Elizabeth · Don von Craft · Silver Queen · Manji · Order of the Black Lion
          </div>
        </footer>
      </div>
    </article>
  );
};
