import { DownloadIcon } from "../utils/Icons";

type ImageDownLoadProps = {
  imageUrl: string;
  alt?: string;
};

const ImageDownload = (props: ImageDownLoadProps) => {
  const { imageUrl } = props;

  return (
    <div className="download translate-y-3 opacity-0 absolute top-3 right-3 bg-white rounded-lg transition-all duration-300 ease-linear">
      <a
        href={imageUrl}
        download
        title="Download"
        className="text-xl font-semibold p-2.5 text-black block"
      >
        {/* <img src={imageUrl} alt={alt} /> */}
        <DownloadIcon />
      </a>
    </div>
  );
};

export default ImageDownload;
