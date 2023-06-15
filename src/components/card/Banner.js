import React from "react";

function Banner({ link, title }) {
  return (
    <>
      {/* <!-- video player --> */}
      <iframe
        width="100%"
        className="aspect-video"
        src={link}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </>
  );
}

export default Banner;
