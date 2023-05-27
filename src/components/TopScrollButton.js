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
