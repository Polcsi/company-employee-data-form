import React from "react";
import CustomSlider from "./CustomSlider";
import "../style/customSlider.css";

const CompanyDataForm = () => {
  return (
    <form>
      <div className="title">
        <span id="welcome">Company Information</span>
        <span id="content">Please fill the fields</span>
      </div>
      <input
        autoComplete="off"
        required=""
        placeholder="Name"
        className="input"
        id="name"
        type="text"
      ></input>
      <input
        autoComplete="off"
        required=""
        placeholder="Email"
        className="input"
        id="email"
        type="email"
      ></input>
      <CustomSlider min={0} max={100} />
      <textarea
        id="description"
        placeholder="Description"
        className="input"
      ></textarea>
      <button id="submitbtn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default CompanyDataForm;
