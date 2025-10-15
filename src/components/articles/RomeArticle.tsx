import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function RomeArticle({ onClose, onNavigate }: { onClose: () => void; onNavigate?: (articleId: string) => void }) {
  return (
    <TooltipProvider>
    <div className="grid gap-6 lg:grid-cols-[1fr_340px]">
      <div>
        <Button variant="outline" onClick={onClose} className="mb-6">← Back to hub</Button>
        
        <article className="space-y-6">
          <div>
            <h1 className="mb-2 font-serif text-4xl font-bold" id="title-rome">The Skirmish of Rome</h1>
            <p className="mb-4 text-lg text-accent">7 October 2025</p>
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Wars & Battles</p>
              <p className="mt-1 font-medium">Minor Roman defensive success; IGC withdrew</p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card/50 p-6">
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Table of Contents</h4>
            <ol className="ml-5 list-decimal space-y-1 text-sm">
              <li><a href="#r-context" className="text-accent hover:underline">Context</a></li>
              <li><a href="#r-prelude" className="text-accent hover:underline">Approach</a></li>
              <li><a href="#r-battle" className="text-accent hover:underline">Skirmish</a></li>
              <li><a href="#r-cas" className="text-accent hover:underline">Casualties</a></li>
              <li><a href="#r-outcome" className="text-accent hover:underline">Outcome</a></li>
            </ol>
          </div>

          <section>
            <h2 id="r-context" className="border-b border-border pb-2 text-2xl font-semibold">Context</h2>
            <p className="mt-4">
              Approximately <b>two hours</b> after the{" "}
              <button onClick={() => onNavigate?.('article-perth')} className="text-accent hover:underline font-semibold">
                raid on Perth
              </button>
              , an IGC detachment sailed to Rome. The stated aim was to "deliver a warrant" and demand audience with Roman leadership. Diplomatic cover masked what became a brief but violent encounter.
            </p>
          </section>

          <section>
            <h2 id="r-prelude" className="border-b border-border pb-2 text-2xl font-semibold">Approach</h2>
            <p className="mt-4">The IGC arrived by sea, opened brief negotiations at the walls, and tensions escalated when demands for surrender and access were rejected.</p>
          </section>

          <section>
            <h2 id="r-battle" className="border-b border-border pb-2 text-2xl font-semibold">Skirmish</h2>
            <p className="mt-4">
              <Tooltip>
                <TooltipTrigger asChild>
                  <b className="cursor-help underline decoration-dotted">Marci</b>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-xs">Most information is derived from biased biographies</p>
                </TooltipContent>
              </Tooltip>
              {" "}initiated combat after talks broke down, striking first outside the castle walls. A short exchange followed; the IGC line held briefly but could not force entry.
            </p>
            <p className="mt-4 italic">During the clash, the Supreme Leader of Zaire,{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <b className="cursor-help underline decoration-dotted">Benijoe</b>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-xs">Most information is derived from biased biographies</p>
                </TooltipContent>
              </Tooltip>
              {" "}(alias{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <b className="cursor-help underline decoration-dotted">TitledMoon</b>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs text-xs">Most information is derived from biased biographies</p>
                </TooltipContent>
              </Tooltip>
              ), fell in battle following the initial surprise strike by Roman defenders.
            </p>
          </section>

          <section>
            <h2 id="r-cas" className="border-b border-border pb-2 text-2xl font-semibold">Casualties</h2>
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
                    <TableCell className="font-medium">IGC</TableCell>
                    <TableCell>2 killed <span className="text-sm text-muted-foreground">(incl. Benijoe / TitledMoon)</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Rome</TableCell>
                    <TableCell>1 killed</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </section>

          <section>
            <h2 id="r-outcome" className="border-b border-border pb-2 text-2xl font-semibold">Outcome</h2>
            <p className="mt-4">
              <b>Minor Roman defensive success.</b> The IGC task force withdrew to sea to avoid entrapment. The action is widely considered a small incident compared with{" "}
              <button onClick={() => onNavigate?.('article-perth')} className="text-accent hover:underline font-semibold">
                Perth
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
        <header className="border-b border-border p-4 font-semibold">The Skirmish of Rome</header>
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
            <p>Rome</p>
          </div>
          <div>
            <h4 className="mb-2 text-xs uppercase tracking-wider text-accent">Result</h4>
            <p>Minor Roman defensive success; IGC withdrew</p>
          </div>
        </div>
      </aside>
    </div>
    </TooltipProvider>
  );
}
