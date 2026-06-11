import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export interface CarouselImage {
  src: string;
  caption: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [idx, setIdx] = React.useState(0);
  const [lightboxIdx, setLightboxIdx] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const multi = images.length > 1;

  const prev = (i: number) => (i - 1 + images.length) % images.length;
  const next = (i: number) => (i + 1) % images.length;

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightboxIdx(next);
      else if (e.key === "ArrowLeft") setLightboxIdx(prev);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  const current = images[idx];

  return (
    <div>
      <Dialog
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
          if (o) setLightboxIdx(idx);
        }}
      >
        {/* Hero image with plate, shadow, and overlay caption */}
        <div className="relative">
          <DialogTrigger asChild>
            <button
              type="button"
              className="relative block w-full aspect-[4/3] overflow-hidden cursor-zoom-in bg-[hsl(var(--section-alt))] ring-1 ring-border shadow-[0_20px_50px_-20px_hsl(220_20%_10%/0.25)]"
              aria-label={`Expand ${current.caption}`}
            >
              <img
                src={current.src}
                alt={current.alt ?? current.caption}
                className="w-full h-full object-contain"
              />
            </button>
          </DialogTrigger>

          {multi && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIdx(prev);
                }}
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/75 text-white rounded-full p-2.5"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIdx(next);
                }}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/55 hover:bg-black/75 text-white rounded-full p-2.5"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Overlay caption bottom-left */}
          <div className="absolute bottom-3 left-3 bg-black/55 text-white text-xs px-2.5 py-1 rounded">
            {current.caption}
            {multi && (
              <span className="ml-2 opacity-70">
                {idx + 1} / {images.length}
              </span>
            )}
          </div>
        </div>

        {/* Thumbnail strip */}
        {multi && (
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Show ${img.caption}`}
                className={`shrink-0 h-16 w-20 overflow-hidden bg-muted ${
                  i === idx
                    ? "ring-2 ring-primary"
                    : "ring-1 ring-border hover:ring-foreground/30"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt ?? img.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}

        <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-0 bg-transparent shadow-none translate-x-0 translate-y-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [&>button]:bg-black/50 [&>button]:rounded-full [&>button]:text-white [&>button]:h-8 [&>button]:w-8 [&>button]:p-1 [&>button]:right-3 [&>button]:top-3 [&>button]:ring-white [&>button]:ring-offset-0">
          <div className="relative flex items-center justify-center">
            <img
              src={images[lightboxIdx].src}
              alt={images[lightboxIdx].alt ?? images[lightboxIdx].caption}
              className="max-w-[95vw] max-h-[85vh] object-contain rounded-md"
            />
            {multi && (
              <>
                <button
                  type="button"
                  onClick={() => setLightboxIdx(prev)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxIdx(next)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-2"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full">
              {images[lightboxIdx].caption}
              {multi && (
                <span className="ml-2 opacity-70">
                  {lightboxIdx + 1} / {images.length}
                </span>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
