import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Twitter, href: "#", label: "X / Twitter" },
];

const footerLinks = [
  { label: "Sobre", href: "#" },
  { label: "Feedback", href: "#" },
  { label: "Ajuda", href: "#" },
  { label: "Termos", href: "#" },
  { label: "Privacidade", href: "#" },
  { label: "Anuncie", href: "#" },
  { label: "Contato", href: "#" },
];

// TikTok icon (not in lucide)
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-burgundy-deep border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
              <span className="font-display text-2xl text-primary-foreground">M</span>
            </div>
            <span className="font-display text-2xl tracking-wider">MKY Studio</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
            <a
              href="#"
              aria-label="TikTok"
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors"
            >
              <TikTokIcon />
            </a>
          </div>
        </div>

        <Separator className="bg-border mb-8" />

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Legal Text */}
        <div className="text-center space-y-4">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            MKY Studio é uma plataforma de distribuição digital de mangás e conteúdos 
            relacionados, operando como serviço autorizado pelos detentores dos direitos 
            autorais de suas respectivas obras. Todas as obras disponibilizadas são 
            licenciadas oficialmente.
          </p>
          
          <p className="text-xs text-muted-foreground">
            ©︎2026 MKY Studio Inc. Todos os Direitos Reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
