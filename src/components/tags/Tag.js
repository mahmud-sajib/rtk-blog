import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagRemoved, tagSelected } from "../../features/filter/filterSlice";

function Tag({ title }) {
  // Accessing the 'tags' state from the Redux store's filter slice
  const { tags } = useSelector((state) => state.filter);

  // Getting the 'dispatch' function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Checking if the selected tag is already included in the `tags` array
  const isTagSelected = tags.includes(title) ? true : false;

  // Applying Styles
  const style = isTagSelected
    ? "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer";

  // Dispatching actions
  const handleClick = () => {
    if (isTagSelected) {
      dispatch(tagRemoved(title));
    } else {
      dispatch(tagSelected(title));
    }
  };

  return (
    <>
      <div onClick={handleClick} className={style}>
        {title}
      </div>
    </>
  );
}

export default Tag;
