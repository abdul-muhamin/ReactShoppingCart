import "./App.css";
import React from "react";
import { useEffect } from "react";

let BaseUrl = "https://localhost/Test/Employee/GetEmployees";

export function getList() {
  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  return fetch(BaseUrl, {
    method: "GET",
    headers: headers,
  }).then((response) => response.json());
}

export default getList;
