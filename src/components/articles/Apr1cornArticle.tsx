import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Apr1cornArticleProps {
  onClose: () => void;
}

export const Apr1cornArticle = ({ onClose }: Apr1cornArticleProps) => {
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
            Commanders & Figures
          </div>
          <h1 className="font-serif text-4xl font-bold">Apr1c0rn</h1>
          <div className="mt-2 text-lg text-muted-foreground">
            Emperor of the Byzantines, "The Reforger"
          </div>
          <div className="mt-1 text-sm text-muted-foreground">
            Born 31 August 2008 • Crowned 8 October 2025
          </div>
        </header>

        {/* Early Life */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">Early Life: The Child Of The Athenian King</h2>
          <p className="leading-relaxed text-muted-foreground">
            Born in the golden halls of the Athenian Acropolis on 31/8/2008, Apr1c0rn was the son of King Constantine the XII, a relatively small monarchy but one of the most influential and most culturally vibrant states. From childhood, Apr1c0rn was unlike others; he used to read about great warriors and kings such as Alexander the Great, Caesar, Cao Cao and many others. Through his voracious reading of all great conquerors, one was particularly his favorite: Justinian I, the one who faced many obstacles but with vision and strength, Apr1c0rn admired the strength and the vision as a leader; he faced many obstacles but he managed to unify the Byzantine Empire.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            At age 13, Apr1c0rn began studying strategy and political theory, mastering works of different philosophers and historians such as Plato, Herodotus, Socrates and others. By the age of 15, Apr1c0rn joined the military academy of Athens, and by 16 he managed to become a Strategos, owning his very own army. He had a mind like Alexander The Great and discipline like Leonidas the 1st of Sparta, his units stated. In 30/6/2024, the great philosophers of Athens admired as Apr1c0rn gave his famous speech at the Temple of Athena, stating:
          </p>
          <blockquote className="my-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
            "We are not the ruins of a fallen empire, we are the blueprint of a civilization reborn!"
          </blockquote>
        </section>

        {/* The Rise of the Byzantine Empire */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">The Rise of the Byzantine Empire</h2>
          <p className="leading-relaxed text-muted-foreground">
            At January 26th 2025, King Constantine XII died during the battle of Corinth, making his son Apr1c0rn, the king of Athens. In just 5 months, history turned once again after a global order paved the way for Apr1c0rn's greatest achievement: The restoration of the Byzantine Empire.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Apr1c0rn, now a king, saw an opportunity as chaos and war began all to take place all over Greece. He united the states of Athens, Peloponesse and Rhodes, forming the Hellenic Kingdom. Not through conquest but through diplomacy and a shared purpose: Unite the Greeks under 1 banner. The Byzantine one.
          </p>
        </section>

        {/* Coronation */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">The Reign of Light (Present)</h2>
          <p className="leading-relaxed text-muted-foreground">
            After some outstanding efforts to reunite the empire, on October 8th 2025, in a grand coronation inside the very walls that his ancestors defended Europe in, king Apr1c0rn was crowned "Βασιλεύς τοῦ Βυζαντίου" emperor of the Byzantines.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Now in his imperial palace, overlooking the golden horn, Apr1c0rn rules over a very prosperous and technologically unmatched nation. The new Byzantine empire stands as a the cultural and spiritual center of the ancestors of the byzantines. It's a symbol of unity, where a lot of cultures unite such as the Russians, Bosniaks, Greeks, Romanians and many other ethnicities, united under one banner of the double headed eagle, bound not by blood, but by faith, honor and unshakable loyalty to their emperor.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Under Apr1c0rn's enlightened rule, the empire thrives where ancient tradition meets modern brilliance, and where the spirit of Byzantium, once lost in time, burns brighter than ever before.
          </p>
        </section>

        {/* Legacy */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">Legacy of Apr1c0rn</h2>
          <p className="leading-relaxed text-muted-foreground">
            Historians already call him "The Reforger" as he's the one who brought the Byzantine flame back to life in a world that forgotten his soul. Each evening, as the golden light of the setting sun glows upon the Byzantine Empire, the emperor likes to walk in his walls, gazing at the city below, proud, serene and eternal.
          </p>
          <blockquote className="my-4 border-l-4 border-primary pl-4 italic text-muted-foreground">
            "Empires rise and fall, but the Hellenic spirit shall be immortal"
          </blockquote>
          <p className="mt-3 text-sm italic text-muted-foreground">
            - Emperor Apr1c0rn, protector of Europe and the reforger of the Byzantine empire. (Basılisket)
          </p>
        </section>

        {/* Key Facts */}
        <section>
          <h2 className="mb-3 font-serif text-2xl font-semibold">Key Information</h2>
          <ul className="space-y-2 text-muted-foreground">
            <li><b>Birth:</b> 31 August 2008, Athenian Acropolis</li>
            <li><b>Father:</b> King Constantine XII of Athens</li>
            <li><b>Title:</b> Emperor of the Byzantines (Βασιλεύς τοῦ Βυζαντίου)</li>
            <li><b>Coronation:</b> 8 October 2025</li>
            <li><b>Nickname:</b> "The Reforger"</li>
            <li><b>Military Rank:</b> Strategos (achieved at age 16)</li>
            <li><b>Historical Inspiration:</b> Justinian I, Alexander the Great, Leonidas I</li>
            <li><b>Famous Quote:</b> "We are not the ruins of a fallen empire, we are the blueprint of a civilization reborn!"</li>
          </ul>
        </section>

        {/* Tags */}
        <footer className="border-t border-border pt-4">
          <div className="text-sm text-muted-foreground">
            Tags: Apr1c0rn · Byzantine Empire · Constantine XII · Athens · Strategos · The Reforger · Justinian I · Hellenic Kingdom
          </div>
        </footer>
      </div>
    </article>
  );
};
