import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMatch, useNavigate } from "react-router-dom";
import searchImage from "../../assets/search.svg";
import { searched } from "../../features/filter/filterSlice";

function Search() {
  // Accessing the 'search' state from the Redux store's filter slice
  const { search } = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  // Managing internal form state
  const [input, setInput] = useState(search);

  // hook to check if we are in the given url
  const match = useMatch("/");
  // hook to redirect
  const navigate = useNavigate();

  // Handling form input
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searched(input));

    // if user is not in home page, redirect to home page
    if (!match) {
      navigate("/");
    }
  };

  return (
    <div
      onSubmit={handleSubmit}
      className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200"
    >
      {/* <!-- search --> */}
      <form>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={handleChange}
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src={searchImage}
        alt="Search"
      />
    </div>
  );
}

export default Search;
