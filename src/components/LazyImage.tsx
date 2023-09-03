import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface LazyImageProps {
  src: string;
  alt: string;
  width: string;
  height: string;
  className: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  return (
    <LazyLoadImage
      effect="blur"
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default LazyImage;
