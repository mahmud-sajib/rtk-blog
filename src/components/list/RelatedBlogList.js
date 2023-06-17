import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../loading/Loading";
import RelatedBlogListItem from "./RelatedBlogListItem";

function RelatedBlogList({ currentBlogId, tags }) {
  console.log("id " + currentBlogId + " tags " + tags);

  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
  }, [dispatch, tags, currentBlogId]);

  // Content to show in the ui in various cases
  let content = null;
  if (isLoading) {
    content = <Loading />;
  } else if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  } else if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = <div className="col-span-12">No blog found</div>;
  } else if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RelatedBlogListItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {content}
    </div>
  );
}

export default RelatedBlogList;
