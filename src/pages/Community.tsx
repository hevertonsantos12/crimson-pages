import { useSearchParams } from "react-router-dom";
import { resolveCommunityTab } from "@/lib/catalog";
import artwork from "@/assets/featured-manga.jpg";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Palette, Image, Newspaper, BookOpen, ExternalLink } from "lucide-react";

const authors = [
  { id: 1, name: "Takeshi Obata", works: "Death Note, Bakuman", followers: "2.3M", avatar: "TO" },
  { id: 2, name: "Eiichiro Oda", works: "One Piece", followers: "5.1M", avatar: "EO" },
  { id: 3, name: "Masashi Kishimoto", works: "Naruto, Boruto", followers: "4.2M", avatar: "MK" },
  { id: 4, name: "Akira Toriyama", works: "Dragon Ball, Dr. Slump", followers: "6.8M", avatar: "AT" },
  { id: 5, name: "Hajime Isayama", works: "Attack on Titan", followers: "3.5M", avatar: "HI" },
  { id: 6, name: "Kentaro Miura", works: "Berserk", followers: "2.8M", avatar: "KM" },
];

const designers = [
  { id: 1, name: "Yusuke Murata", specialty: "Character Design", projects: 45, avatar: "YM" },
  { id: 2, name: "Takehiko Inoue", specialty: "Art Direction", projects: 32, avatar: "TI" },
  { id: 3, name: "Naoki Urasawa", specialty: "Storyboarding", projects: 28, avatar: "NU" },
  { id: 4, name: "Hirohiko Araki", specialty: "Visual Identity", projects: 51, avatar: "HA" },
];

const artworks = [
  { id: 1, title: "Dragon Emperor", artist: "ArtMaster_JP", likes: "12.5K", category: "Fantasia" },
  { id: 2, title: "Cyber Samurai", artist: "NeonTokyo", likes: "8.9K", category: "Sci-Fi" },
  { id: 3, title: "Moonlight Warrior", artist: "SakuraArt", likes: "15.2K", category: "Ação" },
  { id: 4, title: "Ancient Guardian", artist: "MythicDraw", likes: "10.1K", category: "Fantasia" },
  { id: 5, title: "Street Fighter", artist: "UrbanManga", likes: "7.3K", category: "Ação" },
  { id: 6, title: "Ocean Depths", artist: "DeepBlue", likes: "9.8K", category: "Aventura" },
];

const news = [
  { id: 1, title: "One Piece atinge 500 milhões de cópias vendidas", date: "28 Jan 2026", category: "Milestone" },
  { id: 2, title: "Novo mangá de Masashi Kishimoto anunciado", date: "27 Jan 2026", category: "Lançamento" },
  { id: 3, title: "Anime de Chainsaw Man confirma 2ª temporada", date: "26 Jan 2026", category: "Anime" },
  { id: 4, title: "Evento Jump Festa 2026 revela novidades", date: "25 Jan 2026", category: "Evento" },
  { id: 5, title: "My Hero Academia entra em arco final", date: "24 Jan 2026", category: "Mangá" },
];

const databooks = [
  { id: 1, title: "One Piece: Vivre Card", volumes: 12, status: "Em andamento" },
  { id: 2, title: "Naruto: Jin no Sho", volumes: 4, status: "Completo" },
  { id: 3, title: "Dragon Ball: Daizenshuu", volumes: 7, status: "Completo" },
  { id: 4, title: "Attack on Titan: ANSWERS", volumes: 2, status: "Completo" },
  { id: 5, title: "Jujutsu Kaisen: Official Fanbook", volumes: 1, status: "Em andamento" },
];

const Community = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultTab = resolveCommunityTab(searchParams.get("tab"));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-10 border-b border-border pb-8">
            <h1 className="font-display text-4xl md:text-5xl mb-4 text-foreground">
              Comunidade MKY
            </h1>
            <p className="text-muted-foreground text-sm max-w-2xl">
              Histórias, traços e quem faz tudo acontecer.
            </p>
          </div>

          {/* Tabs Section */}
          <Tabs value={defaultTab} onValueChange={(tab) => { const next = new URLSearchParams(searchParams); next.set("tab", tab); setSearchParams(next, { preventScrollReset: true }); }} className="w-full">
            <TabsList className="w-full flex justify-start gap-2 bg-transparent h-auto p-0 pb-3 mb-8 overflow-x-auto">
              <TabsTrigger 
                value="autores" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-3 rounded-md flex shrink-0 items-center gap-2"
              >
                <Users className="w-4 h-4" />
                Autores
              </TabsTrigger>
              <TabsTrigger 
                value="designers"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-3 rounded-md flex shrink-0 items-center gap-2"
              >
                <Palette className="w-4 h-4" />
                Designers
              </TabsTrigger>
              <TabsTrigger 
                value="artes"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-3 rounded-md flex shrink-0 items-center gap-2"
              >
                <Image className="w-4 h-4" />
                Artes
              </TabsTrigger>
              <TabsTrigger 
                value="noticias"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-3 rounded-md flex shrink-0 items-center gap-2"
              >
                <Newspaper className="w-4 h-4" />
                Notícias
              </TabsTrigger>
              <TabsTrigger 
                value="databook"
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-3 rounded-md flex shrink-0 items-center gap-2"
              >
                <BookOpen className="w-4 h-4" />
                Databook
              </TabsTrigger>
            </TabsList>

            {/* Autores Tab */}
            <TabsContent value="autores">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {authors.map((author) => (
                  <Card key={author.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-display text-xl">
                        {author.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{author.name}</CardTitle>
                        <CardDescription>{author.works}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{author.followers} seguidores</span>
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                        Seguir
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Designers Tab */}
            <TabsContent value="designers">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {designers.map((designer) => (
                  <Card key={designer.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center text-gold font-display text-xl">
                        {designer.avatar}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{designer.name}</CardTitle>
                        <CardDescription>{designer.specialty}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{designer.projects} projetos</span>
                      <Button variant="outline" size="sm" className="border-gold text-gold hover:bg-gold hover:text-background">
                        Ver Portfólio
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Artes Tab */}
            <TabsContent value="artes">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {artworks.map((art) => (
                  <Card key={art.id} className="bg-card border-border overflow-hidden group hover:border-primary/50 transition-all duration-300">
                    <div className="aspect-[4/3] overflow-hidden bg-muted"><img src={artwork} alt={art.title} loading="lazy" width={1920} height={1024} className="h-full w-full object-cover transition-transform group-hover:scale-105" /></div>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{art.title}</h3>
                        <Badge variant="secondary">{art.category}</Badge>
                      </div>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>por {art.artist}</span>
                        <span>❤️ {art.likes}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Notícias Tab */}
            <TabsContent value="noticias">
              <div className="space-y-4">
                {news.map((item) => (
                  <Card key={item.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
                    <CardContent className="p-4 sm:p-6 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-4">
                        <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                          <Newspaper className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{item.title}</h3>
                          <div className="flex items-center gap-3 text-sm text-muted-foreground">
                            <span>{item.date}</span>
                            <Badge variant="outline">{item.category}</Badge>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ExternalLink className="w-5 h-5" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Databook Tab */}
            <TabsContent value="databook">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {databooks.map((book) => (
                  <Card key={book.id} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{book.title}</CardTitle>
                        <BookOpen className="w-6 h-6 text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">{book.volumes} volumes</span>
                        <Badge variant={book.status === "Completo" ? "default" : "secondary"}>
                          {book.status}
                        </Badge>
                      </div>
                      <Button className="w-full btn-primary">
                        Explorar
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Community;
