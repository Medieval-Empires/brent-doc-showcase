import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import chronicleImage from "@/assets/chronicle-oct15.png";

interface ChronicleOct15ArticleProps {
  onClose: () => void;
}

export const ChronicleOct15Article = ({ onClose }: ChronicleOct15ArticleProps) => {
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
          <h1 className="text-4xl font-bold mb-2">Cymru Chronicle — 15 October 2025</h1>
          <p className="text-muted-foreground">15 October 2025</p>
        </div>

        <div className="mb-8">
          <img 
            src={chronicleImage} 
            alt="Cymru Chronicle - October 15, 2025" 
            className="w-full rounded-lg border border-border"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Vinland, Kidnaps French Citizen!</h2>
          <p className="mb-4">
            A person inside The French Kingdom, who asked to remain anonymous, has informed us at the Cymru Chronicle that 
            a citizen named <strong>jeje200</strong> has been kidnapped by Vinland. The kidnappers initially demanded the 
            territory of New France but have changed their demands for resources.
          </p>
          <p className="mb-4">
            In a statement made by Vinland they said "Today we caught a French citizen named Jeje200, we just want in exchange 
            for his life an agreement from France that Quebec is gonna belong to Vinland." They go on to state "After hard 
            discussion with French high ranking officials, they said that Jeje is irrelevant for them and they don't want 
            him back."
          </p>
          <p className="mb-4">
            We at the Cymru Chronicle are praying for Jeje's safety and hope an agreement is made so that he can return home.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Treaty of Tirana Declared</h2>
          <p className="mb-4">
            In a historic move signaling the end of recent tensions along the Danube, the Byzantine Empire, the Greater 
            Slovenian Empire (GSE), and the Roman Empire have signed the Treaty of Tirana, establishing a one-month 
            non-aggression pact and redefining regional borders.
          </p>
          <p className="mb-4">
            The agreement, signed by His Imperial Excellency <strong>Basileus Apr1corn I the Brave</strong>, Imperator 
            <strong>isonite057</strong> of the GSE, Roman Empress <strong>Acht</strong>, and King <strong>Johny</strong> of 
            Romania, aims to prevent further hostilities following days of uncertainty dubbed "the Silence on the Danube."
          </p>
          
          <h3 className="text-xl font-semibold mb-3 mt-6">Under the terms of the treaty:</h3>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li>The Roman Empire acknowledges a one-month non-aggression pact with both Byzantium and the GSE.</li>
            <li>The GSE will cede the provinces of Adrianopole, Thessaloniki, Burgas, and Southern Plovdiv to the Byzantine Empire.</li>
            <li>In return, Byzantium will pay 600 Diamonds and 600 Iron to the GSE and pledge ongoing peaceful relations.</li>
            <li>Romania is officially recognized as an equal kingdom within the GSE.</li>
          </ul>

          <p className="mb-4">
            The accord, personally endorsed by Basileus Apr1corn is being hailed as a diplomatic triumph that may usher in 
            a new period of stability across the eastern Mediterranean.
          </p>
          <p className="mb-4">
            Observers describe the treaty as a decisive move that "averted the storm before it broke," while marking the 
            beginning of what may become known as the <em>Tirana Peace Period</em>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Daily Quotes by Vinnie da Pooh</h2>
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 italic">
            <p className="mb-2">
              "To think femboys are overhated or underrated. For that question does not matter for it isn't if they have 
              a hole or a pole but if they smell like charcoal then there is a goal"
            </p>
            <p className="text-sm text-muted-foreground text-right">
              — Vinnie, House of philosophy, Constantinople
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Ad Section</h2>
          <div className="bg-muted/20 border border-muted rounded-lg p-6">
            <p className="mb-2">
              <strong>Sergey Taboritsky</strong> is looking for Work. If you have an interesting job that needs doing, he will 
              do it for free, thats right FREE. Get in contact with him on Discord.
            </p>
          </div>
        </section>
      </article>
    </div>
  );
};