import { Link } from "react-router-dom";
import { BookOpen, Shield, FileText, Mail, Info, User, Home, Grid, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const menuItems = [
  { icon: BookOpen, label: "Mangá List", href: "#" },
  { icon: Shield, label: "Políticas de Privacidade", href: "#" },
  { icon: FileText, label: "Termos de Uso", href: "#" },
  { icon: Mail, label: "Contatos", href: "#" },
  { icon: Info, label: "Sobre Nós", href: "#" },
];

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Grid, label: "Gêneros", href: "#" },
];

const communityItems = [
  { label: "Autores", href: "/comunidade?tab=autores" },
  { label: "Designers", href: "/comunidade?tab=designers" },
  { label: "Artes", href: "/comunidade?tab=artes" },
  { label: "Notícias", href: "/comunidade?tab=noticias" },
  { label: "Databook", href: "/comunidade?tab=databook" },
];

const MobileMenu = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center glow-scarlet">
            <span className="font-display text-2xl text-primary-foreground">M</span>
          </div>
          <div>
            <h2 className="font-display text-xl tracking-wider">MKY Studio</h2>
            <p className="text-sm text-muted-foreground">Seu portal de mangás</p>
          </div>
        </div>
      </div>

      {/* Mobile Nav (shown on mobile) */}
      <div className="lg:hidden p-4 border-b border-border">
        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Navegação</p>
        <div className="space-y-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        
        {/* Comunidade submenu */}
        <div className="mt-4">
          <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider flex items-center gap-2">
            <Users className="w-4 h-4" />
            Comunidade
          </p>
          <div className="space-y-1 pl-2">
            {communityItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm"
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 p-4 overflow-y-auto">
        <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Menu</p>
        <div className="space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-secondary transition-colors"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>

      <Separator />

      {/* Footer */}
      <div className="p-4">
        <Button className="w-full btn-gold gap-2">
          <User className="w-4 h-4" />
          Entrar / Cadastrar
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
