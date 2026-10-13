import Image from "next/image";
import type { Photo } from "@/lib/site";

// One photograph with its caption beneath. Square corners, no frame, nothing on the photograph.
// Never shown wider than half its pixel width, so `width` is capped at photo.max.
export function Piece({
  photo,
  width,
  sizes,
  priority = false,
  className = "",
  caption = true,
}: {
  photo: Photo;
  // The widest this placement gets, in CSS pixels.
  width: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  caption?: boolean;
}) {
  const w = Math.min(width, photo.max);
  return (
    <figure className={className} style={{ maxWidth: w }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        width={photo.w}
        height={photo.h}
        sizes={sizes ?? `(min-width: ${w + 64}px) ${w}px, 100vw`}
        priority={priority}
        className="block h-auto w-full"
      />
      {caption && <figcaption className="small mt-3">{photo.caption}</figcaption>}
    </figure>
  );
}

// A labelled slot for a photograph that is not on file.
export function Slot({ text, className = "" }: { text: string; className?: string }) {
  return (
    <div className={`slot ${className}`} role="note">
      {text}
    </div>
  );
}
