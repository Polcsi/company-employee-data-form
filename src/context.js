import React, { useState, useContext } from "react";
import { toast } from "react-toastify";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [numberOfEmployees, setNumberOfEmployees] = useState(0);

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

  function submitForms(e) {
    const employeeForms = document.querySelectorAll(".employee-form");

    employeeForms.forEach((eForm) => {
      let errors = [];
      console.log(eForm);

      eForm.childNodes.forEach((inputs) => {
        console.log(inputs);
        console.log(inputs.type);
        switch (inputs.type) {
          case "text":
            if (!inputs.value) {
              errors = [...errors, "Missing name"];
            }
            break;
          case "number":
            if (!inputs.value) {
              errors = [...errors, "Missing age"];
            } else if (inputs.value < 18) {
              errors = [...errors, "Provide age above 18"];
            }
            break;
          case "email":
            if (!inputs.value) {
              errors = [...errors, "Missing email"];
            } else if (!validataEmailAddress(inputs.value)) {
              errors = [...errors, "Provide valid email address"];
            }
            break;
          case "select-one":
            if (inputs.value === "0") {
              errors = [...errors, "Missing job"];
            }
            break;
          default:
            break;
        }
      });
      if (errors.length === 4) {
        toastError(
          `Please fill the required fields in #${eForm.name} Employee Form!`
        );
      } else {
        errors.forEach((error) => {
          toastError(`#${eForm.name} Employee: ${error}`);
        });
      }
    });
  }

  return (
    <AppContext.Provider
      value={{
        numberOfEmployees,
        setNumberOfEmployees,
        styleRequiredInput,
        invalidEmail,
        submitForms,
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
