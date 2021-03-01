import { connect } from "react-redux";

import { selectImgNumber } from "./Module/selectors";

import App from "./App";

const mapStateToProps = (state) => {
  return {
    imgNumber: selectImgNumber(state),
  };
};

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
