import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function PerthArticle({ onClose, onNavigate }: { onClose: () => void; onNavigate?: (articleId: string) => void }) {
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <Button variant="outline" onClick={onClose} className="mb-6">← Back to hub</Button>
        
        <article className="space-y-6">
          <div>
            <h1 className="mb-2 font-serif text-4xl font-bold" id="title-perth">Battle of Perth</h1>
            <p className="mb-4 text-lg text-accent">7 October 2025</p>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Wars & Battles</p>
              <p className="mt-1 font-medium">Wessex–IGC victory; Australia exits war</p>
            </div>
          </div>


          <section>
            <h2 id="p-forces" className="border-b border-border pb-2 text-2xl font-semibold">Opposing forces</h2>
            
            <h3 className="mt-4 text-lg font-semibold">Wessex and IGC</h3>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li><b>Command:</b> Will (Wessex); Kingslayer Khedas (IGC); <b>Fintukani</b> (IGC overall coordination)</li>
              <li><b>Notables:</b> erikas1234565 (Wessex)</li>
            </ul>

            <h3 className="mt-6 text-lg font-semibold">Opposition</h3>
            <ul className="mt-2 ml-6 list-disc space-y-1">
              <li><b>Australia:</b> 5 — <em>Commander:</em> <b>Ashesofaraven</b></li>
              <li><b>Khaganate:</b> 5 — <em>Commander:</em> <b>Xenov</b></li>
              <li><b>Rome:</b> Marci (arrived late, reportedly via Xenov)</li>
              <li><b>Siege kit:</b> ad-hoc catapult</li>
            </ul>
          </section>

          <section>
            <h2 id="p-prelude" className="border-b border-border pb-2 text-2xl font-semibold">Prelude</h2>
            <p className="mt-4">With war declared a day prior, the expedition moved rapidly by sea and made contact near Perth's approaches.</p>
          </section>

          <section>
            <h2 id="p-battle" className="border-b border-border pb-2 text-2xl font-semibold">Battle</h2>
            <p className="mt-4">The Australians and Khaganate were attacked <b>head-on from the west</b> by the combined <b>Wessex and IGC</b> forces, <b>pushing them inward</b>. After all soldiers from the Khaganate and Australia — including <b>Xenov</b> and <b>Ashesofaraven</b> — were killed, the allied force <b>chased Marci to the ocean</b>, where he subsequently escaped by sea.</p>
            <p className="mt-4"><b>Turning point:</b> <b>erikas1234565</b> reportedly <b>killed Xenov</b>, shattering enemy morale. Two Wessex/IGC soldiers fell in the fight.</p>
          </section>

          <section>
            <h2 id="p-strength" className="border-b border-border pb-2 text-2xl font-semibold">Strength</h2>
            <div className="mt-4 overflow-auto rounded-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Side</TableHead>
                    <TableHead>Composition</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Wessex & IGC</TableCell>
                    <TableCell>Expeditionary detachment (headcount undisclosed)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Opposition</TableCell>
                    <TableCell>Australia (5); Khaganate (5); Rome (Marci, late); catapult</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 id="p-cas" className="border-b border-border pb-2 text-2xl font-semibold">Casualties</h2>
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
                    <TableCell className="font-medium">Australia & Khaganate</TableCell>
                    <TableCell>10 killed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wessex & IGC</TableCell>
                    <TableCell>2 killed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rome</TableCell>
                    <TableCell>Marci escaped by sea</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 id="p-after" className="border-b border-border pb-2 text-2xl font-semibold">Aftermath</h2>
            <p className="mt-4">
              <b>Australia withdrew from further hostilities.</b> The raid succeeded in securing western holdings and demonstrated the effectiveness of Wessex–IGC coordination. This engagement set the stage for subsequent operations at{" "}
              <button onClick={() => onNavigate?.('article-rome')} className="text-accent hover:underline font-semibold">
                Rome
              </button>
              {" "}and{" "}
              <button onClick={() => onNavigate?.('article-london')} className="text-accent hover:underline font-semibold">
                London
              </button>
              .
            </p>
          </section>
        </article>
      </div>

      <aside className="sticky top-4 h-fit rounded-lg border border-border bg-card shadow-lg">
        <header className="border-b border-border p-4 font-semibold">Battle of Perth</header>
        <div className="space-y-4 p-4">
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Category</h4>
            <p>Wars & Battles</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Date</h4>
            <p>7 October 2025</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Location</h4>
            <p>Perth, Australia</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Result</h4>
            <p><b>Wessex–IGC victory</b> — Australia exits war</p>
          </div>
        </div>
      </aside>
    </div>
  );
}
