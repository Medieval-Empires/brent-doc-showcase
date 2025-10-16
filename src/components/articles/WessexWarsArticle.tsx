import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface WessexWarsArticleProps {
  onBack: () => void;
  onNavigate?: (articleId: string) => void;
}

export const WessexWarsArticle = ({ onBack, onNavigate }: WessexWarsArticleProps) => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-4 -ml-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to hub
          </Button>

          <h1 className="text-4xl font-bold mb-2">Wessex Restoration Wars</h1>
          <p className="text-muted-foreground mb-6">7-12 October 2025</p>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <p className="lead text-lg mb-6">
              The Wessex Restoration Wars were a series of military conflicts spanning five days in October 2025, 
              culminating in the restoration of Wessex territorial control and the dissolution of hostile coalitions.
            </p>


            <section id="overview" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p>
                The Wessex Restoration Wars represent a pivotal moment in the geopolitical landscape of October 2025. 
                What began as a coordinated strike on Australia's west coast evolved into a multi-theater campaign 
                that saw Wessex, supported by the IGC, successfully defend their capital and reclaim lost territories.
              </p>
              <p className="mt-4">
                The conflict is notable for its rapid progression, decisive engagements, and the strategic coordination 
                between Wessex and IGC forces across multiple fronts. Over the course of five days, three major 
                engagements reshaped the balance of power in the region.
              </p>
            </section>

            <section id="background" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Background</h2>
              <p>
                Tensions had been escalating between Wessex and various regional powers, particularly concerning 
                territorial disputes and alliance structures. The immediate catalyst for the conflict remains subject 
                to historical debate, though strategic positioning and resource control were clear motivating factors.
              </p>
              <p className="mt-4">
                The IGC's support of Wessex proved crucial, with coordinated planning evident from the opening 
                engagement at Perth. The coalition arrayed against Wessex included forces from Australia, the Khaganate, 
                Rome, Byzantine Empire, France, Austria, and Denmark—representing a significant challenge to Wessex's 
                territorial integrity.
              </p>
            </section>

            <section id="major-battles" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Major Battles</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <button 
                      onClick={() => onNavigate?.('article-perth')}
                      className="text-accent hover:underline cursor-pointer"
                    >
                      Battle of Perth
                    </button>
                    {" "}(7 October)
                  </h3>
                  <p>
                    The chronological opening of the war saw Wessex and IGC forces execute a decisive raid on 
                    Australia's west coast. The engagement resulted in approximately 4 Australian and allied casualties 
                    against 1 for Wessex-IGC forces. Key moments included erikas1234565 killing Xenov and Marci's 
                    strategic escape. The battle forced Australia's withdrawal from the broader conflict.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <button 
                      onClick={() => onNavigate?.('article-rome')}
                      className="text-accent hover:underline cursor-pointer"
                    >
                      Skirmish of Rome
                    </button>
                    {" "}(7 October)
                  </h3>
                  <p>
                    Occurring approximately two hours after Perth, this brief engagement outside Rome's walls saw 
                    IGC forces probe Roman defenses. While Roman forces successfully defended, the incident resulted 
                    in the death of Benijoe (TitledMoon) during a surprise strike. The IGC subsequently withdrew, 
                    marking this as a minor Roman defensive success.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    <button 
                      onClick={() => onNavigate?.('article-london')}
                      className="text-accent hover:underline cursor-pointer"
                    >
                      Battle of London
                    </button>
                    {" "}(12 October)
                  </h3>
                  <p>
                    The decisive engagement of the war saw Wessex defend their capital against a major coalition assault 
                    involving Byzantine, French, Austrian, and Danish forces. Despite a TNT breach of the city's defenses, 
                    Wessex mounted a successful counter-attack that resulted in heavy French casualties and a chaotic 
                    coalition retreat. Disputed rumors of "cheated" items emerged but remain unverified.
                  </p>
                </div>
              </div>
            </section>

            <section id="outcome" className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Outcome and Aftermath</h2>
              <p>
                The Wessex Restoration Wars concluded with a clear Wessex victory. Key outcomes included:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Successful defense of the Wessex capital at London</li>
                <li>Australia's forced withdrawal from the conflict after Perth</li>
                <li>Dissolution of the anti-Wessex coalition following the London defeat</li>
                <li>Restoration of Wessex territorial control</li>
                <li>Strengthened Wessex-IGC alliance</li>
              </ul>
              <p className="mt-4">
                The rapid conclusion of the conflict, accomplished within five days, demonstrated the effectiveness 
                of coordinated military action and the strategic vulnerabilities of loosely-aligned coalitions. The 
                wars established Wessex as a dominant regional power and confirmed the IGC as a reliable military ally.
              </p>
            </section>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-6 bg-muted/30 p-6 rounded-lg border">
            <h2 className="text-xl font-bold mb-4">Wessex Restoration Wars</h2>
            
            <div className="space-y-4 text-sm">
              <div>
                <div className="font-semibold text-muted-foreground">Category</div>
                <div>Wars & Battles</div>
              </div>

              <div>
                <div className="font-semibold text-muted-foreground">Dates</div>
                <div>7-12 October 2025</div>
              </div>

              <div>
                <div className="font-semibold text-muted-foreground">Major Battles</div>
                <div>
                  <ul className="list-disc list-inside space-y-1">
                    <li>
                      <button onClick={() => onNavigate?.('article-perth')} className="text-accent hover:underline">
                        Battle of Perth
                      </button>
                      {" "}(7 Oct)
                    </li>
                    <li>
                      <button onClick={() => onNavigate?.('article-rome')} className="text-accent hover:underline">
                        Skirmish of Rome
                      </button>
                      {" "}(7 Oct)
                    </li>
                    <li>
                      <button onClick={() => onNavigate?.('article-london')} className="text-accent hover:underline">
                        Battle of London
                      </button>
                      {" "}(12 Oct)
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="font-semibold text-muted-foreground">Belligerents</div>
                <div className="mt-2">
                  <div className="font-medium">Wessex & Allies:</div>
                  <div className="ml-2">Wessex, IGC</div>
                  <div className="font-medium mt-2">Coalition Forces:</div>
                  <div className="ml-2">Australia, Khaganate, Rome, Byzantine, France, Austria, Denmark</div>
                </div>
              </div>

              <div>
                <div className="font-semibold text-muted-foreground">Result</div>
                <div>Wessex victory; territorial restoration</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
