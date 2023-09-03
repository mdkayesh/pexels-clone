import { Video } from "pexels";
import LazyImage from "./LazyImage";
import React, { useState } from "react";
import { VideoIcon } from "../utils/Icons";

const VideoCart = (props: Video) => {
  const [isHovering, setIsHovering] = useState(false);
  const {
    image,
    height,
    width,
    url: videoUrl,
    user: { name, url },
    video_files,
  } = props;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const aspectRatio = () => {
    const aspectRatio: number = width / height;
    return Number(aspectRatio.toFixed(2));
  };

  return (
    <div
      className="video-cart mt-6 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: "var(--secondary)",
        aspectRatio: aspectRatio(),
      }}
    >
      <a
        href={videoUrl}
        target="_blank"
        className="img w-full h-full [&_>span]:h-full [&_>span]:w-full"
      >
        <LazyImage
          src={image}
          alt="video image"
          width=""
          height=""
          className="w-full h-full"
        />
      </a>
      <a href={videoUrl} target="_blank">
        <video
          width="320"
          height="240"
          src={video_files[0].link}
          muted
          loop
          onMouseOver={(e: React.MouseEvent<HTMLVideoElement>) =>
            e.currentTarget.play()
          }
          onMouseOut={(e: React.MouseEvent<HTMLVideoElement>) =>
            e.currentTarget.pause()
          }
          className={`${
            isHovering ? "block" : "hidden"
          } absolute top-0 left-0 w-full h-full`}
        >
          <source
            src={video_files?.[0].link}
            type={video_files?.[0].file_type}
          />
        </video>
      </a>

      <div className="absolute top-3 left-3 text-xl text-white">
        <VideoIcon />
      </div>
      <div className="absolute left-0 bottom-0 md:flex gap-2 items-center px-3 hidden bg-gradient-to-t to-transparent from-[#000000b3] w-full font-semibold">
        <a
          target="_blank"
          href={url}
          className="photographer relative px-3 py-1 my-2 text-white [&_span]:hover:text-black [&_.back]:hover:w-full"
        >
          <span className="relative z-10 text-sm transition-all duration-300 ease-linear line-clamp-1">
            {name}
          </span>
          <span className="back absolute top-0 left-0 w-0 h-full bg-primary transition-all duration-300 ease-linear rounded-lg" />
        </a>
      </div>
    </div>
  );
};

export default VideoCart;
