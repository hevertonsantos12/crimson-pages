import { TrendingUp, Flame } from "lucide-react";
import MangaCard from "./MangaCard";

const trendingManga = [
  {
    title: "Chainsaw Man",
    cover: "https://images.unsplash.com/photo-1626557436562-66802c8f8811?w=400&h=600&fit=crop",
    rating: 9.1,
    chapters: 165,
    genre: "Ação",
    rank: 1,
  },
  {
    title: "Spy x Family",
    cover: "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=400&h=600&fit=crop",
    rating: 9.0,
    chapters: 95,
    genre: "Comédia",
    rank: 2,
  },
  {
    title: "Kaiju No. 8",
    cover: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=600&fit=crop",
    rating: 8.8,
    chapters: 105,
    genre: "Ação",
    rank: 3,
  },
  {
    title: "Blue Lock",
    cover: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=600&fit=crop",
    rating: 8.9,
    chapters: 255,
    genre: "Esportes",
    rank: 4,
  },
  {
    title: "Oshi no Ko",
    cover: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=600&fit=crop",
    rating: 9.2,
    chapters: 145,
    genre: "Drama",
    rank: 5,
  },
  {
    title: "Dandadan",
    cover: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop",
    rating: 8.7,
    chapters: 135,
    genre: "Sobrenatural",
    rank: 6,
  },
  {
    title: "Sakamoto Days",
    cover: "https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&h=600&fit=crop",
    rating: 8.6,
    chapters: 150,
    genre: "Ação",
    rank: 7,
  },
  {
    title: "Hell's Paradise",
    cover: "https://images.unsplash.com/photo-1490730141103-6cac27abb37f?w=400&h=600&fit=crop",
    rating: 8.8,
    chapters: 127,
    genre: "Aventura",
    rank: 8,
  },
  {
    title: "Mashle",
    cover: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&h=600&fit=crop",
    rating: 8.5,
    chapters: 162,
    genre: "Comédia",
    rank: 9,
  },
  {
    title: "Undead Unluck",
    cover: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&h=600&fit=crop",
    rating: 8.4,
    chapters: 190,
    genre: "Ação",
    rank: 10,
  },
];

const TrendingSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
            <Flame className="w-6 h-6 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="section-title">TOP 10</h2>
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <p className="text-muted-foreground">Tendências da semana</p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {trendingManga.map((manga) => (
            <MangaCard key={manga.title} {...manga} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
