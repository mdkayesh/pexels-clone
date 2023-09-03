import SearchBar from "../../components/SearchBar";
import { useDataProvider } from "../../context/Context";
import { styles } from "../../utils/styles";
import { Video, Photo } from "pexels";

const Hero = () => {
  const { heroImgVideos } = useDataProvider();

  const randomVideo = heroImgVideos[Math.floor(Math.random() * 15)] as Video;
  const randomPhoto = heroImgVideos[Math.floor(Math.random() * 15)] as Photo;

  return (
    <div className="h-screen max-h-[500px] relative">
      <div className="absolute w-full h-full z-[-1]">
        {!randomVideo?.video_files ? (
          <img
            src={randomPhoto?.src?.large}
            alt="hero"
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            src={randomVideo.video_files?.[0].link}
            loop
            autoPlay
            className="w-full h-full object-cover"
            muted
          >
            <source
              src={randomVideo.video_files?.[0].link}
              type={randomVideo.video_files?.[0].file_type}
            />
          </video>
        )}
      </div>
      <div className="bg-[#060e1e90] h-full flex justify-center items-center flex-col pt-20">
        <div className="w-full max-w-2xl">
          <div className={`${styles.paddingX}`}>
            <h1 className="text-3xl md:text-4xl font-semibold text-white">
              The best free stock photos, royalty free images & videos shared by
              creators.
            </h1>
            <div className="mt-7">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
