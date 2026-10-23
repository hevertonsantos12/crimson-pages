import { ArrowUpRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const BannerSection=()=> <section className="community-band border-b border-border py-12 md:py-16"><div className="container flex flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-8"><div><p className="eyebrow mb-3 flex items-center gap-2"><Users className="h-4 w-4" /> COMUNIDADE MKY</p><h2 className="section-title mb-3">Boas histórias conectam pessoas.</h2><p className="max-w-lg text-sm leading-relaxed text-muted-foreground">Por trás de cada traço, um universo. Encontre os artistas e as ideias que dão vida às suas histórias favoritas.</p></div><Button asChild className="gap-3" size="lg"><Link to="/comunidade">Explorar comunidade<ArrowUpRight className="h-4 w-4" /></Link></Button></div></section>;
export default BannerSection;
