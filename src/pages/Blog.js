import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Banner from "../components/card/Banner";
import Description from "../components/card/Description";
import RelatedBlogList from "../components/list/RelatedBlogList";
import Loading from "../components/loading/Loading";
import { fetchBlog } from "../features/blog/blogSlice";

function Blog() {
  // Accessing the 'blog' state from the Redux store using the 'useSelector' hook
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  // Getting the 'dispatch' function to dispatch actions to the Redux store
  const dispatch = useDispatch();

  // Get the id of individual blog
  const { blogId } = useParams();
  console.log(blogId);

  // Fetch blog by id
  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  const { id, link, title, tags } = blog || {};

  // Content to show in the ui in various cases
  let content;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No blog found</div>;
  } else if (!isLoading && !isError && blog?.id) {
    content = (
      <div className="grid grid-cols-3 gap-2 lg:gap-8">
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
          {/* <!-- video player --> */}
          <Banner link={link} title={title} />

          {/* <!-- video description --> */}
          <Description blog={blog} />
        </div>

        {/* <!-- related videos --> */}
        <RelatedBlogList currentBlogId={id} tags={tags} />
      </div>
    );
  }

  return (
    <>
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          {content}
        </div>
      </section>
    </>
  );
}

export default Blog;
