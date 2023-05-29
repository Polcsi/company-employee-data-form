/* 
  This is a component which creates a button and the user will be able to navigate back to the home page with this button.
*/
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
