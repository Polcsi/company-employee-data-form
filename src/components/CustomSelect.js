import React from "react";
import { jobTitles } from "../data";
import "../style/customSelect.css";

const CustomSelect = () => {
  return (
    <>
      <select className="select employeeJobTitle">
        <option disabled hidden selected>
          Select Job
        </option>
        {jobTitles.map((job) => {
          return <option value={job}>{job}</option>;
        })}
      </select>
    </>
  );
};

export default CustomSelect;
