import React from "react";
import Footer from "../components/footer/Footer";
import BlogGrid from "../components/grid/BlogGrid";
import Navbar from "../components/navbar/Navbar";
import Pagination from "../components/pagination/Pagination";
import Tags from "../components/tags/Tags";

function Home() {
  return (
    <>
      <Navbar />
      <Tags />
      <BlogGrid />
      <Pagination />
      <Footer />
    </>
  );
}

export default Home;
