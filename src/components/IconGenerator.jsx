import React from "react";

const IconGenerator = ({ Component, text, handleOpen, model }) => {
  return (
    <>
      <div
        className="flex flex-col border border-gray-150 p-2 justify-center items-center"
        style={{
          maxWidth: "100px",
          minWidth: "100px",
          maxHeight: "100px",
          minHeight: "100px",
        }}
        onClick={() => handleOpen(text)}
      >
        <Component style={{ fontSize: "1.7em" }} />
        <p className="text-xs mt-2">{text}</p>
      </div>
    </>
  );
};

export default IconGenerator;
