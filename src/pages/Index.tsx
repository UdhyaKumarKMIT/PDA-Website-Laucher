import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-12 px-4">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Character - Woman in red blazer */}
          <div className="hidden lg:flex justify-center animate-fade-in">
            <img 
              src="/zenith.png" 
              alt="Professional woman character"
              className="w-64 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Center Content */}
          <div className="text-center space-y-6 animate-scale-in">
            {/* University Title */}
            <h1 className="text-sm md:text-base font-semibold text-foreground tracking-wide uppercase">
              Anna University – Madras Institute of Technology Campus
            </h1>
            
            {/* Subtitle */}
            <p className="text-sm md:text-base text-muted-foreground">
              We cordially invite you to the 42<sup>nd</sup> year inauguration of
            </p>
            
            {/* PDA Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Personality Development Association
            </h2>
            
            {/* Tagline */}
            <p className="text-2xl md:text-3xl italic text-accent font-medium">
              Discover Thyself
            </p>
            
            {/* Launch Button */}
            <div className="pt-4">
              <a 
                href="https://personality-development-association.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button 
                  variant="launch" 
                  size="lg"
                  className="text-lg md:text-xl px-12 py-6 h-auto rounded-full"
                >
                  Launch Website
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Character - Man in brown suit */}
          <div className="hidden lg:flex justify-center animate-fade-in" style={{ animationDelay: '100ms' }}>
            <img
              src="/zest.png"
              alt="Professional man character"
              className="w-64 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
