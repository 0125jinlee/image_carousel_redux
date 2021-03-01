import * as actionTypes from "./actionTypes";

export const nextBtnClicked = () => {
  return {
    type: actionTypes.NEXT_BTN_CLICKED,
  };
};

export const prevBtnClicked = () => {
  return {
    type: actionTypes.PREV_BTN_CLICKED,
  };
};
