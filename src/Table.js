import "./App.css";
import React from "react";
import "./table.css";
import getList from "./FetchData";
import { useState, useEffect } from "react";
import "./table.css";
import AddNew from "./AddNew";
import UpdateMember from "./UpdateMember";
// import "bootstrap/dist/css/bootstrap.min.css";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useHistory,
	useLocation,
	Redirect,
	withRouter,
	Redirec,
} from "react-router-dom";

// Url with IIS
const BaseUrl = "https://localhost/Test/Employee/GetEmployees";
const DeleteUrl = "https://localhost/Test/Employnpmee/DeleteEmployee?id=";

// Url for Api
// const BaseUrl = "http://localhost:56964/Employee/GetEmployees";
// const DeleteUrl = "http://localhost:56964/Employee/DeleteEmployee?id=";
let ComponentNumber = 0;

// Component Starts
function Table(props) {
	//
	let history = useHistory();
	//   let location = useLocation();
	const [list, setList] = useState([]);
	//
	useEffect(() => {
		let mounted = true;

		getList().then((items) => {
			if (mounted) {
				setList(items);
			}
		});
		return () => (mounted = false);
	}, []);
	//
	const DeleteRow = (id) => (event) => {
		console.log("Deleted the record for id " + id);
		let header = new Headers();
		header.append("Content-Type", "application/json");
		header.append("Accept", "application/json");

		return fetch(DeleteUrl + id, { method: "DELETE", headers: header }).then(() => {
			fetch(BaseUrl, { method: "GET", headers: header })
				.then((response) => response.json())
				.then((result) => {
					console.log(result);
					setList(result);
				});
		});
	};

	function AddNew_Click() {
		ComponentNumber = 1;
		console.log(ComponentNumber);
		history.push("/AddNew");
		///<Redirect to="/AddNew" />;

		// return history.push("/AddNew");
	}
	const UpdateF = (ID) => (event) => {
		ComponentNumber = 2;
		console.log(ComponentNumber);
		let UpdateID = ID;
		// return <UpdateMember id={ID} />;
		// return <Redirect to="/UpdateMember" />;
		history.push({ pathname: "/UpdateMember", state: { detail: UpdateID } });
	};
	//
	return (
		<div>
			<h1>Employees Data</h1>
			<button
				style={{ float: "right" }}
				className="button  btn-primary LinkButton"
				onClick={AddNew_Click}
			>
				Add New +
			</button>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Name</th>
						<th>Department</th>
						<th>Salary</th>
						<th>Actions</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{list.map((item) => (
						<tr key={item.id}>
							<td>
								<center>{item.id}</center>
							</td>
							<td>
								<center>{item.name}</center>
							</td>
							<td>
								<center>{item.department}</center>
							</td>
							<td>
								<center>{item.salary}</center>
							</td>
							<td>
								<center>
									<button
										// key={item.id}
										className="button btn-danger"
										onClick={DeleteRow(item.id)}
									>
										Delete
									</button>
								</center>
							</td>
							<td>
								<center>
									<button
										// key={item.id}
										className="button btn-warning"
										onClick={UpdateF(item.id)}
									>
										Update
									</button>
								</center>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<button
				style={{ float: "right" }}
				className="button  btn-primary LinkButton"
				onClick={AddNew_Click}
			>
				Add New +
			</button>
		</div>
	);
}
//export default Table;
// export default withRouter(Table); //While using the  [ WithRouter Hook ]  > > > > > > > > > > > > use this syntax
export default Table;
