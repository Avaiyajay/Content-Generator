import React, { useContext, useState } from "react";
import EditableBlock from "../components/EditableBlock";
import { BlockContext } from "../context/BlockContext";
import IconGenerator from "../components/IconGenerator";

// MATERIAL-UI imports
import ImageIcon from "@mui/icons-material/Image";
import FormatIndentIncreaseIcon from "@mui/icons-material/FormatIndentIncrease";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import AbcIcon from "@mui/icons-material/Abc";

import { iconTexts, ModelHandler } from "../components/Models";
import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

const iconList = [
  { component: AbcIcon, text: iconTexts.HEADING },
  { component: ImageIcon, text: iconTexts.IMAGE },
  {
    component: FormatIndentIncreaseIcon,
    text: iconTexts.PARAGRAPH,
  },
  { component: MoreHorizIcon, text: iconTexts.THREEDOTS },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: "1em",
  },
  "& .MuiPaper-root": {
    width: "50%",
    border: "1px solid red",
  },
  "& .MuiDialogActions-root": {
    padding: "1em",
  },
}));

const EditablePage = () => {
  const {
    state: { blocks },
  } = useContext(BlockContext);

  const [currentSelectedItem, setCurrentSelectedItem] = useState(null);

  const [open, setOpen] = useState(false);
  const handleOpen = (text) => {
    setOpen(true);
    setCurrentSelectedItem(text);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="relative">
        <div className="absolute overflow-x-scroll flex items-center space-x-2 p-2 right-8 w-2/12 border border-red-700 top-0">
          {iconList.map((icon) => {
            return (
              <IconGenerator
                Component={icon.component}
                text={icon.text}
                handleOpen={handleOpen}
              />
            );
          })}
        </div>
        <div className="w-1/2 mx-auto my-20">
          {blocks.map((block) => {
            return <EditableBlock content={block} />;
          })}
        </div>

        {/* popup model */}
        <div>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <ModelHandler
              text={currentSelectedItem}
              handleClose={handleClose}
            />
          </BootstrapDialog>
        </div>
      </div>
    </>
  );
};

export default EditablePage;
