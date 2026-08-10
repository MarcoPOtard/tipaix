import Image from 'next/image';
import { urlFor } from '@/sanity/image';

type SanityImageValue = {
  asset?: {
    _id: string;
    url: string | null;
    metadata?: { lqip?: string | null } | null;
  } | null;
} | null | undefined;

interface SanityImageProps {
  image: SanityImageValue;
  alt: string;
  sizes: string;
  className?: string;
  priority?: boolean;
}

export default function SanityImage({ image, alt, sizes, className, priority }: SanityImageProps) {
  if (!image?.asset?.url) return null;

  const lqip = image.asset.metadata?.lqip;

  return (
    <Image
      src={urlFor({ asset: { url: image.asset.url } }).width(2400).url()}
      alt={alt}
      fill
      sizes={sizes}
      className={className}
      priority={priority}
      placeholder={lqip ? 'blur' : 'empty'}
      blurDataURL={lqip ?? undefined}
    />
  );
}
