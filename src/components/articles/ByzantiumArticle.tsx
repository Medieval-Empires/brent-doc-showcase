import { Button } from "@/components/ui/button";
import byzantiumMap from "@/assets/byzantium-map-clean.png";

export function ByzantiumArticle({ onClose, onNavigate }: { onClose: () => void; onNavigate?: (articleId: string) => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <Button variant="outline" onClick={onClose} className="mb-6">← Back to hub</Button>
        
        <article className="space-y-6">
          <div>
            <h1 className="mb-2 font-serif text-4xl font-bold" id="title-byzantium">Byzantine Empire</h1>
            <p className="mb-4 text-lg text-accent">Founded c. 2025</p>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Nations & Factions</p>
              <p className="mt-1 font-medium">Regional power in Greece and Anatolia</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Table of Contents</h4>
            <ol className="ml-5 list-decimal space-y-1 text-sm">
              <li><button onClick={() => document.getElementById('b-origins')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:underline text-left">Origins as Greece</button></li>
              <li><button onClick={() => document.getElementById('b-foundation')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:underline text-left">Foundation</button></li>
              <li><button onClick={() => document.getElementById('b-evolution')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:underline text-left">Evolution and Expansion</button></li>
              <li><button onClick={() => document.getElementById('b-wars')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:underline text-left">Military Campaigns</button></li>
              <li><button onClick={() => document.getElementById('b-tirana')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:underline text-left">Treaty of Tirana</button></li>
              <li><button onClick={() => document.getElementById('b-territory')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:underline text-left">Territory</button></li>
              <li><button onClick={() => document.getElementById('b-government')?.scrollIntoView({ behavior: 'smooth' })} className="text-accent hover:underline text-left">Government</button></li>
            </ol>
          </div>

          <section>
            <h2 id="b-origins" className="border-b border-border pb-2 text-2xl font-semibold">Origins as Greece</h2>
            <p className="mt-4">Byzantium was not always a nation. The territory began as <b>Greece</b>, a regional entity that would undergo significant political transformation.</p>
          </section>

          <section>
            <h2 id="b-foundation" className="border-b border-border pb-2 text-2xl font-semibold">Foundation</h2>
            <p className="mt-4">Greece was founded by{" "}
              <button onClick={() => onNavigate?.('article-apr1corn')} className="text-accent hover:underline font-semibold">
                King apr1corn
              </button>, supported by his close advisors and friends <b>Tsunami</b> and <b>Panos</b>. These three figures would shape the early development of what would become the Byzantine Empire.</p>
          </section>

          <section>
            <h2 id="b-evolution" className="border-b border-border pb-2 text-2xl font-semibold">Evolution and Expansion</h2>
            
            <h3 className="mt-4 text-lg font-semibold">Union with Rome</h3>
            <p className="mt-2">Greece started off in less than modern-day Greece, then joined the <b>Roman Empire under Varo</b>, during which the Greek delegation was elected to the chair of consulship.</p>

            <h3 className="mt-6 text-lg font-semibold">Independence and the Byzantine Identity</h3>
            <p className="mt-2">After the dissolution of the Roman Empire under Varo, Greece gained independence and attempted a union with the Former <b>IBF</b> (Imperial Balkan Federation) in the name <b>Byzantium</b>. This union almost succeeded but stopped abruptly as the partition of the IBF began.</p>

            <h3 className="mt-6 text-lg font-semibold">Territorial Expansion</h3>
            <p className="mt-2">Following the IBF partition, Byzantium colonized <b>western and northwestern Anatolia</b>, forming the local governments of <b>Smyrna</b> and <b>Nicaea</b>. The empire had fluctuating alliances with Rome and the United Nations, switching sides several times.</p>
          </section>

          <section>
            <h2 id="b-wars" className="border-b border-border pb-2 text-2xl font-semibold">Military Campaigns</h2>
            
            <h3 className="mt-4 text-lg font-semibold">Invasion of England</h3>
            <p className="mt-2">Byzantium participated in the invasion of England as part of the broader coalition efforts. This included their involvement in the{" "}
              <button onClick={() => onNavigate?.('article-london')} className="text-accent hover:underline font-semibold">
                Battle of London
              </button>
              {" "}(12 October 2025).</p>

            <h3 className="mt-6 text-lg font-semibold">Coalition Against Wessex</h3>
            <p className="mt-2">Eventually, Byzantium allied with Rome in the coalition against <b>Wessex</b>. The campaign proved unsuccessful, with Byzantine forces suffering significant losses during the Battle of London. <b>Mechanical Mekanik</b>, the Protypourgos (Prime Minister), led Byzantine troops alongside the Knights of Nicosia.</p>

            <h3 className="mt-6 text-lg font-semibold">Aftermath and Isolation</h3>
            <p className="mt-2">Following the defeat and Rome's betrayal—where the Empress withdrew support and engaged in back-channel deals—Byzantium found itself isolated from the outside world.</p>
          </section>

          <section>
            <h2 id="b-tirana" className="border-b border-border pb-2 text-2xl font-semibold">Treaty of Tirana</h2>
            <p className="mt-4">On <b>14 October 2025</b>, Byzantium signed the <b>Treaty of Tirana</b>, acquiring additional territory (the 4th map expansion) and establishing a non-aggression pact with Rome. This treaty marked a new phase in Byzantine diplomatic relations following the turbulent period of coalition warfare.</p>
          </section>

          <section>
            <h2 id="b-territory" className="border-b border-border pb-2 text-2xl font-semibold">Territory</h2>
            <div className="mt-4 rounded-lg border border-border overflow-hidden">
              <img src={byzantiumMap} alt="Map of Byzantine territorial holdings (Morava 02)" className="w-full" />
              <p className="p-3 text-sm text-muted-foreground bg-card/50">
                <em>Territorial map following the Treaty of Tirana (14 October 2025). The purple regions show Byzantine holdings across Greece and Anatolia.</em>
              </p>
            </div>
            <p className="mt-4">Byzantine territory encompasses modern Greece and extends into western and northwestern Anatolia, including the administrative regions of Smyrna and Nicaea. The Treaty of Tirana further expanded Byzantine holdings.</p>
          </section>

          <section>
            <h2 id="b-government" className="border-b border-border pb-2 text-2xl font-semibold">Government</h2>
            
            <h3 className="mt-4 text-lg font-semibold">Leadership</h3>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li><b>Monarch:</b>{" "}
                <button onClick={() => onNavigate?.('article-apr1corn')} className="text-accent hover:underline font-semibold">
                  King apr1corn
                </button>{" "}(founder)</li>
              <li><b>Advisors:</b> Tsunami, Panos</li>
              <li><b>Protypourgos (Prime Minister):</b> Mechanical Mekanik</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Administrative Structure</h3>
            <p className="mt-2">The empire maintains local governments in key regions including Smyrna and Nicaea, allowing for decentralized administration of its Anatolian territories.</p>

            <h3 className="mt-6 text-lg font-semibold">Population</h3>
            <p className="mt-2"><b>Member count:</b> 31</p>
          </section>
        </article>
      </div>

      <aside className="sticky top-4 h-fit rounded-lg border border-border bg-card shadow-lg">
        <header className="border-b border-border p-4 font-semibold">Byzantine Empire</header>
        <div className="space-y-4 p-4">
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Category</h4>
            <p>Nations & Factions</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Founded</h4>
            <p>c. 2025 (as Greece)</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Capital Region</h4>
            <p>Greece</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Territories</h4>
            <p>Greece, Smyrna, Nicaea, Western & Northwestern Anatolia</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Government</h4>
            <p>Monarchy</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Monarch</h4>
            <button onClick={() => onNavigate?.('article-apr1corn')} className="text-accent hover:underline">
              King apr1corn
            </button>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Members</h4>
            <p>31</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Key Treaties</h4>
            <p>Treaty of Tirana (14 Oct 2025)</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
