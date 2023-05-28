import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const HomeButton = () => {
  return (
    <Link className="home-button" to="/">
      <IoIosArrowRoundBack />
    </Link>
  );
};

export default HomeButton;
