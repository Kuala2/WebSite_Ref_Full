import Image, { ImageProps } from 'next/image';

export default function WarmImage({ className, fill, width, height, alt, sizes, ...props }: ImageProps) {
  // We need to support both 'fill' mode and standard mode
  // Add default sizes for fill mode to prevent console warnings
  const defaultSizes = fill && !sizes ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : sizes;

  return (
    <div className={`relative overflow-hidden bg-gradient-to-tr from-[#EBE3D5] to-[#F4EFE7] ${className || ''} ${fill ? 'w-full h-full' : ''}`}>
      <Image 
        {...props} 
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        sizes={defaultSizes}
        unoptimized={true}
        loading="eager"
        className={`warm-img ${fill ? 'object-cover' : 'w-full h-auto'}`} 
      />
      <div className="absolute inset-0 bg-[#BEA082] opacity-10 pointer-events-none" />
    </div>
  );
}
