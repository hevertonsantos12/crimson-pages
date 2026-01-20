import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const featuredManga = [
  {
    id: 1,
    title: "Solo Leveling",
    description: "Em um mundo onde portais conectam nossa realidade a dimensões repletas de monstros, Sung Jin-Woo é considerado o caçador mais fraco. Após um evento misterioso, ele ganha a habilidade única de subir de nível.",
    cover: "https://images.unsplash.com/photo-1578632767115-351597cf2477?w=1920&h=1080&fit=crop",
    genre: "Ação / Fantasia",
    chapters: 179,
  },
  {
    id: 2,
    title: "Demon Slayer",
    description: "Tanjiro embarca em uma jornada perigosa para encontrar uma cura para sua irmã Nezuko, que foi transformada em um demônio após o massacre de sua família.",
    cover: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=1920&h=1080&fit=crop",
    genre: "Ação / Sobrenatural",
    chapters: 205,
  },
  {
    id: 3,
    title: "Jujutsu Kaisen",
    description: "Yuji Itadori, um estudante do ensino médio com habilidades físicas extraordinárias, se envolve no mundo das maldições ao engolir um dedo amaldiçoado.",
    cover: "https://images.unsplash.com/photo-1560972550-aba3456b5564?w=1920&h=1080&fit=crop",
    genre: "Ação / Horror",
    chapters: 253,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const current = featuredManga[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredManga.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredManga.length) % featuredManga.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{
          backgroundImage: `url(${current.cover})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-burgundy-deep/60" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-end pb-16">
        <div className="max-w-2xl animate-fade-in" key={current.id}>
          <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 border border-primary/30">
            {current.genre}
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl tracking-wider mb-4 text-foreground">
            {current.title}
          </h1>
          
          <p className="text-muted-foreground text-lg mb-6 line-clamp-3">
            {current.description}
          </p>
          
          <div className="flex items-center gap-4">
            <Button className="btn-gold gap-2 px-6 py-5 text-lg">
              <Play className="w-5 h-5" />
              Ler Agora
            </Button>
            <Button variant="outline" className="border-foreground/30 hover:bg-foreground/10 px-6 py-5">
              + Minha Lista
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-4">
            {current.chapters} capítulos disponíveis
          </p>
        </div>

        {/* Navigation */}
        <div className="absolute right-4 md:right-8 bottom-16 flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border border-foreground/20 hover:bg-foreground/10"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border border-foreground/20 hover:bg-foreground/10"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {featuredManga.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-8 bg-primary" 
                  : "bg-foreground/30 hover:bg-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
