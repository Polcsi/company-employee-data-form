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
    if (e.target.value) {
      e.target.classList.remove("required-input");
    } else {
      e.target.classList.add("required-input");
    }
  }

  function invalidEmail(e) {
    e.target.classList.add("required-input");
  }

  const validataEmailAddress = (str) => {
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
    element.classList.add("required-input");
  }

  async function validateEmployeeForms(employeeForms) {
    let employeeData = [];

    employeeForms.forEach((eForm) => {
      let errors = [];
      let employeeObject = {};

      eForm.childNodes.forEach((inputs) => {
        /* console.log(inputs);
        console.log(inputs.type); */
        switch (inputs.type) {
          case "text":
            if (!inputs.value) {
              errors = [...errors, "Missing name"];
              addRequiredInputStyle(inputs);
            } else {
              employeeObject = { ...employeeObject, name: inputs.value };
            }
            break;
          case "number":
            if (!inputs.value) {
              errors = [...errors, "Missing age"];
              addRequiredInputStyle(inputs);
            } else if (inputs.value < 18) {
              errors = [...errors, "Provide age above 18"];
              addRequiredInputStyle(inputs);
            } else {
              employeeObject = { ...employeeObject, age: inputs.value };
            }
            break;
          case "email":
            if (!inputs.value) {
              errors = [...errors, "Missing email"];
              addRequiredInputStyle(inputs);
            } else if (!validataEmailAddress(inputs.value)) {
              errors = [...errors, "Provide valid email address"];
              addRequiredInputStyle(inputs);
            } else {
              employeeObject = { ...employeeObject, email: inputs.value };
            }
            break;
          case "select-one":
            if (inputs.value === "0") {
              errors = [...errors, "Missing job"];
              addRequiredInputStyle(inputs);
            } else {
              employeeObject = { ...employeeObject, job: inputs.value };
            }
            break;
          case undefined:
            let pdf = inputs.childNodes[1].value;
            employeeObject = { ...employeeObject, cv: pdf };
            break;

          default:
            break;
        }
      });

      if (errors.length === 4) {
        toastError(
          `Please fill the required fields in #${eForm.name} Employee Form!`
        );
      } else if (errors.length > 0) {
        errors.forEach((error) => {
          toastError(`#${eForm.name} Employee: ${error}`);
        });
      } else {
        employeeData = [...employeeData, employeeObject];
      }
    });
    if (employeeData.length === parseInt(numberOfEmployees)) {
      return employeeData;
    } else {
      return false;
    }
  }

  async function validateCompanyForm() {
    let errors = [];
    if (!companyNameRef.current.value) {
      addRequiredInputStyle(companyNameRef.current);
      toastError("Company Form: Missing Name");
      errors = [...errors, 1];
    }
    if (!validataEmailAddress(companyEmailRef.current.value)) {
      addRequiredInputStyle(companyEmailRef.current);
      toastError("Company Form: Invalid Email Address");
      errors = [...errors, 1];
    }
    if (errors.length > 0) {
      return false;
    }
    return [
      {
        name: companyNameRef.current.value,
        email: companyEmailRef.current.value,
        description: companyDescriptionRef.current.value,
      },
    ];
  }

  async function submitForms(e) {
    const employeeForms = document.querySelectorAll(".employee-form");

    const companyFormData = await validateCompanyForm();
    const employeeFormsData = await validateEmployeeForms(employeeForms);

    if ((companyFormData !== false) & (employeeFormsData !== false)) {
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
