import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";

export function LondonArticle({ onClose, onNavigate }: { onClose: () => void; onNavigate?: (articleId: string) => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <Button variant="outline" onClick={onClose} className="mb-6">← Back to hub</Button>
        
        <article className="space-y-6">
          <div>
            <h1 className="mb-2 font-serif text-4xl font-bold" id="title-london">Battle of London</h1>
            <p className="mb-4 text-lg text-accent">12 October 2025</p>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Wars & Battles</p>
              <p className="mt-1 font-medium">Wessex victory; coalition retreat in chaos</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Table of Contents</h4>
            <ol className="ml-5 list-decimal space-y-1 text-sm">
              <li><a href="#l-bg" className="text-accent hover:underline">Background</a></li>
              <li><a href="#l-forces" className="text-accent hover:underline">Opposing forces</a></li>
              <li><a href="#l-prelude" className="text-accent hover:underline">Prelude</a></li>
              <li><a href="#l-battle" className="text-accent hover:underline">Battle</a></li>
              <li><a href="#l-strength" className="text-accent hover:underline">Strength</a></li>
              <li><a href="#l-cas" className="text-accent hover:underline">Casualties</a></li>
              <li><a href="#l-acc" className="text-accent hover:underline">Personal accounts</a></li>
              <li><a href="#l-after" className="text-accent hover:underline">Aftermath</a></li>
              <li><a href="#l-notes" className="text-accent hover:underline">Notes</a></li>
              <li><a href="#l-source" className="text-accent hover:underline">Primary Source Excerpt</a></li>
            </ol>
          </div>

          <section>
            <h2 id="l-bg" className="border-b border-border pb-2 text-2xl font-semibold">Background</h2>
            <p className="mt-4"><b>Taboritstky</b> rallied and coordinated a coalition to depose Wessex control of England, bringing together forces from Byzantium, Rome, France, Austria, Denmark, and the Knights of Nicosia. <b>Vanstav</b> led the operational effort for the English Government in Exile.</p>
          </section>

          <section>
            <h2 id="l-forces" className="border-b border-border pb-2 text-2xl font-semibold">Opposing forces</h2>
            <h3 className="mt-4 text-lg font-semibold">Coalition of the Empire (attackers)</h3>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li><b>Overall (field):</b> Vanstav</li>
              <li><b>Byzantines & Knights of Nicosia:</b> Mekanik</li>
              <li><b>Romans:</b> Taboritstky; Marci</li>
              <li><b>France:</b> DSK_Sayan</li>
              <li><b>Austria:</b> Konsti (ordered first retreat)</li>
              <li><b>Denmark:</b> 3-man detachment</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Wessex and allies (defenders)</h3>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li><b>Wessex:</b> Will</li>
              <li><b>International Guild Coalition (IGC):</b> Fintukani</li>
              <li><b>Order of the Black Lion:</b> Doc</li>
              <li><b>Iceland:</b> Clock</li>
            </ul>
          </section>

          <section>
            <h2 id="l-prelude" className="border-b border-border pb-2 text-2xl font-semibold">Prelude</h2>
            <p className="mt-4">Coalition forces staged on the continent and advanced via Brittany. Wessex hardened London's approaches and coordinated rapid-response formations.</p>
          </section>

          <section>
            <h2 id="l-battle" className="border-b border-border pb-2 text-2xl font-semibold">Battle</h2>
            <p className="mt-4">The main assault opened with the <b>Austrian</b> and <b>French</b> vanguards, followed by the <b>Romans</b> with the <b>Knights of Nicosia</b>, and finally the <b>Byzantines</b> under Mekanik. Initial pushes were repelled by arrow fire until a <b>TNT trap detonated</b>, breaching the wall.</p>
            <p className="mt-4"><b>Will</b> — defending atop the wall — fell into the melee below. Despite the fall, he fought on inside the city and reportedly <b>killed sixteen attackers</b> before being forced back.</p>
            <p className="mt-4">The <b>French contingent</b> suffered <b>very heavy losses</b>, losing <b>well over half</b> of its deployed strength; Austrian coordination faltered as pressure mounted. As the line collapsed, the withdrawal order propagated along the coalition front.</p>
            <p className="mt-4">Analyses from surviving commanders indicate that French losses were exacerbated by <b>low discipline and inadequate preparedness</b>. <b>Austrian formations</b> were later identified as the primary cause of <b>friendly fire incidents</b>, reportedly killing several French soldiers and <b>every member of the Nicosian contingent</b>. <span className="text-sm text-muted-foreground">— Attributed to Mechanical Mekanik's after-action correspondence.</span></p>
            <div className="mt-4 rounded-lg border-l-4 border-border bg-card/50 p-4">
              <em>Post-battle, Mekanik learned of the Empress of Rome's betrayal — withdrawn support and back-channel deals — further eroding coalition trust.</em>
            </div>
          </section>

          <section>
            <h2 id="l-strength" className="border-b border-border pb-2 text-2xl font-semibold">Strength</h2>
            <div className="mt-4 overflow-auto rounded-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Coalition of the Empire (attackers)</TableHead>
                    <TableHead>Troop count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Austrian Empire</TableCell>
                    <TableCell>10–15</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Kingdom of France</TableCell>
                    <TableCell>15–20 <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs">est.</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Byzantine Empire</TableCell>
                    <TableCell>5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Roman Empire</TableCell>
                    <TableCell>3–5 <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs">est.</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Order of the Knights of Nicosia</TableCell>
                    <TableCell>2–4 <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-xs">est.</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Kingdom of Denmark</TableCell>
                    <TableCell>3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>English Government in Exile</TableCell>
                    <TableCell>Command staff only</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell className="font-semibold">Total strength</TableCell>
                    <TableCell className="font-semibold">≈ 35–40</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>

            <div className="mt-6 overflow-auto rounded-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Wessex and allies (defenders)</TableHead>
                    <TableHead>Troop count</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Kingdom of Wessex</TableCell>
                    <TableCell>6</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>International Guild Coalition (IGC)</TableCell>
                    <TableCell>3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Order of the Black Lion</TableCell>
                    <TableCell>3</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Iceland</TableCell>
                    <TableCell>4</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell className="font-semibold">Total defending strength</TableCell>
                    <TableCell className="font-semibold">16</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </div>

            <p className="mt-4 text-sm text-muted-foreground italic"><em>Force comparison:</em> Coalition ≈ <b>2.3 : 1</b> Defenders (reconciled totals).</p>
          </section>

          <section>
            <h2 id="l-cas" className="border-b border-border pb-2 text-2xl font-semibold">Casualties</h2>
            <div className="mt-4 overflow-auto rounded-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Side</TableHead>
                    <TableHead>Casualties</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Coalition</TableCell>
                    <TableCell>≈ 25–35 killed (incl. 3/5 Byzantines; 10–15 French; 5 Austrians; nearly all Romans except Sergey)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Wessex and allies</TableCell>
                    <TableCell>≈ 3–10 killed or wounded</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 id="l-acc" className="border-b border-border pb-2 text-2xl font-semibold">Personal accounts</h2>
            <blockquote className="mt-4 border-l-4 border-primary bg-primary/5 p-4 italic">
              "It was not my war. I was pulled in by promises from the Empress of Rome — promises that died the moment we landed. I regret being there, but not the battle itself. It was… interesting."
              <div className="mt-2 text-sm not-italic text-muted-foreground">— <b>Mechanical Mekanik</b>, Byzantine field commander (post-battle correspondence)</div>
            </blockquote>

            <blockquote className="mt-6 border-l-4 border-primary bg-primary/5 p-4 italic">
              "I don't know what happened, but it was fun."
              <div className="mt-2 text-sm not-italic text-muted-foreground">— <b>DaKaeyman</b>, elite soldier from Zaire fighting with the IGC; credited with killing ten attackers</div>
            </blockquote>
          </section>

          <section>
            <h2 id="l-after" className="border-b border-border pb-2 text-2xl font-semibold">Aftermath</h2>
            <p className="mt-4">Austrian withdrawal triggered collapse of the remaining coalition frontage and a disorderly rout toward the coast. Wessex retained control of London and environs; Normandy recognition followed.</p>
          </section>

          <section>
            <h2 id="l-notes" className="border-b border-border pb-2 text-2xl font-semibold">Notes</h2>
            <ul className="mt-4 ml-6 list-disc space-y-2 text-sm text-muted-foreground">
              <li>Ranges reflect participants' field estimates; Danes (3) and Austrian range (10–15) per latest reconciliation.</li>
              <li>Friendly fire attribution per Mekanik's after-action notes.</li>
              <li><em>Some field reports alleged that Wessex soldiers employed modified or "cheated" items during the defense; no evidence has been verified, and the claim remains disputed among participants.</em></li>
            </ul>
          </section>

          <section>
            <h2 id="l-source" className="border-b border-border pb-2 text-2xl font-semibold">Primary Source Excerpt — Taboritstky's Account (Coalition Perspective)</h2>
            <blockquote className="mt-4 space-y-4 border-l-4 border-border bg-card/50 p-4">
              <p>In the days before the battle, Will coordinated closely with Fintukani, leader of a mercenary group, using the obscurity of permissions to launch raids on Australia, Rome, and France. By around the 10th, a large coalition formed and the odds looked heavily in our favor — until leadership faltered.</p>
              <p>Vanstav moved to take charge with Australia's leader. They chose a time, drew arrows on a map, and decided no further planning was necessary — a mistake given our supposed advantage. At 3 PM on October 12th, Vanstav told everyone to join and invade. Poor communication meant many coalition members never arrived, and some Austrians became confused and <em>teamkilled</em>.</p>
              <p>The charge went ahead and quickly turned into a mess. At first it looked like 1:1 trades, but several Wessex members took most of their team's kills using <em>notch apples</em>, with some <em>using illegal weapons</em> as well. Coordination collapsed; Austria began to pull out, followed by other nations. It wasn't a forced rout so much as the inevitable failure of a badly planned operation. Despite Will being killed, the war ended up being nullified.</p>
              <p>The war had barely been approved by moderators; few rules were followed and no clear outcome had been decided. Wessex then claimed decisive victory against the coalition, attempting to cast French and land gains as proof the battle was won by either side. It was not. Europe wanted peace, not more conflict; disputes were waning, and troublesome rulebreakers were muted for a time.</p>
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground italic"><em>Editor's note: This passage presents Taboritstky's personal interpretation of events and is not universally accepted by other participants.</em></p>
          </section>
        </article>
      </div>

      <aside className="sticky top-4 h-fit rounded-lg border border-border bg-card shadow-lg">
        <header className="border-b border-border p-4 font-semibold">Battle of London</header>
        <div className="space-y-4 p-4">
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Category</h4>
            <p>Wars & Battles</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Date</h4>
            <p>12 October 2025</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Location</h4>
            <p>London, Kingdom of Wessex</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Result</h4>
            <p><b>Wessex victory</b> — coalition retreat in chaos</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Belligerents</h4>
            <ul className="space-y-1 text-sm">
              <li><b>Coalition:</b> Byzantines; Romans; France; Austria; Denmark; Knights of Nicosia; English Gov. in Exile</li>
              <li><b>Defenders:</b> Wessex; IGC; Order of the Black Lion; Iceland</li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
}
