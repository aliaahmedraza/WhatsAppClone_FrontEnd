import React, { useRef, useEffect, useState } from "react";
import SearchIcon from "../../assets/svg/SearchIcon";
import BackArrowIconForSearchBar from "../../assets/svg/BackArrowIconForSearchBar";

const Search = ({ placeHolder }) => {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
    const inputRef = useRef(null);
    const containerRef = useRef(null);

  useEffect(() => {
    if (isSearching && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearching]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsSearching(false);
        setQuery("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const handleSearchBarClick = () => {
    setIsSearching(true);
  };

  const handleBackClick = (e) => {
    e.stopPropagation(); 
    setIsSearching(false);
    setQuery("");
  };

  return (
    <div
      className="flex items-center gap-3 mx-3 bg-[#202C33] rounded-lg h-9 text-[#8696A0] text-sm px-2 cursor-text mt-3"
      onClick={handleSearchBarClick}
      ref={containerRef}
    >
      {isSearching ? (
        <div className="cursor-pointer" onClick={handleBackClick}>
          <BackArrowIconForSearchBar />
        </div>
      ) : (
        <SearchIcon />
      )}

      <input
        ref={inputRef}
        role="searchbox"
        type="text"
        value={query}
        placeholder={!isSearching ? placeHolder : ""}
        onChange={(e) => setQuery(e.target.value)}
        className="outline-none bg-transparent w-full"
      />
    </div>
  );
};

export default Search;
