import React from "react";

const Image = ({ data }) => {
  const { link } = data;
  return (
    <>
      {/* image Component */}
      <div>
        <img src={link} className="mt-10 max-w-full h-auto" alt="" />
      </div>
    </>
  );
};

export default Image;
