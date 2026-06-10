import * as React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function ImageLightbox({ src, alt, children }: ImageLightboxProps) {
  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-zoom-in">
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] max-h-[95vh] w-auto h-auto p-0 border-0 bg-transparent shadow-none translate-x-0 translate-y-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [&>button]:bg-black/50 [&>button]:rounded-full [&>button]:text-white [&>button]:h-8 [&>button]:w-8 [&>button]:p-1 [&>button]:right-3 [&>button]:top-3 [&>button]:ring-white [&>button]:ring-offset-0">
        <img
          src={src}
          alt={alt}
          className="max-w-[95vw] max-h-[90vh] object-contain rounded-md"
        />
      </DialogContent>
    </Dialog>
  );
}
