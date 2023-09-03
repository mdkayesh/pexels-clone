import ImageDownload from "./ImageDownload";
import LazyImage from "./LazyImage";
import { Photo } from "pexels";

const PhotoCart = (props: Photo) => {
  const {
    src,
    photographer,
    photographer_url,
    width,
    height,
    avg_color,
    url,
    alt,
  } = props;

  const aspectRatio = () => {
    const aspectRatio: number = width / height;
    return Number(aspectRatio.toFixed(2));
  };

  return (
    <div
      className="photoCart h-fit w-full mt-6 relative overflow-hidden [&_.download]:hover:translate-y-0 [&_.download]:hover:opacity-100 [&_.img]:hover:scale-110 [&_.photographer]:hover:text-primary"
      style={{
        aspectRatio: aspectRatio(),
        backgroundColor: avg_color || "var(--secondary)",
      }}
    >
      <a
        target="_blank"
        href={url}
        className="img transition-all duration-300 ease-linear"
        title={alt || "photo"}
      >
        <LazyImage
          src={src?.large}
          alt={alt || "photo"}
          className="w-full"
          width=""
          height=""
        />
      </a>

      <div className="absolute left-0 bottom-0 md:flex gap-2 items-center px-3 hidden bg-gradient-to-t to-transparent from-[#000000b3] w-full font-semibold">
        <a
          target="_blank"
          href={photographer_url}
          className="photographer relative px-3 py-1 mb-1 text-white [&_span]:hover:text-black [&_.back]:hover:w-full"
        >
          <span className="relative text-sm z-10 transition-all duration-300 ease-linear line-clamp-1">
            {photographer}
          </span>
          <span className="back absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-300 ease-linear rounded-lg" />
        </a>
      </div>
      <ImageDownload imageUrl={src?.large} />
    </div>
  );
};

export default PhotoCart;
