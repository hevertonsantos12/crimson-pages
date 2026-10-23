import { Star, BookOpen, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import type { Manga } from '@/lib/catalog';
const MangaCard = ({title,cover,rating,chapters,genre,isNew,rank}: Manga) => (
 <Dialog>
  <DialogTrigger asChild>
   <Button variant="ghost" className="manga-card group h-auto w-full flex-col items-stretch justify-start gap-0 whitespace-normal p-0 text-left hover:bg-transparent hover:text-foreground" aria-label={`Ver ${title}`}>
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-md bg-muted">
     <img src={cover} alt={`Ilustração de ${title}`} width={320} height={426} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
     {rank && <span className="absolute left-2 top-2 grid h-8 w-8 place-items-center rounded bg-background/90 font-display text-lg text-foreground">{String(rank).padStart(2,'0')}</span>}
     {isNew && <span className="absolute right-2 top-2 rounded bg-primary px-2 py-1 text-[9px] font-bold text-primary-foreground">NOVO</span>}
     <span className="absolute bottom-2 right-2 grid h-8 w-8 place-items-center rounded bg-background/80 opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight className="h-4 w-4" /></span>
    </div>
    <div className="w-full pt-3"><p className="mb-1 text-[10px] font-normal text-muted-foreground">{genre}</p><h3 className="mb-2 truncate font-sans text-sm font-semibold">{title}</h3><div className="flex items-center justify-between text-[11px] font-normal text-muted-foreground"><span className="flex items-center gap-1 text-accent"><Star className="h-3 w-3 fill-accent" />{rating.toFixed(1)}</span><span>{chapters} caps.</span></div></div>
   </Button>
  </DialogTrigger>
  <DialogContent className="max-w-lg"><DialogHeader><DialogTitle>{title}</DialogTitle><DialogDescription>{genre} · {chapters} capítulos no catálogo</DialogDescription></DialogHeader><div className="flex gap-6"><img src={cover} alt={title} width={160} height={213} className="w-32 rounded object-cover" /><div className="space-y-4"><span className="flex items-center gap-2 text-accent"><Star className="h-4 w-4" />{rating.toFixed(1)} / 10</span><p className="text-sm text-muted-foreground">Ilustração de apresentação. Os capítulos ainda não estão disponíveis para leitura nesta versão.</p><BookOpen className="h-6 w-6 text-muted-foreground" /></div></div></DialogContent>
 </Dialog>
);
export default MangaCard;
