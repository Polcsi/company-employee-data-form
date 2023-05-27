import React, { useState, useEffect } from "react";
import CompanyDataForm from "../components/CompanyDataForm";
import EmployeeDataForm from "../components/EmployeeDataForm";
import TopScrollButton from "../components/TopScrollButton";
import { useGlobalContext } from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainPage = () => {
  const { numberOfEmployees } = useGlobalContext();
  const [numberOfForms, setNumberOfForms] = useState([]);

  useEffect(() => {
    setNumberOfForms([]);
    for (let i = 0; i < numberOfEmployees; ++i) {
      setNumberOfForms((prevForms) => [...prevForms, i]);
    }

    return () => {};
  }, [numberOfEmployees]);
  return (
    <>
      <TopScrollButton />
      <div className="container">
        <section className="company-section section">
          <CompanyDataForm />
        </section>
        <section className="employee-section">
          <div className="employee-list">
            {numberOfEmployees === "0" ? (
              <h4 className="zero-employee">Number of Employees is zero!</h4>
            ) : (
              numberOfForms.map((employeeForm, index) => {
                return (
                  <EmployeeDataForm key={index} number={employeeForm + 1} />
                );
              })
            )}
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default MainPage;
