/* 
  Error page for "/*" route.
  Error page show when the user navigates to an non-implemented route
*/

import React from "react";
import { FaHome } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="container error-page">
      <h1>404</h1>
      <h3>Page Not Found</h3>
      <a href="/">
        <FaHome />
        Home
      </a>
    </div>
  );
};

export default ErrorPage;
