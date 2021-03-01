import React from "react";

import "./Image.css";

const Image = (props) => {
  let prevImgNumber, nextImgNumber;

  if (props.imgNumber > 0) {
    prevImgNumber = props.imgNumber - 1;
  }

  if (props.imgNumber < 9) {
    nextImgNumber = props.imgNumber + 1;
  }

  return (
    <div>
      <img
        src={
          props.imgNumber > 0
            ? "https://picsum.photos/id/" +
              prevImgNumber.toString() +
              "/400/400"
            : null
        }
        alt=""
        className="PrevImage"
        width={400}
        height={400}
        // style={
        //   props.prevBtnClicked
        //     ? { transform: "translateX(0)", opacity: "1" }
        //     : { transform: "translateX(-100%)", opacity: "0" }
        // }
      />
      <img
        src={
          "https://picsum.photos/id/" + props.imgNumber.toString() + "/400/400"
        }
        alt=""
        className="MidImage"
        // style={
        //   (props.prevBtnClicked
        //     ? { transform: "translateX(100%)", opacity: "0" }
        //     : { transform: "translateX(0)", opacity: "1" }) ||
        //   (props.nextBtnClicked
        //     ? { transform: "translateX(-100%)", opacity: "0" }
        //     : { transform: "translateX(0)", opacity: "1" })
        // }
      />
      <img
        src={
          props.imgNumber < 9
            ? "https://picsum.photos/id/" +
              nextImgNumber.toString() +
              "/400/400"
            : null
        }
        alt=""
        className="NextImage"
        width={400}
        height={400}
        // style={
        //   props.nextBtnClicked
        //     ? { transform: "translateX(0)", opacity: "1" }
        //     : { transform: "translateX(100%)", opacity: "0" }
        // }
      />
    </div>
  );
};

export default Image;
