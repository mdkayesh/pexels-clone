import { DownArrow, PhotoIcon, SearchIcon, VideoIcon } from "../utils/Icons";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOutsideClick from "../hooks/useOutsideClick";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeBtn, setActiveBtn] = useState<string>("Photos");

  const navigate = useNavigate();
  const DropRef = useRef(null);

  useOutsideClick(DropRef, () => {
    setIsOpen(false);
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchValue) return;
    navigate(`search/${activeBtn.toLowerCase()}/${searchValue}`);
  };

  const handleActiveBtn = (btnName: string) => {
    setActiveBtn(btnName);
    setIsOpen(false);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex bg-white w-full p-1 rounded-lg items-center">
        <div className="relative text-black" ref={DropRef}>
          <button
            className="py-2 px-4 bg-gray-200 flex gap-1 items-center justify-center rounded-lg"
            title=""
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {activeBtn === "Videos" ? <VideoIcon /> : <PhotoIcon />}
            <span className="hidden md:block">{activeBtn}</span>
            <DownArrow
              className={`${
                isOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-300`}
            />
          </button>

          <ul
            className={`${
              isOpen
                ? "visible translate-x-0 translate-y-0 opacity-100"
                : "-translate-x-3 translate-y-3 invisible opacity-0"
            } absolute top-full left-0 w-full bg-white rounded-lg transition-all duration-300 ease-linear min-w-[120px]`}
          >
            <li>
              <button
                type="button"
                className={`${
                  activeBtn === "Photos" ? "text-primary" : ""
                } flex gap-2 items-center px-4 py-2`}
                onClick={() => handleActiveBtn("Photos")}
              >
                <PhotoIcon />
                <span>Photos</span>
              </button>
            </li>
            <li>
              <button
                type="button"
                className={`${
                  activeBtn === "Videos" ? "text-primary" : ""
                } flex gap-2 items-center px-4 py-2`}
                onClick={() => handleActiveBtn("Videos")}
              >
                <VideoIcon />
                <span>Videos</span>
              </button>
            </li>
          </ul>
        </div>
        <input
          type="search"
          name="Serchbar"
          id="search"
          placeholder={`Search for free ${activeBtn}`}
          className="px-4 bg-transparent text-black flex-1 w-full py-2"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="text-black flex justify-center items-center bg-gray-100 rounded-lg p-2"
        >
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
