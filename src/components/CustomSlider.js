import React, { useEffect, useRef, useCallback } from "react";
import { useGlobalContext } from "../context";

const CustomSlider = ({ min, max }) => {
  const innerRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderContainer = useRef(null);
  const sliderTrack = useRef(null);
  const { setNumberOfEmployees } = useGlobalContext();

  const update = useCallback(() => {
    let valuePercentage = sliderRef.current.value / (max - min);
    innerRef.current.style.marginTop =
      (sliderRef.current.value - 1) * -30 + "px";
    sliderTrack.current.style.setProperty("--value", valuePercentage);
    setNumberOfEmployees(sliderRef.current.value);
  }, [max, min, setNumberOfEmployees]);

  useEffect(() => {
    const element = sliderRef.current;
    setNumberOfEmployees(min);
    innerRef.current.innerHTML = "";
    element.addEventListener("input", update);
    for (let i = min; i < max + 1; i++) {
      let div = document.createElement("div");
      div.innerText = i;
      innerRef.current.appendChild(div);
    }
    return () => {
      element.removeEventListener("input", update);
    };
  }, [min, max, setNumberOfEmployees, update]);
  return (
    <div id="slider-container" ref={sliderContainer}>
      <input
        id="slider"
        ref={sliderRef}
        type="range"
        min={min}
        max={max}
        defaultValue={min}
      />
      <div id="slider-track" ref={sliderTrack}></div>
      <div className="value-outer">
        <div className="value-inner" ref={innerRef}></div>
      </div>
    </div>
  );
};

export default CustomSlider;
