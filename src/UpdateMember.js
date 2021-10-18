import React, { useState, useEffect, Component } from "react";
import { useHistory, useLocation } from "react-router-dom";
import "./AddNew.css";
// Url with IIS
const BaseUrl = "https://localhost/Test/Employee/GetEmployees";
const PutUrl = "https://localhost/Test/Employee/UpdateEmployee";

// Url for Api
// const BaseUrl = "https://localhost/Test/Employee/GetEmployees";
// const PutUrl = "http://localhost:56964/Employee/UpdateEmployee";

// Component Starts
function UpdateMember(props) {
	const [list, setList] = useState(null);
	// const [ID, setID] = useState(null);
	const [Name, setName] = useState("");
	const [Department, setDepartment] = useState("");
	const [Salary, setSalary] = useState("");
	let history = useHistory();
	let location = useLocation();
	// console.log(props.UpdateID);
	// let Update_ID = props.UpdateID;
	// let NewId = props.Update_ID;
	let Imported_ID = location.state.detail;
	const PutData = {
		id: Imported_ID,
		name: Name,
		department: Department,
		salary: Salary,
	};
	const UpdateRow = () => {
		console.log(PutData);
		let header = new Headers();
		header.append("Content-Type", "application/json");
		header.append("Accept", "application/json");
		// setID(props.UpdateID);
		fetch(PutUrl, {
			method: "PUT",
			headers: header,
			body: JSON.stringify(PutData),
		})
			.then((response) => response.json())
			.then(() => {
				fetch(BaseUrl, { method: "GET", headers: header }).then((res) => res.json());
			});
		history.push("/Table");
	};
	const ToHome = () => {
		console.log("pushed to <Table/>");
		history.push("/");
	};
	const ToAddNew = () => {
		console.log("pushed to <AddNew/>");
		history.push("/AddNew");
	};

	return (
		<div className="UpdateMainDiv">
			<div className="text">* All fields are required</div>
			<button className="button btn-success " onClick={ToHome}>
				Back to Home
			</button>
			<button className="button btn-primary " onClick={ToAddNew}>
				Add New +
			</button>
			<hr />
			<form onSubmit={UpdateRow}>
				<div>
					<h2>Update Information</h2>

					<div className="outerDiv">
						{/* <h3>{props.UpdateID}</h3> */}
						{/* <div className="innerDiv">
              <input
                type="text"
                autoComplete="off"
                name="id"
                placeholder="ID"
                // value={Update_ID}
                // onChange={(event) => setID(event.target.value)}
              />
            </div> */}

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
								onChange={(event) => setDepartment(event.target.value)}
							/>
						</div>

						<div className="innerDiv">
							<input
								type="text"
								autoComplete="off"
								name="Salary"
								placeholder="Salary"
								onChange={(event) => setSalary(event.target.value)}
							/>
						</div>
						<button style={{ float: "right" }} className="button btn-warning" type="submit">
							Update
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
export default UpdateMember;
