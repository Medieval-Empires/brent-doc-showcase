import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import chronicleImage from "@/assets/chronicle-oct13.png";

interface ChronicleOct13ArticleProps {
  onClose: () => void;
}

export const ChronicleOct13Article = ({ onClose }: ChronicleOct13ArticleProps) => {
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
          <h1 className="text-4xl font-bold mb-2">Cymru Chronicle — 13 October 2025</h1>
          <p className="text-muted-foreground">13 October 2025</p>
        </div>

        <div className="mb-8">
          <img 
            src={chronicleImage} 
            alt="Cymru Chronicle - October 13, 2025" 
            className="w-full rounded-lg border border-border"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Russia-Poland Merge</h2>
          <p className="mb-4">
            In an unprecedented turn of events, Poland has formally vassalized Russia following diplomatic negotiations that 
            reshaped the balance of power in Eastern Europe. The move comes after the Russian government, facing widespread 
            inactivity and political stagnation, sought to form a union with Poland. The initiative that ultimately failed 
            but opened the door to deeper cooperation.
          </p>
          <p className="mb-4">
            According to Russian Leader <strong>Nuzzy</strong>, the agreement was reached peacefully after days of talks 
            between Poland and Russia. The Russian leadership, citing a desire for "stability, revitalization, and mutual 
            prosperity," consented to becoming a vassal state under Polish oversight rather than risk further internal decline.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Byzantine Embargo on Rome</h2>
          <p className="mb-4">
            The Byzantine Empire has announced an Embargo on The Roman Empire after a series of insults directed at Byzantine 
            citizens were made by Roman Empress <strong>Acht</strong> and <strong>Sergey Taboritsky</strong>. In a statement 
            made by Byzantine Emperor <strong>Mekanik</strong>, he declared "After we demanded an apology for Acht's Insult 
            of our newest member filipboken, we have been insulted formally by Sergey Taboritsky and thus we announce an 
            embargo of the Roman Empire".
          </p>
          <p className="mb-4">
            He also provided Screenshot evidence of this insult. Roman Empress Acht stated that "He never apologised for the 
            sexual comments he made a while ago so I won't either". So with no apologies from either side, The embargo stands, 
            which brings the two nations closer to war… Maybe.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Wessex demands Reparations!</h2>
          <p className="mb-4">
            Former King of Wessex <strong>Will</strong> has officially demanded that reparations be made towards every 
            Icelandic Soldier that died in the recent war in England. Will stated "If this demand is not met, peace will 
            not be reached, and Wessex will remain at war with the following nations: France, Rome, Austria-Hungary, Denmark 
            and the Byzantine Empire. However there is good news. There are rumours that staff are deciding whether or not 
            to restore dead players inventories. If this happens we should finally see some peace brought to the British Isles.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Floods Hit Parthia</h2>
          <p className="mb-4">
            Parthian Leader <strong>Arsaces</strong> has announced that an area called The Euphrates has been flooded after 
            harsh Thunderstorms, which raised the water level by two blocks. 87 are believed to have died and 3 houses were 
            completely flooded.
          </p>
          <p className="mb-4">
            Arsaces also stated that "The floods allow an easy huge canal to be built across Europe and Asia" Which has led 
            many to speculate if this so called 'storm' was real and if the Parthian Government did this themselves.
          </p>
        </section>
      </article>
    </div>
  );
};