import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const BannerSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div 
          className="relative rounded-2xl overflow-hidden p-8 md:p-12"
          style={{ background: "var(--gradient-scarlet)" }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-2xl" />
          
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center animate-pulse-glow">
                <Sparkles className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-display text-2xl md:text-3xl tracking-wider text-primary-foreground">
                  Torne-se Premium
                </h3>
                <p className="text-primary-foreground/80 mt-1">
                  Leitura ilimitada, sem anúncios e capítulos exclusivos
                </p>
              </div>
            </div>
            
            <Button className="btn-gold gap-2 px-8 py-6 text-lg shrink-0">
              Assinar Agora
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
