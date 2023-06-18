import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTags } from "../../features/tags/tagsSlice";
import Tag from "./Tag";

function Tags() {
  // Accessing the 'tags' state from the Redux store using the 'useSelector' hook
  const { tags } = useSelector((state) => state.tags);

  // Getting the 'dispatch' function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Fetching data from server
  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  // Content to show in the ui in various cases
  let content;
  if (tags?.length > 0) {
    content = tags.map((tag) => <Tag key={tag.id} title={tag.title} />);
  } else {
    content = null;
  }
  return (
    // <!-- Tags -->
    <section>
      <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto">
        {content}
      </div>
    </section>
  );
}

export default Tags;
