import { EncyclopediaEntry } from "@/data/encyclopedia";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

interface EntryModalProps {
  entry: EncyclopediaEntry | null;
  open: boolean;
  onClose: () => void;
}

export const EntryModal = ({ entry, open, onClose }: EntryModalProps) => {
  if (!entry) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <div className="flex items-start justify-between gap-3">
            <DialogTitle className="font-serif text-3xl">{entry.title}</DialogTitle>
            <Badge variant="secondary" className="shrink-0 border border-primary/30 bg-primary/10 text-primary">
              {entry.category}
            </Badge>
          </div>
          <DialogDescription className="text-base text-muted-foreground">
            {entry.description}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="max-h-[60vh]">
          <div className="space-y-4 pr-4">
            {entry.date && (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-3">
                <p className="text-sm uppercase tracking-wider text-accent">
                  <span className="font-semibold">Date:</span> {entry.date}
                </p>
              </div>
            )}

            <div className="flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span 
                  key={tag}
                  className="rounded-full border border-border bg-accent/10 px-4 py-1.5 text-sm text-accent-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {entry.content && (
              <div className="prose prose-invert max-w-none rounded-lg border border-border bg-card/50 p-6">
                <p className="text-foreground leading-relaxed">{entry.content}</p>
              </div>
            )}

            {entry.tableData && entry.tableData.length > 0 && (
              <div className="rounded-lg border border-border bg-card/50">
                <div className="border-b border-border bg-card p-4">
                  <h3 className="font-semibold text-foreground">Visitor Records</h3>
                  <p className="text-sm text-muted-foreground">
                    Entries dated between 2025-09-28 and 2025-10-10 (various local time notations)
                  </p>
                </div>
                <div className="overflow-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Date & Time</TableHead>
                        <TableHead>Ledger Note</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {entry.tableData.map((row, idx) => (
                        <TableRow key={idx}>
                          <TableCell className="font-medium">{row.name}</TableCell>
                          <TableCell className="text-muted-foreground">{row.datetime}</TableCell>
                          <TableCell className="text-muted-foreground">{row.note}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
