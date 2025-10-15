import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface BrentArticleProps {
  onClose: () => void;
}

const visitorData = [
  { name: "Markanne", datetime: "09 Oct 2025 01:05", note: "Logged for special massage." },
  { name: "Markanne_Femboy_3", datetime: "2025/10/09 15:53", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_2", datetime: "2025/09/28 09:52", note: "Logged for special massage." },
  { name: "Batz", datetime: "2025-10-06 05:22:30 UTC", note: "Overnight stay logged." },
  { name: "Sergey", datetime: "2025/10/02 23:08", note: "Logged for special massage." },
  { name: "Markanne_Femboy_4", datetime: "2025/10/04 09:58", note: "Recorded in visitor ledger." },
  { name: "Xenov_Loyalist_5", datetime: "2025-10-04 21:04:01 UTC", note: "Logged for special massage." },
  { name: "Markanne_Femboy_15", datetime: "2025/10/09 09:32", note: "Departed same evening." },
  { name: "Markanne_Femboy_17", datetime: "04 Oct 2025 04:47", note: "Departed same evening." },
  { name: "Marci", datetime: "06 Oct 2025 15:06", note: "Departed same evening." },
  { name: "Xenov", datetime: "2025-10-06 20:11:02 UTC", note: "Observed at north camp." },
  { name: "Markanne_Femboy_14", datetime: "2025-10-04 17:20:20 UTC", note: "Overnight stay logged." },
  { name: "Fintukani", datetime: "2025/10/07 10:25", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_2", datetime: "2025/10/03 05:57", note: "Overnight stay logged." },
  { name: "Markanne", datetime: "2025-10-09 19:39:51 UTC", note: "Logged for special massage." },
  { name: "Konsti", datetime: "2025-10-06 09:58:26 UTC", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_5", datetime: "05 Oct 2025 04:24", note: "Observed at north camp." },
  { name: "Mekanik", datetime: "2025-09-28 01:27:50 UTC", note: "Arrived via private brigg." },
  { name: "Xenov_Loyalist_3", datetime: "2025/09/29 06:42", note: "Logged for special massage." },
  { name: "Xenov_Loyalist_3", datetime: "2025-10-08 03:28:02 UTC", note: "Observed at north camp." },
  { name: "Vanstav", datetime: "04 Oct 2025 11:53", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_10", datetime: "2025-09-28 02:02:45 UTC", note: "Overnight stay logged." },
  { name: "Fazerkaz", datetime: "02 Oct 2025 08:53", note: "Logged for special massage." },
  { name: "erikas1234565", datetime: "2025-10-06 17:42:21 UTC", note: "Arrived via private brigg." },
  { name: "Batz", datetime: "02 Oct 2025 03:59", note: "Overnight stay logged." },
  { name: "Xenov_Loyalist_2", datetime: "2025-09-28 11:43:41 UTC", note: "Recorded in visitor ledger." },
  { name: "Markanne_Femboy_11", datetime: "2025-09-29 07:56:30 UTC", note: "Observed at north camp." },
  { name: "Taboritstky", datetime: "2025-10-04 18:42:41 UTC", note: "Observed at north camp." },
  { name: "Markanne_Femboy_15", datetime: "29 Sep 2025 08:10", note: "Recorded in visitor ledger." },
  { name: "Markanne_Femboy_1", datetime: "2025/10/06 23:13", note: "Arrived via private brigg." },
  { name: "Batz", datetime: "2025/09/30 12:48", note: "Departed same evening." },
  { name: "Doncraft", datetime: "08 Oct 2025 13:35", note: "Recorded in visitor ledger." },
  { name: "Markanne_Femboy_14", datetime: "2025-10-06 20:47:57 UTC", note: "Arrived via private brigg." },
  { name: "Fazerkaz", datetime: "29 Sep 2025 10:36", note: "Logged for special massage." },
  { name: "Markanne_Femboy_8", datetime: "2025-10-03 21:00:54 UTC", note: "Departed same evening." },
  { name: "Markanne_Femboy_4", datetime: "2025-10-09 12:20:31 UTC", note: "Arrived via private brigg." },
  { name: "Konsti", datetime: "2025-10-08 20:47:18 UTC", note: "Arrived via private brigg." },
  { name: "Xenov_Loyalist_1", datetime: "2025-10-10 12:18:07 UTC", note: "Departed same evening." },
  { name: "Khedas", datetime: "2025-10-08 08:14:27 UTC", note: "Arrived via private brigg." },
  { name: "Kona", datetime: "03 Oct 2025 05:31", note: "Logged for special massage." },
  { name: "Mops", datetime: "2025-10-06 00:04:14 UTC", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_15", datetime: "06 Oct 2025 06:05", note: "Observed at north camp." },
  { name: "Markanne_Femboy_10", datetime: "2025-10-10 02:29:37 UTC", note: "Recorded in visitor ledger." },
  { name: "Xenov_Loyalist_2", datetime: "2025-10-04 01:03:25 UTC", note: "Departed same evening." },
  { name: "Marci", datetime: "2025/09/30 22:23", note: "Departed same evening." },
  { name: "Markanne_Femboy_15", datetime: "2025/10/01 08:24", note: "Departed same evening." },
  { name: "Fazerkaz", datetime: "2025-10-01 12:10:34 UTC", note: "Overnight stay logged." },
  { name: "Markanne", datetime: "04 Oct 2025 16:39", note: "Logged for special massage." },
  { name: "DSK_Sayan", datetime: "2025/10/05 20:20", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_13", datetime: "03 Oct 2025 10:21", note: "Recorded in visitor ledger." },
  { name: "Xenov_Loyalist_4", datetime: "05 Oct 2025 18:02", note: "Observed at north camp." },
  { name: "Xenov_Loyalist_2", datetime: "2025/10/09 04:04", note: "Recorded in visitor ledger." },
  { name: "Kupfer", datetime: "2025-09-29 22:30:56 UTC", note: "Overnight stay logged." },
  { name: "Kupfer", datetime: "04 Oct 2025 00:50", note: "Recorded in visitor ledger." },
  { name: "Kingslayer Khedas", datetime: "2025/10/10 07:03", note: "Logged for special massage." },
  { name: "Vanstav", datetime: "04 Oct 2025 08:25", note: "Observed at north camp." },
  { name: "Kingslayer Khedas", datetime: "2025-10-10 20:47:25 UTC", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_5", datetime: "2025-10-08 16:01:47 UTC", note: "Observed at north camp." },
  { name: "Markanne_Femboy_9", datetime: "2025-09-29 20:13:58 UTC", note: "Observed at north camp." },
  { name: "DaKaeyman", datetime: "2025/10/02 11:52", note: "Observed at north camp." },
  { name: "Mops", datetime: "10 Oct 2025 15:04", note: "Logged for special massage." },
  { name: "Doncraft", datetime: "2025-10-10 13:57:07 UTC", note: "Overnight stay logged." },
  { name: "Kupfer", datetime: "2025/10/06 00:16", note: "Logged for special massage." },
  { name: "Xenov_Loyalist_2", datetime: "2025-09-30 19:43:37 UTC", note: "Logged for special massage." },
  { name: "Batz", datetime: "2025-10-04 23:46:22 UTC", note: "Recorded in visitor ledger." },
  { name: "Markanne_Femboy_16", datetime: "2025-10-03 04:16:13 UTC", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_6", datetime: "06 Oct 2025 17:06", note: "Departed same evening." },
  { name: "Mekanik", datetime: "02 Oct 2025 16:26", note: "Arrived via private brigg." },
  { name: "Markanne", datetime: "28 Sep 2025 05:33", note: "Arrived via private brigg." },
  { name: "Konsti", datetime: "02 Oct 2025 01:20", note: "Departed same evening." },
  { name: "Markanne_Femboy_17", datetime: "2025-09-28 08:03:46 UTC", note: "Departed same evening." },
  { name: "Xenov_Loyalist_3", datetime: "2025/10/09 03:25", note: "Recorded in visitor ledger." },
  { name: "Marci", datetime: "2025-09-30 08:58:11 UTC", note: "Logged for special massage." },
  { name: "Taboritstky", datetime: "2025-09-29 10:56:12 UTC", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_7", datetime: "06 Oct 2025 12:29", note: "Recorded in visitor ledger." },
  { name: "Kona", datetime: "2025-10-03 14:14:19 UTC", note: "Departed same evening." },
  { name: "Sergey", datetime: "2025-10-02 13:29:33 UTC", note: "Observed at north camp." },
  { name: "Markanne_Femboy_6", datetime: "2025-10-03 07:42:11 UTC", note: "Recorded in visitor ledger." },
  { name: "Xenov", datetime: "03 Oct 2025 20:14", note: "Overnight stay logged." },
  { name: "Fintukani", datetime: "28 Sep 2025 23:44", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_2", datetime: "2025-10-05 08:55:05 UTC", note: "Arrived via private brigg." },
  { name: "Sergey", datetime: "2025/10/04 21:15", note: "Observed at north camp." },
  { name: "Xenov_Loyalist_1", datetime: "2025-09-28 15:07:06 UTC", note: "Logged for special massage." },
  { name: "Sergey", datetime: "2025/10/06 15:19", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_2", datetime: "2025-10-10 01:26:51 UTC", note: "Recorded in visitor ledger." },
  { name: "Taboritstky", datetime: "05 Oct 2025 02:50", note: "Departed same evening." },
  { name: "Markanne_Femboy_14", datetime: "10 Oct 2025 07:57", note: "Arrived via private brigg." },
  { name: "DSK_Sayan", datetime: "06 Oct 2025 04:04", note: "Arrived via private brigg." },
  { name: "erikas1234565", datetime: "2025/10/07 19:05", note: "Recorded in visitor ledger." },
  { name: "Markanne_Femboy_9", datetime: "30 Sep 2025 23:03", note: "Recorded in visitor ledger." },
  { name: "Markanne_Femboy_3", datetime: "2025-10-10 03:18:41 UTC", note: "Logged for special massage." },
  { name: "Markanne_Femboy_11", datetime: "2025-10-08 18:35:56 UTC", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_4", datetime: "05 Oct 2025 08:55", note: "Recorded in visitor ledger." },
  { name: "Konsti", datetime: "04 Oct 2025 17:33", note: "Arrived via private brigg." },
  { name: "Will", datetime: "2025-10-09 09:27:48 UTC", note: "Recorded in visitor ledger." },
  { name: "Kingslayer Khedas", datetime: "05 Oct 2025 02:57", note: "Departed same evening." },
  { name: "Markanne_Femboy_1", datetime: "2025-09-29 08:38:23 UTC", note: "Arrived via private brigg." },
  { name: "Xenov_Loyalist_1", datetime: "2025-10-01 17:27:51 UTC", note: "Arrived via private brigg." },
  { name: "Will", datetime: "2025-10-03 23:10:10 UTC", note: "Overnight stay logged." },
  { name: "Kupfer", datetime: "2025/09/30 01:50", note: "Departed same evening." },
  { name: "Markanne_Femboy_14", datetime: "2025/10/08 16:22", note: "Arrived via private brigg." },
  { name: "Xenov_Loyalist_5", datetime: "09 Oct 2025 22:26", note: "Recorded in visitor ledger." },
  { name: "Markanne_Femboy_1", datetime: "28 Sep 2025 18:57", note: "Recorded in visitor ledger." },
  { name: "Khedas", datetime: "02 Oct 2025 10:21", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_8", datetime: "29 Sep 2025 14:20", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_7", datetime: "2025/09/28 14:39", note: "Departed same evening." },
  { name: "Markanne_Femboy_3", datetime: "2025-10-03 12:21:17 UTC", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_13", datetime: "2025/09/30 08:26", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_16", datetime: "2025-10-09 23:53:40 UTC", note: "Observed at north camp." },
  { name: "Khedas", datetime: "03 Oct 2025 12:02", note: "Arrived via private brigg." },
  { name: "Markanne_Femboy_7", datetime: "2025-10-04 08:20:22 UTC", note: "Arrived via private brigg." },
  { name: "Xenov_Loyalist_3", datetime: "07 Oct 2025 13:24", note: "Arrived via private brigg." },
  { name: "DaKaeyman", datetime: "2025/09/28 09:50", note: "Observed at north camp." },
  { name: "Markanne_Femboy_12", datetime: "08 Oct 2025 13:40", note: "Logged for special massage." },
  { name: "Xenov_Loyalist_5", datetime: "2025/10/08 23:28", note: "Departed same evening." },
  { name: "Markanne_Femboy_12", datetime: "2025/10/01 00:34", note: "Overnight stay logged." },
  { name: "Xenov_Loyalist_1", datetime: "02 Oct 2025 22:34", note: "Recorded in visitor ledger." },
  { name: "Markanne_Femboy_17", datetime: "2025-10-02 13:39:10 UTC", note: "Observed at north camp." },
  { name: "Markanne_Femboy_5", datetime: "2025-09-28 07:15:00 UTC", note: "Arrived via private brigg." },
  { name: "Kona", datetime: "09 Oct 2025 17:25", note: "Departed same evening." },
  { name: "Markanne_Femboy_8", datetime: "03 Oct 2025 14:59", note: "Departed same evening." },
  { name: "DSK_Sayan", datetime: "2025/09/29 06:44", note: "Departed same evening." },
  { name: "Markanne_Femboy_8", datetime: "2025-10-06 09:08:49 UTC", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_13", datetime: "2025/10/02 09:06", note: "Overnight stay logged." },
  { name: "Taboritstky", datetime: "2025/10/04 02:45", note: "Recorded in visitor ledger." },
  { name: "Doncraft", datetime: "2025-10-02 10:59:52 UTC", note: "Departed same evening." },
  { name: "Xenov_Loyalist_4", datetime: "07 Oct 2025 19:58", note: "Overnight stay logged." },
  { name: "Markanne_Femboy_17", datetime: "2025-10-02 16:26:48 UTC", note: "Departed same evening." },
  { name: "Markanne_Femboy_4", datetime: "2025-10-04 17:01:31 UTC", note: "Logged for special massage." },
  { name: "Mops", datetime: "2025/10/09 07:28", note: "Recorded in visitor ledger." },
  { name: "Mekanik", datetime: "30 Sep 2025 05:41", note: "Logged for special massage." },
  { name: "Fintukani", datetime: "2025/09/28 07:16", note: "Departed same evening." },
  { name: "Markanne_Femboy_11", datetime: "2025-09-28 03:03:26 UTC", note: "Overnight stay logged." },
  { name: "Xenov_Loyalist_5", datetime: "2025-10-02 13:30:17 UTC", note: "Observed at north camp." },
  { name: "Xenov_Loyalist_4", datetime: "2025/10/09 20:44", note: "Arrived via private brigg." }
];

export function BrentArticle({ onClose }: BrentArticleProps) {
  return (
    <div>
      <div className="mb-4">
        <Button variant="outline" onClick={onClose}>← Back to hub</Button>
      </div>
      
      <article className="prose prose-invert max-w-none">
        <h1 className="font-serif text-4xl">Brent Visitor Log — Official Ledger Copy</h1>
        <p className="text-muted-foreground italic">
          Compiled from island port and administrative records between 28 September and 10 October 2025.
        </p>

        <div className="my-6 rounded-lg border border-border bg-card/50">
          <div className="overflow-auto">
            <Table>
              <caption className="mb-2 text-sm text-muted-foreground">
                Entries dated between 2025‑09‑28 and 2025‑10‑10 (various local time notations)
              </caption>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Ledger note</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {visitorData.map((row, idx) => (
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
      </article>
    </div>
  );
}
