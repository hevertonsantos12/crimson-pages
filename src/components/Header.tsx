import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X, User, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import MobileMenu from "./MobileMenu";

const genres = [
  "Ação", "Aventura", "Comédia", "Drama", "Fantasia", 
  "Horror", "Romance", "Sci-Fi", "Slice of Life", "Shounen"
];

const communityItems = [
  { label: "Autores", href: "/comunidade?tab=autores" },
  { label: "Designers", href: "/comunidade?tab=designers" },
  { label: "Artes", href: "/comunidade?tab=artes" },
  { label: "Notícias", href: "/comunidade?tab=noticias" },
  { label: "Databook", href: "/comunidade?tab=databook" },
];

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center glow-scarlet">
              <span className="font-display text-xl text-primary-foreground">M</span>
            </div>
            <span className="font-display text-2xl tracking-wider text-foreground hidden sm:block">
              MKY Studio
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="/" className="nav-link">Home</a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center gap-1">
                Gêneros <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border min-w-[200px] grid grid-cols-2 gap-1 p-2">
                {genres.map((genre) => (
                  <DropdownMenuItem key={genre} className="cursor-pointer hover:bg-secondary">
                    {genre}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link flex items-center gap-1">
                Comunidade <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-card border-border min-w-[160px] p-2">
                {communityItems.map((item) => (
                  <DropdownMenuItem key={item.label} asChild className="cursor-pointer hover:bg-secondary">
                    <Link to={item.href}>{item.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search & Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden md:flex items-center">
              {searchOpen ? (
                <div className="flex items-center gap-2 animate-fade-in">
                  <Input 
                    placeholder="Buscar mangá..." 
                    className="w-64 bg-input border-border focus:ring-primary"
                  />
                  <Button 
                    variant="ghost" 
                    size="icon"
                    onClick={() => setSearchOpen(false)}
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              ) : (
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setSearchOpen(true)}
                >
                  <Search className="w-5 h-5" />
                </Button>
              )}
            </div>

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="w-5 h-5" />
            </Button>

            {/* Login Button */}
            <Button className="btn-primary hidden sm:flex items-center gap-2">
              <User className="w-4 h-4" />
              Login
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border p-0 w-80">
                <MobileMenu />
              </SheetContent>
            </Sheet>

            {/* Desktop Hamburger for extra menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden lg:flex">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-card border-border p-0 w-80">
                <MobileMenu />
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
