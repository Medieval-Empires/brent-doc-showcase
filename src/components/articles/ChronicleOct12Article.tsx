import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import chronicleImage from "@/assets/chronicle-oct12.png";

interface ChronicleOct12ArticleProps {
  onClose: () => void;
}

export const ChronicleOct12Article = ({ onClose }: ChronicleOct12ArticleProps) => {
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
          <h1 className="text-4xl font-bold mb-2">Cymru Chronicle — 12 October 2025</h1>
          <p className="text-muted-foreground">12 October 2025</p>
        </div>

        <div className="mb-8">
          <img 
            src={chronicleImage} 
            alt="Cymru Chronicle - October 12, 2025" 
            className="w-full rounded-lg border border-border"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">England-Wessex War</h2>
          <p className="mb-4">
            Earlier this afternoon, a bloody struggle erupted across England as former <strong>King Evangelos</strong> launched 
            a campaign to reclaim Wessex from <strong>King Will</strong>, in a daring attempt to retake the English Throne. The 
            war started when King Will sailed to France, where King Evangelos and his forces were garrisoned, in an ambitious 
            assault meant to weaken Evangelos' forces.
          </p>
          <p className="mb-4">
            Various reports from the scene state that King Will took down 7 out of the 10 men who were attempting to thwart 
            this attack. Once Will retreated back to England, Evangelos readied his forces, crossed the channel and rushed 
            towards London. Within minutes Evangelos' banners surrounded the capital.
          </p>
          <p className="mb-4">
            The <strong>Siege of London</strong> proved brutal, with the city's ancient walls crumbling under relentless 
            bombardment. Despite being outnumbered, King Will refused to yield, personally leading his men in defense of the 
            breach. Witnesses claim the Wessex monarch fought fiercely, cutting down <strong>Fifteen of Evangelos' knights</strong>.
          </p>
          <p className="mb-4">
            The outcome of this war is not entirely clear, however it seems to be a Wessex Victory. With Evangelos being sent 
            to the shadow realm by the Admins and Will retiring his position as King of Wessex. How long will this peace last?
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Quebec Independence</h2>
          <p className="mb-4">
            In a stunning turn of events Quebec has broken away from The French Kingdom and formed its own Nation under 
            <strong>Kersoka</strong>. In a statement made by Kersoka on the 9th of October: "The French Kingdom has been 
            threatened by the UN and the Japanese and Manji's king has been nothing but silent. The Territory of New France 
            Thus being in danger of attack, wishes to separate and govern ourselves without input from Paris".
          </p>
          <p className="mb-4">
            They also go on to state that "If the French Kingdom wants their territory back they will need to take it by 
            force". This leaves us the question, Will France strike to take back Quebec? We shall find out in the near future.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">The Great European Road Project</h2>
          <p className="mb-4">
            Lithuania has announced they will start construction of a road that they claim will connect every European 
            Country. They are now asking if a European Nation wants to be connected to this road to Message 
            <strong>Fintukani</strong> to discuss further details.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Welsh Borders Reopen!</h2>
          <p className="mb-4">
            After Hostilities in England have seemed to come to an end, The Welsh King <strong>Jak3yy04</strong> and his 
            Prime Minister <strong>MistahMC</strong> have decided to reopen Welsh borders so that Trade and commerce can resume.
          </p>
          <p className="mb-4">
            However they state that if War returns to the Island then the borders will have to remain closed to protect the 
            welsh dedication to peace.
          </p>
        </section>
      </article>
    </div>
  );
};