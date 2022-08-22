import React from "react";

const Heading = ({ data }) => {
  const { content } = data;
  return (
    <>
      <h1
        className="text-4xl font-extrabold"
        style={{
          fontSize: "32px",
          fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
          fontWeight: "700",
          letterSpacing: "-0.016em",
          marginTop: "2em",
        }}
      >
        {content}
      </h1>
    </>
  );
};

export default Heading;
