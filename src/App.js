import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import pages
import MainPage from "./pages/MainPage";
import ErrorPage from "./pages/ErrorPage";
import ResultsPage from "./pages/ResultsPage";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="results" element={<ResultsPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
