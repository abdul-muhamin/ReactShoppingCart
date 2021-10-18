import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import "./AddNew.css";
import "./table.css";
import Table from "./Table";
import Button from "react-bootstrap/Button";
import { right } from "@popperjs/core";

// Url with IIS
const BaseUrl = "https://localhost/Test/Employee/GetEmployees";
const PostUrl = "https://localhost/Test/Employee/AddEmployee";

// Url for Api
// const BaseUrl = "http://localhost:56964/Employee/GetEmployees";
// const PostUrl = "http://localhost:56964/Employee/AddEmployee";

// Component Starts
function AddNew(props) {
  const [list, setList] = useState(null);
  const [Name, setName] = useState("");
  const [Department, setDepartment] = useState("");
  const [Salary, setSalary] = useState("");
  let history = useHistory();
  const Data = {
    name: Name,
    department: Department,
    salary: Salary,
  };
  // const Insert = () => {};
  const PostData = () => {
    console.log("entered Post Data");
    let header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("Accept", "application/json");
    //

    fetch(PostUrl, {
      method: "POST",
      headers: header,
      body: JSON.stringify(Data),
    })
      ///
      .then(() => {
        fetch(BaseUrl, { method: "GET", headers: header })
          //
          .then((response) => response.json())
          .then((result) => {
            // console.log(result);
            setList(result);
            // props.ComponentNumber = 0;
          });
      });
    history.push("/");
  };
  const ToHome = () => {
    console.log("pushed to <Table/>");
    history.push("/");
  };
  return (
    <div className="MainDiv" style={{ height: 450 }}>
      <div className="text">* All fields are required</div>
      <button className="button btn-success float-right" onClick={ToHome}>
        Back to Home
      </button>
      <form onSubmit={PostData}>
        <h2>Add New Members</h2>
        <span>* All fields are required</span>
        <div className="outerDiv">
          <div className="innerDiv">
            <input
              type="text"
              autoComplete="off"
              name="name"
              placeholder="Name"
              onChange={(event) => setName(event.target.value)}
            />
          </div>

          <div className="innerDiv">
            <input
              type="text"
              autoComplete="off"
              name="Department"
              placeholder="Department"
              onChange={(event) => {
                setDepartment(event.target.value);
                console.log("Dept entered");
              }}
            />
          </div>

          <div className="innerDiv">
            <input
              type="text"
              autoComplete="off"
              name="Salary"
              placeholder="Salary"
              onChange={(event) => {
                setSalary(event.target.value);
                console.log("Salary entered");
              }}
            />
          </div>
          <input
            className="button btn-primary"
            type="submit"
            value="Submit Data"
          />
        </div>
      </form>
    </div>
  );
}
export default AddNew;
