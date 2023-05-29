/* 
  This component creates a custom slider.
*/

import React, { useEffect, useRef, useCallback } from "react";
import { useGlobalContext } from "../context";

const CustomSlider = ({ min, max }) => {
  /* define variables */
  const innerRef = useRef(null);
  const sliderRef = useRef(null);
  const sliderContainer = useRef(null);
  const sliderTrack = useRef(null);
  const { setNumberOfEmployees } = useGlobalContext();

  /* Updates the ui looking and store the setted value  */
  const update = useCallback(() => {
    let valuePercentage = sliderRef.current.value / (max - min);
    innerRef.current.style.marginTop =
      (sliderRef.current.value - 1) * -30 + "px";
    sliderTrack.current.style.setProperty("--value", valuePercentage);

    setNumberOfEmployees(sliderRef.current.value);
  }, [max, min, setNumberOfEmployees]);

  /* useEffect for initialize component variables */
  useEffect(() => {
    innerRef.current.innerHTML = ""; // clear the element
    const element = sliderRef.current;
    setNumberOfEmployees(min); // set default value to min
    element.addEventListener("input", update);
    /* Fill the container element with max number of elements. This will be next to the slider and shows the setted value. */
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
