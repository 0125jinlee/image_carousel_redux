import { connect } from "react-redux";

import { prevBtnClicked } from "./Module";
import { selectImgNumber } from "./Module/selectors";

import PrevBtn from "./PrevBtn";

const mapStateToProps = (state) => {
  return {
    imgNumber: selectImgNumber(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    prevBtnClicked: () => dispatch(prevBtnClicked()),
  };
};

const PrevBtnContainer = connect(mapStateToProps, mapDispatchToProps)(PrevBtn);

export default PrevBtnContainer;
