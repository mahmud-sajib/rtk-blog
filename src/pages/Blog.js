import React from "react";
import Banner from "../components/card/Banner";
import Description from "../components/card/Description";
import Footer from "../components/footer/Footer";
import RelatedBlogList from "../components/list/RelatedBlogList";
import Navbar from "../components/navbar/Navbar";

function Blog() {
  return (
    <>
      <Navbar />

      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              {/* <!-- video player --> */}
              <Banner />

              {/* <!-- video description --> */}
              <Description />
            </div>

            {/* <!-- related videos --> */}
            <RelatedBlogList />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
