import React, { useEffect, useState } from "react";
import TopScrollButton from "../components/TopScrollButton";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaUser, FaHashtag } from "react-icons/fa";
import { MdOutlineEmail, MdDescription } from "react-icons/md";
import HomeButton from "../components/HomeButton";

const ResultsPage = () => {
  const { dataJSON } = useGlobalContext();
  const [data, setData] = useState([{ company: [{}], employees: [{}] }]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!dataJSON) {
      navigate("/", { replace: false });
    }
  });

  useEffect(() => {
    setData((prev) => (prev = JSON.parse(dataJSON)));
  }, [setData, dataJSON]);

  return (
    <>
      <HomeButton />
      <div className="container results-page">
        <section className="company-card results-section">
          <h1>company information</h1>
          <div className="company-details">
            <div className="c-data-section">
              <h2>
                <FaHashtag />
                name:
              </h2>
              <span>{data[0].company[0].name}</span>
            </div>
            <div className="c-data-section">
              <h2>
                <MdOutlineEmail />
                email:
              </h2>
              <span>{data[0].company[0].email}</span>
            </div>
            <div className="c-data-section">
              <h2>
                <MdDescription />
                description:
              </h2>
              <span>{data[0].company[0].description}</span>
            </div>
          </div>
        </section>
        <section className="employee-results-section results-section">
          <h1>employees</h1>
          <div
            className="employee-cards"
            onMouseEnter={(e) => {
              e.target.classList.add("on-scroll");
            }}
            onMouseLeave={(e) => {
              e.target.classList.remove("on-scroll");
            }}
          >
            {data[0].employees.map((employee, index) => {
              return (
                <article key={index}>
                  <div className="top-design"></div>
                  <div className="usr-image">
                    <FaUser />
                  </div>
                  <div className="row-section">
                    <h2>Name:</h2>
                    <span>{employee.name}</span>
                  </div>
                  <div className="row-section">
                    <h2>Email:</h2>
                    <span>{employee.email}</span>
                  </div>
                  <div className="row-section">
                    <h2>Age:</h2>
                    <span>{employee.age}</span>
                  </div>
                  <div className="row-section">
                    <h2>Job:</h2>
                    <span>{employee.job}</span>
                  </div>
                  <div className="row-section">
                    <h2>cv:</h2>
                    <span>{employee.cv}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
      <TopScrollButton />
    </>
  );
};

export default ResultsPage;
