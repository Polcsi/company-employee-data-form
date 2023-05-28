import React, { useEffect, useState, useRef, useCallback } from "react";
import TopScrollButton from "../components/TopScrollButton";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../context";
import { FaUser, FaHashtag } from "react-icons/fa";
import { MdOutlineEmail, MdDescription } from "react-icons/md";

const ResultsPage = () => {
  const { dataJSON } = useGlobalContext();
  const employeeCardsRef = useRef(null);
  //const [data, setData] = useState([{ company: [], employees: [] }]);
  const [data, setData] = useState([
    {
      company: [
        {
          name: "Pollák Bence",
          email: "pollakbence12@gmail.com",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus iaculis mattis interdum. Integer aliquet nisl ut mi fringilla aliquet. Vestibulum sed scelerisque augue. Sed ut neque nec massa sollicitudin maximus posuere et metus. Vivamus ac ex massa. Phasellus fermentum augue in massa suscipit euismod. Phasellus felis erat, ullamcorper ut sem quis, sollicitudin consequat turpis. Nullam molestie convallis eros, eget dignissim elit blandit eu. Fusce non mi id nunc sollicitudin vehicula. Sed ac sapien vitae sapien aliquet lobortis. In consectetur magna metus, et suscipit metus porttitor quis. Aenean aliquam nunc lectus, ac sollicitudin mauris faucibus eget. Ut imperdiet facilisis turpis, sit amet pellentesque velit iaculis eget. Cras a iaculis lectus, et fringilla mi.",
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

  const scrollEvent = useCallback((e) => {
    e.preventDefault();
    employeeCardsRef.current.scrollLeft += e.deltaY;
  }, []);

  useEffect(() => {
    if (!dataJSON) {
      //navigate("/", { replace: false });
    }
  });

  useEffect(() => {
    console.log("effect");
    //setData((prev) => (prev = JSON.parse(dataJSON)));
  }, [setData, dataJSON]);

  useEffect(() => {
    const cardRef = employeeCardsRef.current;
    cardRef.addEventListener("wheel", scrollEvent);

    return () => {
      cardRef.removeEventListener("wheel", scrollEvent);
    };
  }, [scrollEvent]);

  return (
    <>
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
          <div className="employee-cards on-scroll" ref={employeeCardsRef}>
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
