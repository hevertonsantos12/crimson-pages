import { ArrowRight, Library, SearchX } from 'lucide-react';
import { useSearchParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { popularManga, filterCatalog, genres } from '@/lib/catalog';
import MangaCard from './MangaCard';
const PopularSection = () => {
 const [params,setParams]=useSearchParams();
 const query=params.get('q')||''; const genre=params.get('genre')||'Todos'; const expanded=params.get('catalog')==='all';
 const filtered=query || genre!=='Todos' || expanded;
 const items=filtered ? filterCatalog(query,genre) : popularManga;
 function selectGenre(value:string){const next=new URLSearchParams(params); if(value==='Todos')next.delete('genre');else next.set('genre',value);setParams(next,{preventScrollReset:true});}
 return <section id="catalogo" className="scroll-mt-24 py-10 md:py-12"><div className="container px-5 md:px-8"><div className="mb-6 flex items-center justify-between gap-3"><div><p className="eyebrow mb-2 flex items-center gap-2"><Library className="h-3 w-3" /> DESCUBRA SUA PRÓXIMA HISTÓRIA</p><h2 className="section-title">{query ? `Resultados para “${query}”` : expanded ? 'Explore o catálogo' : 'Séries populares'}<span className="text-primary">.</span></h2></div><Button variant="ghost" className="hidden gap-2 text-xs text-muted-foreground sm:flex" asChild><Link to={expanded ? '/#catalogo' : '/?catalog=all#catalogo'}>{expanded ? 'Destaques' : 'Ver catálogo'}<ArrowRight className="h-4 w-4" /></Link></Button></div><div className="mb-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">{genres.slice(0,9).map(g=><Button key={g} variant={genre===g ? 'default':'secondary'} size="sm" className="h-8 shrink-0 rounded-full px-4 text-xs" onClick={()=>selectGenre(g)}>{g}</Button>)}</div><div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 lg:gap-x-5">{items.map(m=><MangaCard key={m.title} {...m} />)}</div>{!items.length && <div className="py-16 text-center text-muted-foreground"><SearchX className="mx-auto mb-4 h-8 w-8" /><p>Nenhuma série encontrada.</p><Button variant="link" onClick={()=>setParams({})}>Limpar filtros</Button></div>}</div></section>;
};
export default PopularSection;
