import React from "react";

const NextBtn = (props) => {
  const nextBtnHandler = () => {
    props.nextBtnClicked();
  };

  return (
    <button
      className="NextBtn"
      onClick={() => nextBtnHandler()}
      disabled={props.imgNumber === 9}
    >
      Next
    </button>
  );
};

export default NextBtn;
