import React, { useEffect, useState } from "react";
import TopScrollButton from "../components/TopScrollButton";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaUser } from "react-icons/fa";

const ResultsPage = () => {
  const { dataJSON } = useGlobalContext();
  //const [data, setData] = useState([{ company: [], employees: [] }]);
  const [data, setData] = useState([
    {
      company: [
        {
          name: "Pollák Bence",
          email: "pollakbence12@gmail.com",
          description: "",
        },
      ],
      employees: [
        {
          name: "asd",
          age: "32",
          email: "pollakbence12@gmail.com",
          job: "software tester",
          cv: "",
        },
        {
          name: "asd",
          age: "32",
          email: "pollakbence12@gmail.com",
          job: "software tester",
          cv: "",
        },
        {
          name: "asd",
          age: "32",
          email: "pollakbence12@gmail.com",
          job: "software tester",
          cv: "",
        },
      ],
    },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!dataJSON) {
      //navigate("/", { replace: false });
    }
  });

  useEffect(() => {
    console.log("effect");
    //setData((prev) => (prev = JSON.parse(dataJSON)));
  }, [setData, dataJSON]);

  return (
    <>
      <div className="container results-page">
        <section className="company-card">
          <h1>company</h1>
        </section>
        <section className="employee-results-section">
          <h1>employees</h1>
          <div className="employee-cards">
            {data[0].employees.map((employee, index) => {
              return (
                <article key={index}>
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
