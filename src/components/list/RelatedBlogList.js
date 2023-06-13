import React from "react";
import RelatedBlogListItem from "./RelatedBlogListItem";

function RelatedBlogList() {
  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      <RelatedBlogListItem />
    </div>
  );
}

export default RelatedBlogList;
