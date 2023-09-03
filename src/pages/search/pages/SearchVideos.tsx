import { useEffect, useState } from "react";
import { styles } from "../../../utils/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { client } from "../../../api";
import { Video, Videos } from "pexels";
import VideoCart from "../../../components/VideoCart";

type dataColumnTypes = {
  col1: Video[];
  col2: Video[];
  col3: Video[];
};

const SearchVideos = () => {
  const { query: _query } = useParams();
  const [loading, setLoading] = useState(true);
  const [pageNum, setPageNum] = useState(1);
  const [dataColumn, setDataColumn] = useState<dataColumnTypes>({
    col1: [],
    col2: [],
    col3: [],
  });

  const query = _query as string;

  const fetchData = async (): Promise<void> => {
    setLoading(true);
    try {
      const res = (await client.videos.search({
        query,
        page: pageNum,
      })) as Videos;
      setDataColumn({
        col1: res.videos.slice(0, 5),
        col2: res.videos.slice(5, 10),
        col3: res.videos.slice(10, 15),
      });
      setPageNum((prev: number) => prev + 1);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  const nextPageData = async (): Promise<void> => {
    try {
      const res = (await client.videos.search({
        query,
        page: pageNum,
      })) as Videos;
      setDataColumn({
        col1: [...dataColumn.col1, ...res.videos.slice(0, 5)],
        col2: [...dataColumn.col2, ...res.videos.slice(5, 10)],
        col3: [...dataColumn.col3, ...res.videos.slice(10, 15)],
      });
      setPageNum((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full">
        <div className="left w-full">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`${styles.loaderContainer} aspect-[1] mt-6`}
            >
              <div className={styles.loaderAnimation}></div>
            </div>
          ))}
        </div>
        <div className="left w-full">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className={`${styles.loaderContainer} aspect-[1/1.3] mt-6`}
            >
              <div className={styles.loaderAnimation}></div>
            </div>
          ))}
        </div>
        <div className="left w-full">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`${styles.loaderContainer} aspect-[1] mt-6`}
            >
              <div className={styles.loaderAnimation}></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="photos mt-14">
      <InfiniteScroll
        className="grid gap-6 grid-cols-2 max-[350px]:grid-cols-1 md:grid-cols-3"
        next={nextPageData}
        hasMore={true}
        loader={
          <div className="flex justify-center mt-5 col-span-3">
            <div className="h-12 w-12 border-4 border-primary animate-spin border-b-transparent rounded-full"></div>
          </div>
        }
        dataLength={
          dataColumn.col1.length +
          dataColumn.col2.length +
          dataColumn.col3.length
        }
        style={{ overflow: "hidden" }}
      >
        <div className="left w-full">
          {dataColumn.col1?.map((video: Video, index: number) => (
            <VideoCart key={index} {...video} />
          ))}
        </div>
        <div className="middle w-full">
          {dataColumn.col2?.map((video: Video, index: number) => (
            <VideoCart key={index} {...video} />
          ))}
        </div>
        <div className="right w-full">
          {dataColumn.col3?.map((video: Video, index: number) => (
            <VideoCart key={index} {...video} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default SearchVideos;
