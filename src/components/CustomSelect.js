import React from "react";
import { jobTitles } from "../data";
import "../style/customSelect.css";

const CustomSelect = () => {
  return (
    <>
      <select className="select employeeJobTitle" defaultValue={0}>
        <option disabled hidden value={0}>
          Select Job
        </option>
        {jobTitles.map((job, index) => {
          return (
            <option key={index} value={job}>
              {job}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default CustomSelect;
