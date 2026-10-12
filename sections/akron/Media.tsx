import Image, { type StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  alt: string;
  video?: string;
  priority?: boolean;
  className?: string;
  /** Slow zoom on the fallback image */
  drift?: boolean;
  sizes?: string;
}

/** Fills its (relative) parent with a muted looping video, or the image when no video is set. */
export default function Media({
  image,
  alt,
  video,
  priority,
  className = "object-cover object-center",
  drift,
  sizes = "100vw",
}: Props) {
  if (video) {
    return (
      <video
        className={`absolute inset-0 w-full h-full ${className}`}
        src={video}
        poster={image.src}
        autoPlay
        muted
        loop
        playsInline
        aria-label={alt}
      />
    );
  }
  return (
    <Image
      src={image}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      placeholder="blur"
      className={`${className}${drift ? " animate-drift" : ""}`}
    />
  );
}
