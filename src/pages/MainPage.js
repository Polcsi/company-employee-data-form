import React, { useState, useEffect } from "react";
import CompanyDataForm from "../components/CompanyDataForm";
import EmployeeDataForm from "../components/EmployeeDataForm";

const MainPage = () => {
  useEffect(() => {
    return () => {};
  });
  return (
    <>
      <div className="container">
        <section className="company-section section">
          <CompanyDataForm />
        </section>
        <section className="employee-section">
          <div className="employee-list">
            <EmployeeDataForm number={1} />
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
