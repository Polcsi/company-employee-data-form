import React from "react";
import CustomSelect from "./CustomSelect";

const EmployeeDataForm = ({ number }) => {
  return (
    <div className="section single-employee">
      <h1>#{number} Employee</h1>
      <form>
        <input className="employeeName input" type="text" placeholder="Name" />
        <input
          className="employeeAge input"
          min={1}
          type="number"
          placeholder="Age"
        />
        <input
          className="employeeEmail input"
          type="text"
          placeholder="Email"
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
