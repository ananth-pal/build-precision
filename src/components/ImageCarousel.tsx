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
  /** Height class for the preview box. */
  previewHeightClass?: string;
}

export default function ImageCarousel({
  images,
  previewHeightClass = "h-56",
}: ImageCarouselProps) {
  const [previewIdx, setPreviewIdx] = React.useState(0);
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

  const current = images[previewIdx];

  return (
    <div className="mb-4">
      <Dialog
        open={open}
        onOpenChange={(o) => {
          setOpen(o);
          if (o) setLightboxIdx(previewIdx);
        }}
      >
        <div className="relative">
          <DialogTrigger asChild>
            <button
              type="button"
              className={`relative block w-full ${previewHeightClass} rounded-md bg-muted overflow-hidden cursor-zoom-in`}
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
                  setPreviewIdx(prev);
                }}
                aria-label="Previous image"
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setPreviewIdx(next);
                }}
                aria-label="Next image"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === previewIdx ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          {current.caption}
          {multi && (
            <span className="ml-2 text-muted-foreground/70">
              {previewIdx + 1} / {images.length}
            </span>
          )}
        </p>

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
