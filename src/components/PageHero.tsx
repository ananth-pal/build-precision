import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  children?: ReactNode;
  heroNote?: string;
}

export default function PageHero({ title, subtitle, backgroundImage, children, heroNote }: PageHeroProps) {
  return (
    <section
      className="relative min-h-[35vh] flex items-center overflow-hidden"
      style={backgroundImage ? {
        backgroundImage: `linear-gradient(135deg, hsla(220,20%,10%,0.82), hsla(348,76%,45%,0.15)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      } : {
        background: "linear-gradient(135deg, hsl(220,20%,10%), hsl(348,76%,25%))",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-4">{title}</h1>
        {subtitle && <p className="text-base text-background/90 max-w-4xl leading-relaxed tracking-wide whitespace-pre-line">{subtitle}</p>}
        {children}
        {heroNote && (
          <p className="mt-6 inline-block text-xs text-background/85 bg-black/30 border border-dashed border-background/40 rounded px-2 py-1">
            HERO IMAGE — {heroNote}
          </p>
        )}
      </div>
    </section>
  );
}
