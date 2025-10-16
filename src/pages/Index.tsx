import { Button } from "@/components/ui/button";
import pdaCharacters from "@/assets/pda-characters.jpg";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, hsl(var(--accent) / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, hsl(var(--primary) / 0.1) 0%, transparent 50%)`
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl mx-auto">
          {/* Header section */}
          <div className="text-center space-y-6 animate-fade-in">
            {/* University Title */}
            <h1 className="text-lg md:text-xl font-semibold text-foreground tracking-wide">
              ANNA UNIVERSITY – MADRAS INSTITUTE OF TECHNOLOGY CAMPUS
            </h1>
            
            {/* Subtitle */}
            <p className="text-base md:text-lg text-muted-foreground italic">
              We cordially invite you to the 42<sup>nd</sup> year inauguration of
            </p>
            
            {/* PDA Title with decorative lines */}
            <div className="space-y-4 py-8">
              <div className="flex items-center justify-center gap-4">
                <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-primary" />
              </div>
              
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                PERSONALITY DEVELOPMENT<br />ASSOCIATION
              </h2>
              
              <div className="flex items-center justify-center gap-4">
                <div className="h-[2px] w-16 md:w-24 bg-gradient-to-r from-transparent to-primary" />
                <div className="h-2 w-2 rotate-45 bg-primary" />
                <div className="h-[2px] w-16 md:w-24 bg-gradient-to-l from-transparent to-primary" />
              </div>
            </div>
            
            {/* Tagline */}
            <p className="text-xl md:text-2xl font-medium text-accent italic">
              "Discover Thyself"
            </p>
          </div>
          
          {/* Characters and Launch Button Section */}
          <div className="mt-12 md:mt-16 relative">
            {/* Characters image */}
            <div className="mb-8 animate-scale-in">
              <img 
                src={pdaCharacters} 
                alt="PDA Professional Characters" 
                className="w-full max-w-2xl mx-auto rounded-2xl shadow-elegant"
              />
            </div>
            
            {/* Launch Button */}
            <div className="flex justify-center animate-fade-in" style={{ animationDelay: '200ms' }}>
              <a 
                href="https://personality-development-association.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button 
                  variant="launch" 
                  size="lg"
                  className="text-lg md:text-xl px-10 md:px-16 py-6 md:py-8 h-auto rounded-full shadow-lg"
                >
                  Launch Website
                  <ExternalLink className="w-5 h-5 md:w-6 md:h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
          
          {/* Footer message */}
          <div className="mt-16 text-center animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-sm md:text-base text-muted-foreground">
              Join us in celebrating excellence, growth, and self-discovery
            </p>
            <p className="mt-2 text-xs text-muted-foreground/80">
              Organized by MIT Campus, Anna University
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
