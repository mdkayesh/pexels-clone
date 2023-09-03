import { styles } from "../../utils/styles";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams();
  const location = useLocation();

  const media = location.pathname.includes("photos") ? "Photos" : "Videos";

  return (
    <div className={`${styles.paddingTop}`}>
      <div className="container">
        <div className={`${styles.paddingX}`}>
          <h1 className="font-semibold text-4xl mt-8">
            Free {query} {media}
          </h1>

          <ul className="flex items-center mt-10 [&_.active]:bg-black [&_.active]:text-white [&_.active]:dark:bg-white [&_.active]:dark:text-black">
            <li>
              <NavLink
                className={"px-4 py-2 rounded-3xl"}
                to={`/search/photos/${query}`}
              >
                Photos
              </NavLink>
            </li>
            <li>
              <NavLink
                className={"px-4 py-2 rounded-3xl"}
                to={`/search/videos/${query}`}
              >
                Videos
              </NavLink>
            </li>
          </ul>

          <div className="mt-10">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
