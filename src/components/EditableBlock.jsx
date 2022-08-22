import React from "react";
import { blockTypes } from "../context/BlockContext";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Threedots from "./Threedots";
import Image from "./Image";

const EditableBlock = ({ content: block }) => {
  switch (block.type) {
    case blockTypes.HEADING:
      return <Heading data={block.data} />;
      break;
    case blockTypes.PARAGRAPH:
      return <Paragraph data={block.data} />;
      break;
    case blockTypes.IMAGE:
      return <Image data={block.data} />;
      break;
    case blockTypes.THREEDOTS:
      return <Threedots />;
    default:
      return <Threedots />;
      break;
  }
};

export default EditableBlock;
