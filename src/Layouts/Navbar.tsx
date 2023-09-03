import { styles } from "../utils/styles.js";
import Logo from "../assets/Logo.js";
import { SearchIcon } from "../utils/Icons.js";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import SearchBar from "../components/SearchBar.js";
import { useDataProvider } from "../context/Context.js";
import useOutsideClick from "../hooks/useOutsideClick.js";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { changeTheme } = useDataProvider();
  const searchRef = useRef(null);

  const location = useLocation();

  const isSearch: boolean = location.pathname.includes("search");

  useOutsideClick(searchRef, () => {
    setIsSearchOpen(false);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200 || document.documentElement.scrollTop > 200) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`navbar ${
        isScroll || isSearch
          ? "bg-background dark:bg-secondary shadow-lg text-black"
          : "bg-transparent shadow-none text-white"
      } fixed top-0 left-0 w-full z-40 transition-all duration-500 ease-linear dark:text-white`}
    >
      <div className="container">
        <nav
          className={`${styles.paddingX} flex justify-between items-center py-3 gap-4`}
        >
          <div className="flex gap-4 items-center">
            <Link to={"/"} className="logo flex gap-2 items-center">
              <Logo className={"w-10"} />
              <span className="hidden sm:inline-block">Pexels</span>
            </Link>
            {isScroll || isSearch ? (
              <div className="hidden sm:block">
                <SearchBar />
              </div>
            ) : null}
          </div>

          {/* right */}

          <ul className="flex gap-3 items-center">
            <li className="relative pt-2 sm:hidden" ref={searchRef}>
              <button
                type="button"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <SearchIcon className={"text-2xl"} />
              </button>
              <div
                className={`${
                  isSearchOpen
                    ? "w-[250px] opacity-100"
                    : "w-0 opacity-0 overflow-hidden"
                } absolute top-full -left-[50px] transition-all duration-300 ease-linear`}
              >
                <SearchBar />
              </div>
            </li>
            <li>
              <div className="wrapper pt-2">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="switch"
                  onClick={(
                    e: React.MouseEvent<HTMLInputElement, MouseEvent>
                  ) => changeTheme(e.currentTarget.checked)}
                />
              </div>
            </li>
            {/* <li className="flex gap-2 items-center">
              <span>Explore</span>
              <DownArrow />
            </li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
