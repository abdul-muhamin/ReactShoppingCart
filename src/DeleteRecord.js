import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const BaseUrl = "http://localhost:56964/Employee/GetEmployees";
const DeleteUrl = "http://localhost:56964/Employee/DeleteEmployee?id=";

function DeleteRecord(props) {
  //const [status, setStatus] = useState([]);
  let header = new Headers();
  header.append("Content-Type", "application/json");
  header.append("Accept", "application/json");

  return fetch(DeleteUrl + props, { method: "DELETE", headers: header }).then(
    () => {
      fetch(BaseUrl, { method: "GET", headers: header })
        .then((response) => response.json())
        .then((result) => console.log(result));
    }
  );

  // .then(() =>
  //   setStatus("Deleted")
  // );
}

export default DeleteRecord;
