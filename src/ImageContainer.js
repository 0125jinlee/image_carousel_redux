import { connect } from "react-redux";

import {
  selectImgNumber,
  selectNextBtnClicked,
  selectPrevBtnClicked,
} from "./Module/selectors";

import Image from "./Image";

const mapStateToProps = (state) => {
  return {
    imgNumber: selectImgNumber(state),
    prevBtnClicked: selectPrevBtnClicked(state),
    nextBtnClicked: selectNextBtnClicked(state),
  };
};

const ImageContainer = connect(mapStateToProps)(Image);

export default ImageContainer;
