import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import chronicleImage from "@/assets/chronicle-oct14.png";

interface ChronicleOct14ArticleProps {
  onClose: () => void;
}

export const ChronicleOct14Article = ({ onClose }: ChronicleOct14ArticleProps) => {
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
          <h1 className="text-4xl font-bold mb-2">Cymru Chronicle — 14 October 2025</h1>
          <p className="text-muted-foreground">14 October 2025</p>
        </div>

        <div className="mb-8">
          <img 
            src={chronicleImage} 
            alt="Cymru Chronicle - October 14, 2025" 
            className="w-full rounded-lg border border-border"
          />
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Byzantine Embargo on Rome Lifted</h2>
          <p className="mb-4">
            The Embargo, set by the Byzantine Empire, on the Roman Empire has thankfully been Lifted. <strong>Mekanik</strong> stated 
            "The embargo lifted as of last night and both sides have agreed to apologise".
          </p>
          <p className="mb-4">
            This is great news for every citizen in the European Continent as a potential war has been averted and peace restored.
          </p>
          <p className="mb-4">
            We at the Cymru Chronicle would also like to apologise to the Byzantine Empire, as in yesterday's issue we made 
            a mistake. We accidentally called Mekanik the Byzantine Emperor when actually the Emperor is <strong>Apr1c0rn</strong>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Editor's Note</h2>
          <p className="mb-4">
            That's all the news for today folks, bit of a short one I know, been a bit of a slow day lol. When asked for new 
            news stories <strong>Vinnie</strong> declared "uhh everything is going good as far as I know". So I guess that 
            accurately sums it up.
          </p>
          <p className="mb-4">
            The Cymru Chronicle has a TikTok page now so yanno go follow it or something. <strong>@cymru.chronicle</strong>
          </p>
        </section>
      </article>
    </div>
  );
};