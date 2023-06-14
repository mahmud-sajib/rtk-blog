import React from "react";
import BlogGrid from "../components/grid/BlogGrid";
import Pagination from "../components/pagination/Pagination";
import Tags from "../components/tags/Tags";

function Home() {
  return (
    <>
      <Tags />
      <BlogGrid />
      <Pagination />
    </>
  );
}

export default Home;
