import Image, { ImageProps } from 'next/image';

export default function WarmImage({ className, fill, width, height, alt, ...props }: ImageProps) {
  // We need to support both 'fill' mode and standard mode
  return (
    <div className={`relative overflow-hidden ${className || ''} ${fill ? 'w-full h-full' : ''}`}>
      <Image 
        {...props} 
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        className={`warm-img ${fill ? 'object-cover' : 'w-full h-auto'}`} 
      />
      <div className="absolute inset-0 bg-[#BEA082] opacity-10 pointer-events-none" />
    </div>
  );
}
