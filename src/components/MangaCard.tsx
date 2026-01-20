import { Star, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface MangaCardProps {
  title: string;
  cover: string;
  rating?: number;
  chapters?: number;
  genre?: string;
  isNew?: boolean;
  rank?: number;
}

const MangaCard = ({ title, cover, rating, chapters, genre, isNew, rank }: MangaCardProps) => {
  return (
    <div className="manga-card group cursor-pointer">
      {/* Cover Image */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img 
          src={cover} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay Gradient */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "var(--gradient-card)" }}
        />

        {/* Rank Badge */}
        {rank && (
          <div className="absolute top-2 left-2 w-8 h-8 rounded-full bg-primary flex items-center justify-center font-display text-lg text-primary-foreground">
            {rank}
          </div>
        )}

        {/* New Badge */}
        {isNew && (
          <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground font-semibold">
            NOVO
          </Badge>
        )}

        {/* Genre Badge */}
        {genre && (
          <Badge 
            variant="secondary" 
            className="absolute bottom-2 left-2 bg-secondary/90 backdrop-blur-sm"
          >
            {genre}
          </Badge>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <h3 className="font-semibold text-sm line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {rating && (
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-accent text-accent" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
          {chapters && (
            <div className="flex items-center gap-1">
              <BookOpen className="w-3 h-3" />
              <span>{chapters} caps</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MangaCard;
