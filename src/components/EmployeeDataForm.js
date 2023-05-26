import React from "react";
import CustomSelect from "./CustomSelect";
import { useGlobalContext } from "../context";

const EmployeeDataForm = ({ number }) => {
  const { styleRequiredInput, invalidEmail } = useGlobalContext();

  return (
    <div className="section single-employee">
      <h1>#{number} Employee</h1>
      <form>
        <input
          className="employeeName input required-input"
          type="text"
          placeholder="Name"
          required=""
          onInput={(e) => styleRequiredInput(e)}
        />
        <input
          className="employeeAge input required-input"
          min={18}
          type="number"
          placeholder="Age"
          required=""
          onInput={(e) => styleRequiredInput(e)}
        />
        <input
          className="employeeEmail input required-input"
          type="text"
          placeholder="Email"
          required=""
          onInput={(e) => styleRequiredInput(e)}
          onInvalid={(e) => invalidEmail(e)}
        />
        <CustomSelect />
        <div className="employeeCVFile">
          <label>Select CV:</label>
          <input type="file" accept=".pdf" />
        </div>
      </form>
    </div>
  );
};

export default EmployeeDataForm;
