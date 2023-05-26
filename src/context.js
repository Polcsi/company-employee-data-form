import React, { useState, useContext } from "react";

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

  return (
    <AppContext.Provider
      value={{
        numberOfEmployees,
        setNumberOfEmployees,
        styleRequiredInput,
        invalidEmail,
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
