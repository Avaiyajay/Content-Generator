import React from "react";

const Paragraph = ({ data }) => {
  const { content } = data;
  return (
    <>
      {/* paragraph content */}

      <div>
        <p
          style={{
            fontSize: "20px",
            fontFamily: `charter, Georgia, Cambria, "Times New Roman", Times, serif`,
            marginTop: "2em",
          }}
        >
          {content}
        </p>
      </div>
    </>
  );
};

export default Paragraph;
