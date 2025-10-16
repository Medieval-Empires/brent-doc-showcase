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
    id: "wessex-wars",
    title: "Wessex Restoration Wars",
    section: "article-wessex-wars",
    date: "7-12 October 2025",
    cat: "wars",
    kicker: "Wars & Battles",
    result: "Wessex victory; territorial restoration",
    tags: ["Wessex", "IGC", "Australia", "Byzantine", "France", "Austria", "Denmark", "Rome", "Khaganate"],
    blurb: "Series of conflicts resulting in Wessex reclaiming lost territories; includes Perth, Rome skirmish, and London battles."
  },
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
    id: "league-of-nations",
    title: "League of Nations",
    section: "article-league",
    date: "Founded 28 September 2025",
    cat: "factions",
    kicker: "Nations & Factions",
    result: "International diplomatic organization",
    tags: ["League of Nations", "Geneva", "Switzerland", "Japan", "diplomacy", "internationalism", "British Isles"],
    blurb: "International organization founded by Japan to counter imperialism and establish diplomatic talks; 26 member nations; HQ in Geneva; stabilized British Isles after English civil war."
  },
  {
    id: "igc",
    title: "International Guild of Champions (IGC)",
    section: "article-igc",
    date: "Founded 30 September 2025",
    cat: "factions",
    kicker: "Nations & Factions",
    result: "Mercenary company operating across Europe",
    tags: ["IGC", "Fintukani", "Kona", "Lithuania", "Zaire", "Wessex", "mercenaries", "Khedas", "Ozryn", "DeKayeman"],
    blurb: "Free agent mercenary company founded by Fintukani; HQ in Liepāja, Lithuania; fought at Perth and London; notable for helping English states gain independence."
  },
  {
    id: "byzantium",
    title: "Byzantine Empire",
    section: "article-byzantium",
    date: "Founded c. 2025",
    cat: "factions",
    kicker: "Nations & Factions",
    result: "Regional power in Greece and Anatolia",
    tags: ["Byzantium", "Greece", "apr1corn", "Tsunami", "Panos", "Mekanik", "Smyrna", "Nicaea", "Treaty of Tirana"],
    blurb: "Formerly Greece, evolved into Byzantium under King apr1corn; 31 members; participated in invasion of England; signed Treaty of Tirana (14 Oct 2025)."
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
  },
  {
    id: "netherlands",
    title: "The Netherlands",
    section: "article-netherlands",
    date: "Founded after fall of Western Federation",
    cat: "factions",
    kicker: "Nations & Factions",
    result: "Monarchy led by Queen and Don von Craft",
    tags: ["Netherlands", "DSK_Sayan", "Kanzo", "Acht", "Queen Elizabeth", "Don von Craft", "Silver Queen", "Manji", "Order of the Black Lion"],
    blurb: "Nation formed after the Western Federation's collapse; ruled by Queen (Manji's advisor) and Don von Craft; descended from Silver and Golden Queens; led Dutch elite mercenaries."
  },
  {
    id: "apr1corn",
    title: "Apr1c0rn",
    section: "article-apr1corn",
    date: "Born 31 August 2008",
    cat: "figures",
    kicker: "Commanders & Figures",
    result: "Emperor of the Byzantines",
    tags: ["Apr1c0rn", "Byzantine Empire", "Constantine XII", "Athens", "Strategos", "The Reforger", "Justinian I", "Hellenic Kingdom"],
    blurb: "Born in Athens, son of King Constantine XII; became Strategos at age 16; crowned Emperor of Byzantines on 8 October 2025; known as 'The Reforger' for restoring the Byzantine Empire."
  }
];
