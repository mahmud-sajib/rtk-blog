import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loading from "../loading/Loading";
import BlogGridItem from "./BlogGridItem";

function BlogGrid() {
  // Accessing the states from blogs slice
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );

  // Accessing the states from filter slice
  const { tags, search } = useSelector((state) => state.filter);

  // Getting the 'dispatch' function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Fetching data from server
  useEffect(() => {
    dispatch(fetchBlogs({ tags, search }));
  }, [dispatch, tags, search]);

  // Content to show in the ui in various cases
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isLoading && !isError && blogs?.length === 0) {
    content = <div className="col-span-12">No blogs found</div>;
  } else if (!isLoading && !isError && blogs?.length > 0) {
    content = blogs.map((blog) => <BlogGridItem key={blog.id} blog={blog} />);
  }

  return (
    <section className="pt-12">
      <section className="pt-12">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </section>
  );
}

export default BlogGrid;
