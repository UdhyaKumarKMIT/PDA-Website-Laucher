import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import zest from "../assets/zest.png";
import zenith from "../assets/zenith.png";

const Index = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden py-5 px-4">
      {/* ✨ Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300 via-yellow-100 to-red-200 animate-gradient" />

      {/* Optional soft overlay for better contrast */}
      <div className="absolute inset-0 bg-background/40 backdrop-blur-[2px]" />

      <div className="container mx-auto relative z-10">
        {/* University Header */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground uppercase">
            Anna University – Madras Institute of Technology Campus
          </h1>

          <p className="text-lg text-muted-foreground mt-2">
            We cordially invite you to the 42<sup>nd</sup> year inauguration of
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-center max-w-7xl mx-auto mt-8">
          {/* Left Character */}
          <div className="hidden lg:flex justify-center animate-fade-in">
            <img
              src={zenith}
              alt="Professional woman character"
              className="w-64 h-auto object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Center Content */}
          <div className="text-center space-y-6 animate-scale-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary drop-shadow-md">
              Personality Development Association
            </h1>
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
                  className="text-lg md:text-xl px-12 py-6 h-auto rounded-full shadow-lg bg-orange-500 hover:bg-orange-600 text-white transition-all duration-300 hover:scale-105"
                >
                  Launch Website
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right Character */}
          <div
            className="hidden lg:flex justify-center animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            <img
              src={zest}
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
