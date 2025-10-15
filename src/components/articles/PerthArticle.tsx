import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function PerthArticle({ onClose }: { onClose: () => void }) {
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

          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Table of Contents</h4>
            <ol className="ml-5 list-decimal space-y-1 text-sm">
              <li><a href="#p-bg" className="text-accent hover:underline">Background</a></li>
              <li><a href="#p-raid" className="text-accent hover:underline">The Raid</a></li>
              <li><a href="#p-strength" className="text-accent hover:underline">Strength</a></li>
              <li><a href="#p-cas" className="text-accent hover:underline">Casualties</a></li>
              <li><a href="#p-after" className="text-accent hover:underline">Aftermath</a></li>
            </ol>
          </div>

          <section>
            <h2 id="p-bg" className="border-b border-border pb-2 text-2xl font-semibold">Background</h2>
            <p className="mt-4">Following raids by the Kingdom of Wessex and the International Guild Coalition (IGC) targeting Australian, Roman, and French holdings, an informal coalition assembled in response. Initial skirmishes escalated tensions, prompting direct action by <b>Will</b> (Wessex) and <b>Fintukani</b> (IGC leadership).</p>
          </section>

          <section>
            <h2 id="p-raid" className="border-b border-border pb-2 text-2xl font-semibold">The Raid</h2>
            <p className="mt-4">A joint Wessex–IGC force arrived at Perth on the west coast. The raid began with an organized push against Australian defenders <b>Xenov</b>, <b>Ashesofaraven</b>, <b>erikas1234565</b>, and <b>Khedas</b>. The attackers advanced quickly, overwhelming local resistance.</p>
            <p className="mt-4">Despite numerical inferiority, the Wessex–IGC force coordinated closely, exploiting defensive gaps and achieving a swift tactical success. Australian forces withdrew, and the territory fell under temporary Wessex control.</p>
          </section>

          <section>
            <h2 id="p-strength" className="border-b border-border pb-2 text-2xl font-semibold">Strength</h2>
            <div className="mt-4 overflow-auto rounded-lg border border-border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Side</TableHead>
                    <TableHead>Forces</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Wessex & IGC (attackers)</TableCell>
                    <TableCell>~6 combatants</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Australia & allies (defenders)</TableCell>
                    <TableCell>~4 combatants</TableCell>
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
                    <TableCell className="font-medium">Wessex & IGC</TableCell>
                    <TableCell>~1 killed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Australia & allies</TableCell>
                    <TableCell>~4 killed</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 id="p-after" className="border-b border-border pb-2 text-2xl font-semibold">Aftermath</h2>
            <p className="mt-4"><b>Australia withdrew from further hostilities.</b> The raid succeeded in securing western holdings and demonstrated the effectiveness of Wessex–IGC coordination. This engagement set the stage for subsequent operations at Rome and London.</p>
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
