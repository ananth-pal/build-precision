import ImageLightbox from "@/components/ImageLightbox";

export interface GalleryItem {
  src: string;
  caption: string;
  /** Descriptive alt text for screen readers and SEO; defaults to caption. */
  alt?: string;
  /** Retained for API compatibility; ignored in masonry layout. */
  spanClass?: string;
}


interface Props {
  items: GalleryItem[];
}

export default function SelectedWorkGallery({ items }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {items.map((item, i) => (
        <ImageLightbox key={i} src={item.src} alt={item.alt ?? item.caption}>
          <button
            type="button"
            className="group relative block w-full overflow-hidden ring-1 ring-border shadow-[0_15px_40px_-20px_hsl(220_20%_10%/0.25)] cursor-zoom-in"
            aria-label={`Expand ${item.caption}`}
          >
            <img
              src={item.src}
              alt={item.alt ?? item.caption}
              loading="lazy"
              decoding="async"
              className="block w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            />

            <div className="absolute bottom-2 left-2 bg-black/55 text-white text-xs px-2 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
              {item.caption}
            </div>
          </button>
        </ImageLightbox>
      ))}
    </div>
  );
}
