import "./App.css";
import React from "react-dom";
import Table from "./Table";
import { Component, useState, useEffect } from "react";
import "./table.css";
import { BrowserRouter as Router, Switch, Route, Link, RouteHandler } from "react-router-dom";
import AddNew from "./AddNew";
import UpdateMember from "./UpdateMember";
import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./Components/LandingPage";
import AddItem from "./Components/AddItem";
import UpdateItem from "./Components/UpdateItem";

//////
// const BaseUrl = "https://localhost/Test/Employee/GetEmployees";
// const DeleteUrl = "https://localhost/Test/Employee/DeleteEmployee?id=";
// const PostUrl = "https://localhost/Test/Employee/AddEmployee";
// const PutUrl = "https://localhost/Test/Employee/UpdateEmployee";

const BaseUrl = "http://localhost:56964/Employee/GetEmployees";
const DeleteUrl = "http://localhost:56964/Employee/DeleteEmployee?id=";
const PostUrl = "http://localhost:56964/Employee/AddEmployee";
const PutUrl = "http://localhost:56964/Employee/UpdateEmployee";

// Component Starts
function App(props) {
	// const Flag = props.
	// if()
	// if (props.ComponentNumber == 0) {
	//   return (
	//     <div>
	//       <Table />
	//     </div>
	//   );
	// }

	// if (props.ComponentNumber == 1) {
	//   return (
	//     <div>
	//       <AddNew />
	//     </div>
	//   );
	// }

	// if (props.ComponentNumber == 2) {
	//   return (
	//     <div>
	//       <UpdateMember />
	//     </div>
	//   );
	// }

	return (
		<div className="BgColor">
			{/* <Router>
        <Link to="/AddNew"></Link>
        <Link to="/UpdateMember"></Link>
        <Link to="/"></Link>

        <Switch>
          <Route path="/AddNew">
            <AddNew ComponentNumber={1} />
          </Route>
          <Route path="/UpdateMember">
            <UpdateMember ComponentNumber={2} />
          </Route>
          <Route path="/">
            <Table />
          </Route>
        </Switch>
      </Router> */}
			{/* <LandingPage /> */}
			{/* <Cards /> */}
			{/* <Table /> */}
			{/* <CardMui /> */}
			<LandingPage />
			{/* <AddItem /> */}
			{/* <UpdateItem /> */}
		</div>
	);
}
export default App;
