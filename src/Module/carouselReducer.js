import * as actionTypes from "./actionTypes";

const initialState = {
  imgNumber: 0,
  prevBtnClicked: false,
  nextBtnClicked: false,
};

const prevBtnClicked = (state) => {
  if (state.imgNumber > 0) {
    return { ...state, imgNumber: --state.imgNumber, prevBtnClicked: true };
  }
};

const nextBtnClicked = (state) => {
  if (state.imgNumber < 9) {
    return { ...state, imgNumber: ++state.imgNumber, nextBtnClicked: true };
  }
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEXT_BTN_CLICKED:
      return nextBtnClicked(state);
    case actionTypes.PREV_BTN_CLICKED:
      return prevBtnClicked(state);
    default:
      return state;
  }
};

export default carouselReducer;
