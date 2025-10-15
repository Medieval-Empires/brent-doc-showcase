import { Button } from "@/components/ui/button";

export function IGCArticle({ onClose, onNavigate }: { onClose: () => void; onNavigate?: (articleId: string) => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <Button variant="outline" onClick={onClose} className="mb-6">← Back to hub</Button>
        
        <article className="space-y-6">
          <div>
            <h1 className="mb-2 font-serif text-4xl font-bold" id="title-igc">International Guild of Champions</h1>
            <p className="mb-4 text-lg text-accent">Founded 30 September 2025</p>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Nations & Factions — Mercenary Company</p>
              <p className="mt-1 font-medium">Free agent mercenary company operating across Europe</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Table of Contents</h4>
            <ol className="ml-5 list-decimal space-y-1 text-sm">
              <li><a href="#igc-creation" className="text-accent hover:underline">Creation</a></li>
              <li><a href="#igc-operations" className="text-accent hover:underline">Operations</a></li>
              <li><a href="#igc-history" className="text-accent hover:underline">Military History</a></li>
              <li><a href="#igc-members" className="text-accent hover:underline">Notable Members</a></li>
              <li><a href="#igc-structure" className="text-accent hover:underline">Structure</a></li>
            </ol>
          </div>

          <section>
            <h2 id="igc-creation" className="border-b border-border pb-2 text-2xl font-semibold">Creation</h2>
            <p className="mt-4">
              The <b>International Guild of Champions (IGC)</b> was founded on <b>30 September 2025</b> by <b>Fintukani</b>, Prince of Lithuania, and his right-hand man <b>Kona</b>. The organization was established as a professional mercenary company, defining themselves as champions and free agents operating across European theaters.
            </p>
            <p className="mt-4">
              The name reflects their self-identification: "champions" representing elite warriors available for hire, operating on a mercenary basis rather than serving a single sovereign power.
            </p>
          </section>

          <section>
            <h2 id="igc-operations" className="border-b border-border pb-2 text-2xl font-semibold">Operations</h2>
            <p className="mt-4">
              The IGC operates as free agents based in <b>Lithuania</b>, specifically with their headquarters in <b>Liepāja</b>. While maintaining their Lithuanian base of operations, the company has established outposts in strategic locations including:
            </p>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li><b>Wessex</b></li>
              <li><b>Zaire</b></li>
              <li>Other undisclosed locations across Europe</li>
            </ul>
            <p className="mt-4">
              The IGC operates mostly in <b>Europe</b>, offering their military services to various powers and causes across the continent.
            </p>
          </section>

          <section>
            <h2 id="igc-history" className="border-b border-border pb-2 text-2xl font-semibold">Military History</h2>
            
            <h3 className="mt-4 text-lg font-semibold">English Independence Campaign</h3>
            <p className="mt-2">
              The IGC played a crucial role in helping the English states gain independence by marching to London. This campaign established the company's reputation as a formidable military force capable of strategic operations.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Battle of Perth (7 October 2025)</h3>
            <p className="mt-2">
              The IGC fought alongside Wessex in the{" "}
              <button onClick={() => onNavigate?.('article-perth')} className="text-accent hover:underline font-semibold">
                Battle of Perth
              </button>
              , executing a decisive raid on Australia's west coast. The engagement demonstrated the effectiveness of IGC-Wessex coordination and resulted in a clear victory that forced Australia's withdrawal from the broader conflict.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Skirmish of Rome (7 October 2025)</h3>
            <p className="mt-2">
              Approximately two hours after Perth, an IGC detachment sailed to Rome in the{" "}
              <button onClick={() => onNavigate?.('article-rome')} className="text-accent hover:underline font-semibold">
                Skirmish of Rome
              </button>
              . The brief encounter outside Rome's walls resulted in the death of Benijoe (TitledMoon), Supreme Leader of Zaire, following a surprise strike by Roman defenders. The IGC withdrew after the unsuccessful engagement.
            </p>

            <h3 className="mt-6 text-lg font-semibold">Battle of London (12 October 2025)</h3>
            <p className="mt-2">
              The IGC's most notable engagement came at the{" "}
              <button onClick={() => onNavigate?.('article-london')} className="text-accent hover:underline font-semibold">
                Battle of London
              </button>
              , where they defended the Wessex capital against a massive coalition assault. During this battle, IGC soldiers distinguished themselves through exceptional combat performance, with individual members achieving remarkable kill counts.
            </p>
          </section>

          <section>
            <h2 id="igc-members" className="border-b border-border pb-2 text-2xl font-semibold">Notable Members</h2>
            
            <h3 className="mt-4 text-lg font-semibold">Leadership</h3>
            <ul className="mt-2 ml-6 list-disc space-y-2">
              <li><b>Fintukani</b> — Company leader and founder; Prince of Lithuania</li>
              <li><b>Kona</b> — Second in command; co-founder</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Elite Warriors</h3>
            <ul className="mt-2 ml-6 list-disc space-y-2">
              <li><b>Ozryn</b> — The elite warrior of Zaire; Commander of the 1st Squad</li>
              <li><b>Khedas</b> (aka "the Kingslayer") — Distinguished field commander</li>
              <li><b>DeKayeman</b> — Best known for his 10 kills in the Battle of London</li>
              <li><b>Zyron</b> — Notable combatant</li>
              <li><b>Benijoe (TitledMoon)</b> — Supreme Leader of Zaire; fell during the Skirmish of Rome</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Soldiers from Lithuania</h3>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li>Drip</li>
              <li>Scoob</li>
              <li>Muolis</li>
              <li>Soshuko</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Allied Warriors</h3>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li><b>RS</b> — The French warrior</li>
            </ul>
          </section>

          <section>
            <h2 id="igc-structure" className="border-b border-border pb-2 text-2xl font-semibold">Structure</h2>
            <p className="mt-4">
              The IGC operates with a clear military hierarchy:
            </p>
            <ul className="mt-2 ml-6 list-disc space-y-2">
              <li><b>Company Leader:</b> Fintukani (overall command and strategic direction)</li>
              <li><b>Second in Command:</b> Kona (operational support and coordination)</li>
              <li><b>Squad Commanders:</b> Officers like Ozryn lead specialized units</li>
              <li><b>Elite Warriors:</b> Highly skilled individuals like Khedas and DK</li>
              <li><b>Regular Soldiers:</b> Professional fighters from various backgrounds</li>
            </ul>
            <p className="mt-4">
              The company maintains a flexible structure that allows them to deploy forces as independent units or integrate with allied armies, as demonstrated in their operations with Wessex.
            </p>
          </section>
        </article>
      </div>

      <aside className="sticky top-4 h-fit rounded-lg border border-border bg-card shadow-lg">
        <header className="border-b border-border p-4 font-semibold">IGC</header>
        <div className="space-y-4 p-4">
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Category</h4>
            <p>Nations & Factions</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Type</h4>
            <p>Mercenary Company</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Founded</h4>
            <p>30 September 2025</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Headquarters</h4>
            <p>Liepāja, Lithuania</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Outposts</h4>
            <p>Wessex, Zaire, various European locations</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Leader</h4>
            <p>Fintukani (Prince of Lithuania)</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Second in Command</h4>
            <p>Kona</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Major Engagements</h4>
            <p>English Independence, Battle of Perth, Skirmish of Rome, Battle of London</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
