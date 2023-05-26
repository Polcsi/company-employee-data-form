import React from "react";
import CustomSlider from "./CustomSlider";
import "../style/customSlider.css";

import { useGlobalContext } from "../context";

const CompanyDataForm = () => {
  const { styleRequiredInput, invalidEmail } = useGlobalContext();

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
        className="input required-input"
        id="name"
        type="text"
        onInput={(e) => styleRequiredInput(e)}
      ></input>
      <input
        autoComplete="off"
        required=""
        placeholder="Email"
        className="input  required-input"
        id="email"
        type="email"
        onInput={(e) => styleRequiredInput(e)}
        onInvalid={(e) => invalidEmail(e)}
      ></input>
      <CustomSlider min={1} max={100} />
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
