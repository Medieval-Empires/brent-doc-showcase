import { Button } from "@/components/ui/button";

export function LeagueArticle({ onClose, onNavigate }: { onClose: () => void; onNavigate?: (articleId: string) => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <Button variant="outline" onClick={onClose} className="mb-6">← Back to hub</Button>
        
        <article className="space-y-6">
          <div>
            <h1 className="mb-2 font-serif text-4xl font-bold" id="title-league">League of Nations</h1>
            <p className="mb-4 text-lg text-accent">Founded 28 September 2025</p>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Nations & Factions — International Organization</p>
              <p className="mt-1 font-medium">Diplomatic alliance countering imperialism and establishing international dialogue</p>
            </div>
          </div>


          <section>
            <h2 id="lon-foundation" className="border-b border-border pb-2 text-2xl font-semibold">Foundation</h2>
            <p className="mt-4">
              The <b>League of Nations</b> was established on <b>28 September 2025</b> by the <b>Japanese Prime Minister and Minister of Defence</b>. The organization was conceived as a response to rising imperialism and the need for structured diplomatic channels between the world's nations.
            </p>
            <p className="mt-4">
              Headquartered in <b>Geneva, Switzerland</b>, the League represents one of the most ambitious attempts at international cooperation and collective security in this era.
            </p>
          </section>

          <section>
            <h2 id="lon-purpose" className="border-b border-border pb-2 text-2xl font-semibold">Purpose and Mission</h2>
            <p className="mt-4">The League of Nations was created with two primary objectives:</p>
            <ul className="mt-2 ml-6 list-disc space-y-2">
              <li><b>Counter imperialism:</b> To provide a collective voice against aggressive expansion and imperial overreach</li>
              <li><b>Establish diplomatic talks:</b> To create formal channels of communication and negotiation between all member nations</li>
            </ul>
            <p className="mt-4">
              The organization seeks to promote peaceful resolution of conflicts through dialogue rather than warfare, providing a neutral forum where nations can address grievances and negotiate settlements.
            </p>
          </section>

          <section>
            <h2 id="lon-members" className="border-b border-border pb-2 text-2xl font-semibold">Member Nations</h2>
            <p className="mt-4">The League comprises <b>26 member nations</b> spanning Europe, Asia, and beyond:</p>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">European Members</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm">
                  <li>
                    <button onClick={() => onNavigate?.('article-byzantium')} className="text-accent hover:underline">
                      Byzantium
                    </button>
                  </li>
                  <li>France</li>
                  <li>German Empire</li>
                  <li>Kingdom of Poland</li>
                  <li>Unified Lithuanian Kingdom</li>
                  <li>The Russian Empire</li>
                  <li>The Spanish Empire</li>
                  <li>Kingdom of the Netherlands</li>
                  <li>Kingdom of the North</li>
                  <li>Finland</li>
                  <li>Greater Slovenian Empire</li>
                  <li>Icelandic Collective</li>
                  <li>Switzerland</li>
                  <li>Roman Empire</li>
                  <li>Golden Khaganate</li>
                  <li>The Northern Triade</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">British Isles Members</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm">
                  <li>
                    <button onClick={() => onNavigate?.('article-wessex-wars')} className="text-accent hover:underline">
                      Kingdom of Wessex
                    </button>
                  </li>
                  <li>Kingdom of Mercia</li>
                  <li>East Anglia</li>
                  <li>Kingdom of Wales</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2 mt-4">Other Regions</h3>
                <ul className="ml-6 list-disc space-y-1 text-sm">
                  <li>Japanese Constitutional Empire</li>
                  <li>New France</li>
                  <li>Zaire</li>
                  <li>Australia</li>
                  <li>Envultis</li>
                  <li>Asnamo Dynasty</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 id="lon-achievements" className="border-b border-border pb-2 text-2xl font-semibold">Key Achievements</h2>
            
            <h3 className="mt-4 text-lg font-semibold">Stabilization of the British Isles</h3>
            <p className="mt-2">
              One of the League's most significant early achievements was its role in stabilizing the <b>British Isles after the English Civil War</b>. Through diplomatic intervention and mediation, the League helped establish lasting peace settlements and recognition of the newly independent English kingdoms.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Diplomatic Framework</h3>
            <p className="mt-2">
              The League established formal protocols and procedures for international negotiation, creating standardized frameworks for treaty negotiations, territorial disputes, and conflict resolution.
            </p>
          </section>

          <section>
            <h2 id="lon-structure" className="border-b border-border pb-2 text-2xl font-semibold">Organization</h2>
            
            <h3 className="mt-4 text-lg font-semibold">Headquarters</h3>
            <p className="mt-2">
              The League maintains its central headquarters in <b>Geneva, Switzerland</b>, a neutral location chosen for its geographic centrality and Switzerland's tradition of diplomatic neutrality.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Leadership</h3>
            <p className="mt-2">
              Founded and initially led by Japanese leadership, the League operates through diplomatic consensus among its member nations. Switzerland, as host nation, plays a special role in facilitating League operations.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Membership</h3>
            <p className="mt-2">
              The League represents a diverse coalition of 26 nations, ranging from established empires to newly independent kingdoms. Member nations maintain their sovereignty while committing to the League's principles of international cooperation and peaceful conflict resolution.
            </p>
          </section>
        </article>
      </div>

      <aside className="sticky top-4 h-fit rounded-lg border border-border bg-card shadow-lg">
        <header className="border-b border-border p-4 font-semibold">League of Nations</header>
        <div className="space-y-4 p-4">
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Category</h4>
            <p>Nations & Factions</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Type</h4>
            <p>International Organization</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Founded</h4>
            <p>28 September 2025</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Founder</h4>
            <p>Japanese Prime Minister & Minister of Defence</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Headquarters</h4>
            <p>Geneva, Switzerland</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Member Nations</h4>
            <p>26</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Mission</h4>
            <p>Counter imperialism; establish diplomatic dialogue</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Key Achievement</h4>
            <p>Stabilized British Isles post-civil war</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
