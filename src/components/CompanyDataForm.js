import React from "react";
import CustomSlider from "./CustomSlider";
import "../style/customSlider.css";

import { useGlobalContext } from "../context";

const CompanyDataForm = () => {
  const {
    styleRequiredInput,
    invalidEmail,
    submitForms,
    companyNameRef,
    companyEmailRef,
    companyDescriptionRef,
  } = useGlobalContext();

  return (
    <>
      <form>
        <div className="title">
          <span id="welcome">Company Information</span>
          <span id="content">Please fill the fields</span>
        </div>
        <input
          required
          placeholder="Name"
          className="input"
          id="name"
          type="text"
          ref={companyNameRef}
          onInput={(e) => styleRequiredInput(e)}
        ></input>
        <input
          required
          placeholder="Email"
          className="input"
          id="email"
          type="email"
          ref={companyEmailRef}
          onInput={(e) => styleRequiredInput(e)}
          onInvalid={(e) => invalidEmail(e)}
        ></input>
        <CustomSlider min={1} max={100} />
        <textarea
          id="description"
          placeholder="Description"
          className="input"
          ref={companyDescriptionRef}
        ></textarea>
      </form>
      <button id="submitbtn" type="button" onClick={(e) => submitForms(e)}>
        Submit
      </button>
    </>
  );
};

export default CompanyDataForm;
