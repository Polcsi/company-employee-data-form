import React from "react";
import { jobTitles } from "../data";
import { useGlobalContext } from "../context";

const CustomSelect = () => {
  const { styleRequiredInput, invalidEmail } = useGlobalContext();

  return (
    <>
      <select
        className="select employeeJobTitle required-input"
        defaultValue={0}
        onChange={(e) => styleRequiredInput(e)}
      >
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
