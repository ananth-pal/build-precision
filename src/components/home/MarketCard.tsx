import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = { label: string; body: string; images: string[] };

export default function MarketCard({ label, body, images }: Props) {
  const [i, setI] = useState(0);
  const n = images.length;
  const prev = () => setI((v) => (v - 1 + n) % n);
  const next = () => setI((v) => (v + 1) % n);

  return (
    <div className="space-y-3">
      <div className="relative aspect-[4/3] overflow-hidden bg-muted border border-border rounded">
        {images.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={`${label} — image ${idx + 1}`}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
            style={{ opacity: idx === i ? 1 : 0 }}
          />
        ))}
        {n > 1 && (
          <>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-1.5 shadow border border-border"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background text-foreground rounded-full p-1.5 shadow border border-border"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute bottom-2 right-2 bg-background/80 text-foreground text-xs px-2 py-0.5 rounded border border-border">
              {i + 1} / {n}
            </div>
          </>
        )}
      </div>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
