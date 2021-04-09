import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "./index.css"

const SearchBox = () => {
  return (
    <div className="search_box">
      <form>
          <div className="input_group mx-auto flex items-center px-2 py-1">
            <input className="px-2" placeholder="Search for products..." type="text" />
            <button className="btn flex justify-center items-center">
              <SearchIcon/>
            </button>
          </div>
      </form>
    </div>
  );
};

export default SearchBox;
