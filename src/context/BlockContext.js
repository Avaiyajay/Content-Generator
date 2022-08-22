import React, { createContext, useReducer } from "react";

export const BlockContext = createContext();

export const constants = {
  ADD_BLOCK: "add-block",
  DELETE_BLOCK: "delete-block",
  UPDATE_BLOCK: "update-block",
};

export const blockTypes = {
  HEADING: 1,
  PARAGRAPH: 2,
  IMAGE: 3,
  THREEDOTS: 4,
};

const initialState = {
  blocks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case constants.ADD_BLOCK:
      const { payload } = action;
      const { blocks } = state;
      const updatedBlocksArray = [...blocks, payload];
      return { blocks: updatedBlocksArray };
      break;
    case constants.DELETE_BLOCK:
      break;
    case constants.UPDATE_BLOCK:
      break;
    default:
      break;
  }
};

const BlockContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <BlockContext.Provider value={value}>{children}</BlockContext.Provider>
  );
};

export default BlockContextProvider;
