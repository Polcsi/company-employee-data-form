/* 
  Home page for "/" route.
*/

import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
/* Import components */
import CompanyDataForm from "../components/CompanyDataForm";
import EmployeeDataForm from "../components/EmployeeDataForm";
import TopScrollButton from "../components/TopScrollButton";

const MainPage = () => {
  const { numberOfEmployees } = useGlobalContext();
  const [numberOfForms, setNumberOfForms] = useState([]);

  useEffect(() => {
    /* Renders the number of employee forms based on how many employees setted on the slider */
    setNumberOfForms([]);
    for (let i = 0; i < numberOfEmployees; ++i) {
      /* Append the 'i' value to the 'numberOfForms' array */
      setNumberOfForms((prevForms) => [...prevForms, i]);
    }

    return () => {};
  }, [numberOfEmployees]); // if the numberOfEmployees state variable change then re-render this component
  return (
    <>
      <TopScrollButton />
      <div className="container">
        <section className="company-section section">
          <CompanyDataForm />
        </section>
        <section className="employee-section">
          <div
            className="employee-list"
            onScroll={(e) => {
              /* if the user scrolls the scrollbar become visible */
              if (e.target.classList.contains("on-scroll") === false) {
                e.target.classList.add("on-scroll");
              }
            }}
            onMouseEnter={(e) => {
              /* Show scrollbar when the mouse enter in this element */
              e.target.classList.add("on-scroll");
            }}
            onMouseLeave={(e) => {
              /* Hide scrollbar when the mouse leave this element */
              e.target.classList.remove("on-scroll");
            }}
          >
            {/* If number of employees is zero then show a message but if it is not zero then render employee forms */}
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
    </>
  );
};

export default MainPage;
