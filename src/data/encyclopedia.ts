export interface EncyclopediaEntry {
  id: string;
  title: string;
  section: string;
  date: string;
  cat: "wars" | "figures" | "factions" | "docs";
  kicker: string;
  result: string;
  tags: string[];
  blurb: string;
}

export const INDEX: EncyclopediaEntry[] = [
  {
    id: "perth",
    title: "Battle of Perth",
    section: "article-perth",
    date: "7 October 2025",
    cat: "wars",
    kicker: "Wars & Battles",
    result: "Wessex–IGC victory; Australia exits war",
    tags: ["Perth", "Wessex", "IGC", "Australia", "Khaganate", "Rome", "Xenov", "Ashesofaraven", "erikas1234565", "Khedas", "Will", "Fintukani"],
    blurb: "Chronological start of the Wessex Restoration Wars on Australia's west coast; decisive raid by Wessex and IGC."
  },
  {
    id: "rome",
    title: "The Skirmish of Rome",
    section: "article-rome",
    date: "7 October 2025",
    cat: "wars",
    kicker: "Wars & Battles",
    result: "Minor Roman defensive success; IGC withdrew",
    tags: ["Rome", "IGC", "Marci", "Kona", "Vanstav2011", "UN warrant", "Benijoe", "TitledMoon"],
    blurb: "Small incident ~2 hours after Perth: brief fight outside the walls; Benijoe (TitledMoon) killed during surprise strike."
  },
  {
    id: "london",
    title: "Battle of London",
    section: "article-london",
    date: "12 October 2025",
    cat: "wars",
    kicker: "Wars & Battles",
    result: "Wessex victory; coalition retreat in chaos",
    tags: ["London", "Wessex", "IGC", "Byzantine", "France", "Austria", "Denmark", "Nicosia", "Vanstav", "Mekanik", "Taboritstky", "Will", "rumor"],
    blurb: "Defensive stand inside the capital; TNT breach; counter-attack; heavy French losses; disputed rumor of \"cheated\" items."
  },
  {
    id: "figures",
    title: "Commanders & Figures",
    section: "article-placeholder-figures",
    date: "—",
    cat: "figures",
    kicker: "Encyclopedia",
    result: "Biographical index (in progress)",
    tags: ["leaders", "officers", "eyewitnesses"],
    blurb: "Profiles for key personalities across the setting."
  },
  {
    id: "factions",
    title: "Nations & Factions",
    section: "article-placeholder-factions",
    date: "—",
    cat: "factions",
    kicker: "Encyclopedia",
    result: "Political and military entities",
    tags: ["Wessex", "IGC", "Zaire", "Rome", "Byzantium", "Austria", "France", "Denmark", "Nicosia", "Khaganate"],
    blurb: "Histories, alliances, doctrines, and equipment."
  },
  {
    id: "docs",
    title: "Chronicles & Documents",
    section: "article-placeholder-docs",
    date: "—",
    cat: "docs",
    kicker: "Encyclopedia",
    result: "Primary sources & records",
    tags: ["dispatches", "orders", "AAR", "quotes"],
    blurb: "Transcripts, orders of battle, and after-action reports."
  },
  {
    id: "brent",
    title: "Brent Visitor Log — Official Ledger Copy",
    section: "article-brent",
    date: "28 Sep - 10 Oct 2025",
    cat: "docs",
    kicker: "Chronicles & Documents",
    result: "Administrative visitor records from Brent Island",
    tags: ["Brent", "administrative", "visitor log", "island port", "records"],
    blurb: "Compiled from island port and administrative records between 28 September and 10 October 2025."
  }
];
