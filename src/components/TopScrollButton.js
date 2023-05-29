/* 
  This component creates a button on the right bottom corner that scrolls top of the page. The button is only visible when the user is scrolled.
*/

import React, { useEffect, useState, useCallback } from "react";
import { FaArrowUp } from "react-icons/fa";

const TopScrollButton = () => {
  const [scrollTopDistance, setScrollTopDistance] = useState(0);

  const scrollEvent = useCallback((e) => {
    setScrollTopDistance(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrollEvent);

    return () => {
      window.removeEventListener("scroll", scrollEvent);
    };
  }, [scrollEvent]);

  // The component is only rendered when the scrolling distance is above 200
  if (scrollTopDistance < 200) {
    return <></>;
  } else {
    return (
      <div
        className="top-scroll-container"
        onClick={(e) => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </div>
    );
  }
};

export default TopScrollButton;
