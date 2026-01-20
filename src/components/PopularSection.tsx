import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MangaCard from "./MangaCard";

const popularManga = [
  {
    title: "One Piece",
    cover: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400&h=600&fit=crop",
    rating: 9.5,
    chapters: 1100,
    genre: "Aventura",
    isNew: true,
  },
  {
    title: "Naruto",
    cover: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=400&h=600&fit=crop",
    rating: 9.2,
    chapters: 700,
    genre: "Ação",
  },
  {
    title: "Attack on Titan",
    cover: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=600&fit=crop",
    rating: 9.4,
    chapters: 139,
    genre: "Drama",
  },
  {
    title: "My Hero Academia",
    cover: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=600&fit=crop",
    rating: 8.9,
    chapters: 420,
    genre: "Ação",
    isNew: true,
  },
  {
    title: "Tokyo Ghoul",
    cover: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=400&h=600&fit=crop",
    rating: 8.7,
    chapters: 179,
    genre: "Horror",
  },
  {
    title: "Death Note",
    cover: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop",
    rating: 9.3,
    chapters: 108,
    genre: "Thriller",
  },
];

const PopularSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="section-title">
              <span className="gradient-text">Séries</span> Populares
            </h2>
            <p className="text-muted-foreground mt-1">Os mangás mais amados pela comunidade</p>
          </div>
          <Button variant="ghost" className="gap-1 text-primary hover:text-primary/80">
            Ver Todos <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {popularManga.map((manga) => (
            <MangaCard key={manga.title} {...manga} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSection;
