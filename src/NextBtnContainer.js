import { connect } from "react-redux";

import { nextBtnClicked } from "./Module";
import { selectImgNumber } from "./Module/selectors";

import NextBtn from "./NextBtn";

const mapStateToProps = (state) => {
  return {
    imgNumber: selectImgNumber(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    nextBtnClicked: () => dispatch(nextBtnClicked()),
  };
};

const NextBtnContainer = connect(mapStateToProps, mapDispatchToProps)(NextBtn);

export default NextBtnContainer;
