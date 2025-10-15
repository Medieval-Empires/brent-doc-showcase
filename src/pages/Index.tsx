import { useState } from "react";
import { EncyclopediaHeader } from "@/components/EncyclopediaHeader";
import { EncyclopediaFilters } from "@/components/EncyclopediaFilters";
import { EncyclopediaCard } from "@/components/EncyclopediaCard";
import { EntryModal } from "@/components/EntryModal";
import { encyclopediaData, EncyclopediaEntry } from "@/data/encyclopedia";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEntry, setSelectedEntry] = useState<EncyclopediaEntry | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = Array.from(
    new Set(encyclopediaData.map((entry) => entry.category))
  );

  const filteredEntries = encyclopediaData.filter((entry) => {
    const matchesSearch =
      searchQuery === "" ||
      entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === null || entry.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCardClick = (entry: EncyclopediaEntry) => {
    setSelectedEntry(entry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedEntry(null), 200);
  };

  return (
    <div className="min-h-screen">
      <EncyclopediaHeader />
      
      <main className="container mx-auto max-w-7xl px-4 py-6">
        <EncyclopediaFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredEntries.map((entry) => (
            <EncyclopediaCard
              key={entry.id}
              entry={entry}
              onClick={() => handleCardClick(entry)}
            />
          ))}
        </div>

        {filteredEntries.length === 0 && (
          <div className="mt-12 text-center">
            <p className="text-lg text-muted-foreground">
              No entries found matching your criteria.
            </p>
          </div>
        )}
      </main>

      <EntryModal
        entry={selectedEntry}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
