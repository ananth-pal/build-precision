import { Image as ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  /** Description of the intended photo — shown inside the box. */
  caption: string;
  /** Tailwind aspect class, e.g. "aspect-video", "aspect-[4/3]", "aspect-[21/9]". */
  ratio?: string;
  className?: string;
}

export default function ImagePlaceholder({
  caption,
  ratio = "aspect-video",
  className = "",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative ${ratio} w-full rounded-md border-2 border-dashed border-border bg-muted/50 flex flex-col items-center justify-center text-center p-4 ${className}`}
    >
      <ImageIcon className="text-muted-foreground mb-2" size={26} />
      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
        Image placeholder
      </span>
      <span className="text-xs text-muted-foreground mt-1 max-w-[92%] leading-snug">
        {caption}
      </span>
    </div>
  );
}
