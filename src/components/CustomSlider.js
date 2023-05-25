import React, { useEffect, useRef } from "react";

const CustomSlider = ({ min, max }) => {
  const innerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    console.log(max);
    for (let i = min; i < max + 1; i++) {
      let div = document.createElement("div");
      div.innerText = i;
      innerRef.current.appendChild(div);
    }
    return () => {};
  });
  return (
    <div id="slider-container">
      <input id="slider" ref={sliderRef} type="range" min={min} max={max} />
      <div id="slider-track"></div>
      <div className="value-outer">
        <div className="value-inner" ref={innerRef}></div>
      </div>
    </div>
  );
};

export default CustomSlider;
