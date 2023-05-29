/* 
  Context for variables and functions for multi access.
*/

import React, { useState, useContext, useRef } from "react";
import { toast } from "react-toastify";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);
  const [dataJSON, setDataJSON] = useState("");
  const companyNameRef = useRef(null);
  const companyEmailRef = useRef(null);
  const companyDescriptionRef = useRef(null);

  function styleRequiredInput(e) {
    // Function for add a red border to empty input
    if (e.target.value) {
      e.target.classList.remove("required-input");
    } else {
      e.target.classList.add("required-input");
    }
  }

  function invalidEmail(e) {
    // add red border to invalid email
    e.target.classList.add("required-input");
  }

  const validataEmailAddress = (str) => {
    // Validate email string with regex pattern
    const pattern = new RegExp(
      "[a-zA-Z0-9_\\.\\+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-\\.]+"
    );
    if (pattern.test(str)) {
      return true;
    } else {
      return false;
    }
  };

  function toastError(message) {
    // pop-up error message
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function toastSuccess(message) {
    // pop-up success message
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  function addRequiredInputStyle(element) {
    // add required-input class to the element parameter
    element.classList.add("required-input");
  }

  async function validateEmployeeForms(employeeForms) {
    /* 
      Function for validate all of the rendered employee forms. Returns false if 
    */
    let employeeData = [];

    /* Loop through all employee forms */
    employeeForms.forEach((eForm) => {
      let errors = [];
      let employeeObject = {};

      /* loop through the inputs and validate their values  */
      eForm.childNodes.forEach((inputs) => {
        switch (inputs.type) {
          case "text": // name field
            if (!inputs.value) {
              /* if the name field is empty then style the input field and add a new error to the errors array */
              errors = [...errors, "Missing name"];
              addRequiredInputStyle(inputs);
            } else {
              /* if the name field is not empty then add a new property to the employee object */
              employeeObject = { ...employeeObject, name: inputs.value };
            }
            break;
          case "number": // age field
            if (!inputs.value) {
              errors = [...errors, "Missing age"];
              addRequiredInputStyle(inputs);
            } else if (inputs.value < 18) {
              /* if the age is less than 18 throw an error message */
              errors = [...errors, "Provide age above 17"];
              addRequiredInputStyle(inputs);
            } else {
              employeeObject = { ...employeeObject, age: inputs.value };
            }
            break;
          case "email": // email field
            if (!inputs.value) {
              errors = [...errors, "Missing email"];
              addRequiredInputStyle(inputs);
            } else if (!validataEmailAddress(inputs.value)) {
              /* Validate email address with regular expression */
              errors = [...errors, "Provide valid email address"];
              addRequiredInputStyle(inputs);
            } else {
              employeeObject = { ...employeeObject, email: inputs.value };
            }
            break;
          case "select-one": // job select field
            if (inputs.value === "0") {
              /* If the selected value is 0 then the user did not select job so create an error */
              errors = [...errors, "Missing job"];
              addRequiredInputStyle(inputs);
            } else {
              employeeObject = { ...employeeObject, job: inputs.value };
            }
            break;
          case undefined: // cv file input field
            let pdf = inputs.childNodes[1].value;
            employeeObject = { ...employeeObject, cv: pdf };
            break;

          default:
            break;
        }
      });

      if (errors.length === 4) {
        /* If missing all of the inputs then throw a short message */
        toastError(
          `Please fill the required fields in #${eForm.name} Employee Form!`
        );
      } else if (errors.length > 0) {
        /* Output all of the error message */
        errors.forEach((error) => {
          toastError(`#${eForm.name} Employee: ${error}`);
        });
      } else {
        /* If there is no any error then add a new employee object to the all employees */
        employeeData = [...employeeData, employeeObject];
      }
    });
    if (employeeData.length === parseInt(numberOfEmployees)) {
      /* If the 'employeeData' length match with the 'numberOfEmployees' then return all employees else return false */
      /* 'numberOfEmployees' means the setted value on the slider */
      return employeeData;
    } else {
      return false;
    }
  }

  async function validateCompanyForm() {
    /* 
      Function to validate company form
    */

    let errors = [];
    if (!companyNameRef.current.value) {
      /* if name field is empty then add red border to the field and send a pop-up message about the error */
      addRequiredInputStyle(companyNameRef.current);
      toastError("Company Form: Missing Name");
      errors = [...errors, 1];
    }
    if (!validataEmailAddress(companyEmailRef.current.value)) {
      /* if email field is empty then add red border to the field and send a pop-up message about the error */
      addRequiredInputStyle(companyEmailRef.current);
      toastError("Company Form: Invalid Email Address");
      errors = [...errors, 1];
    }
    if (errors.length > 0) {
      /* return false when the errors array length is zero that means the required fields are not empty */
      return false;
    }
    /* return an object which includes name, email and description */
    return [
      {
        name: companyNameRef.current.value,
        email: companyEmailRef.current.value,
        description: companyDescriptionRef.current.value,
      },
    ];
  }

  async function submitForms(e) {
    /* 
      This functions calls when the user clicks on the submit button
    */
    const employeeForms = document.querySelectorAll(".employee-form");

    const companyFormData = await validateCompanyForm(); // false if company form is not valid. If valid then returns an object of data
    const employeeFormsData = await validateEmployeeForms(employeeForms); // false if one of the employee form is not valid. If valid then returns an object of data

    if ((companyFormData !== false) & (employeeFormsData !== false)) {
      /* if the company form and the employees form is not false the convert the json data to string */
      setDataJSON(
        JSON.stringify([
          { company: companyFormData, employees: employeeFormsData },
        ])
      );
      toastSuccess("Forms have been sent successfully");
      return true;
    }
    return false;
  }

  return (
    <AppContext.Provider
      value={{
        numberOfEmployees,
        setNumberOfEmployees,
        styleRequiredInput,
        invalidEmail,
        submitForms,
        companyNameRef,
        companyEmailRef,
        companyDescriptionRef,
        dataJSON,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
