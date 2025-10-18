import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import chronicleImage from "@/assets/chronicle-oct16.png";

interface ChronicleOct16ArticleProps {
  onClose: () => void;
}

export const ChronicleOct16Article = ({ onClose }: ChronicleOct16ArticleProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute right-4 top-4"
      >
        <X className="h-4 w-4" />
      </Button>

      <article className="prose prose-invert max-w-none">
        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-2">Chronicles & Documents</p>
          <h1 className="text-4xl font-bold mb-2">Cymru Chronicle — 16 October 2025</h1>
          <p className="text-muted-foreground">16 October 2025</p>
        </div>

        <div className="mb-8">
          <img 
            src={chronicleImage} 
            alt="Cymru Chronicle - October 16, 2025" 
            className="w-full rounded-lg border border-border"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Reparations to Wessex Repaid!</h2>
          <p className="mb-4">
            It was announced by <strong>Will</strong> that all the reparations that Wessex demanded in the aftermath of the 
            war have been repaid. The nations of the British Isles rejoice as peace has finally been confirmed.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Great Roman Tournament</h2>
          <p className="mb-4">
            The Roman Empire has announced that they will be hosting a Tournament in their newly built Colosseum. The event 
            will take place on the 19th of October at 17:00 and will include several events, including Jousting, 1v1 duels 
            and 3v3 team battles. There will be plenty of prizes up for grabs so if you are interested, contact 
            <strong>Finn124</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Jeje has escaped!</h2>
          <p className="mb-4">
            <strong>Jeje200</strong>, who was captured by Vinland yesterday, has managed to escape from captivity. In a 
            statement made by <strong>DiscoOfPandass</strong> they say "The player known as JEJE has escaped the grasps of 
            Vinland and now is engaged in a worldwide manhunt."
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Japanese Unification Completed</h2>
          <p className="mb-4">
            In a landmark agreement, the Japanese Constitutional Empire has completed the purchase of the Tokugawa Shogunate 
            faction for an undisclosed sum. The transaction marks the peaceful unification of all Japanese islands, ending 
            long-standing divisions between the Empire and the Shogunate. This kicks off a new era of peace and prosperity 
            for Japan.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Daily Quotes by Vinnie da Pooh</h2>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 italic mb-6">
            <p className="mb-2">
              "For it isn't if we gooneth with xenov or gooneth to him. The question is, does his horse lieth in xenov's 
              yurt with him?"
            </p>
            <p className="text-sm text-muted-foreground text-right">
              — Vinnie, House of philosophy, Constantinople
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Marriages</h2>
          <div className="bg-muted/20 border border-muted rounded-lg p-6">
            <p>
              <strong>Fintukani</strong>, The Prince of Lithuania has proposed to <strong>Anchovy</strong>, The Princess of 
              Wessex. The Ceremony will take place next weekend in Wessex.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};