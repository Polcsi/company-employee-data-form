import React, { useEffect, useRef } from "react";

const CustomSlider = ({ min, max }) => {
  const innerRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderContainer = useRef(null);
  const sliderTrack = useRef(null);

  function update() {
    let valuePercentage = sliderRef.current.value / (max - min);
    innerRef.current.style.marginTop =
      (sliderRef.current.value / 1) * -30 + "px";
    sliderTrack.current.style.setProperty("--value", valuePercentage);
  }

  useEffect(() => {
    sliderRef.current.addEventListener("input", update);
    for (let i = min; i < max + 1; i++) {
      let div = document.createElement("div");
      div.innerText = i;
      innerRef.current.appendChild(div);
    }
    update();
    return () => {
      sliderRef.current.removeEventListener("input", update);
    };
  });
  return (
    <div id="slider-container" ref={sliderContainer}>
      <input
        id="slider"
        ref={sliderRef}
        type="range"
        min={min}
        max={max}
        defaultValue={max / 2}
      />
      <div id="slider-track" ref={sliderTrack}></div>
      <div className="value-outer">
        <div className="value-inner" ref={innerRef}></div>
      </div>
    </div>
  );
};

export default CustomSlider;
