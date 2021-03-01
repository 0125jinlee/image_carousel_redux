import React from "react";

const PrevBtn = (props) => {
  const prevBtnHandler = () => {
    props.prevBtnClicked();
  };

  return (
    <button
      className="PrevBtn"
      onClick={() => prevBtnHandler()}
      disabled={props.imgNumber === 0}
    >
      Prev
    </button>
  );
};

export default PrevBtn;
