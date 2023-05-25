import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
