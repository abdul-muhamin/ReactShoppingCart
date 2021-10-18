import React, { Component, useState, useEffect } from "react";
import FilterBar from "./FilterBar";
import Cards from "./Cards";
import Grid from "@mui/material/Grid";

///
const BaseUrl = "http://localhost:56964/Product/GetProducts";
let header = new Headers();
header.append("Content-Type", "application/json");
header.append("Accept", "application/json");

///

export default function LandingPage(props) {
	const [Data, setData] = useState([]);
	const [newFilters, setNewFilters] = useState([]);
	useEffect(() => {
		fetch(BaseUrl, { method: "GET", headers: header })
			.then((response) => response.json())
			.then((Items) => setData(Items));
	}, []);

	const FilterAddHandler = (FiltersSentUp) => {
		newFilters.push(FiltersSentUp);
		console.log(FiltersSentUp);
		// console.log(newFilters);
		// setNewFilters(FiltersSentUp);
		// console.group(newFilters);
	};
	return (
		<div>
			<Grid container>
				<Grid item xl={2} md={2}>
					<FilterBar onAddingFilter={FilterAddHandler} Cards={Data} />
				</Grid>
				<Grid item xl={10} md={10} sm={12} xs={12}>
					<Cards cards={Data} NewFilters={newFilters} />
				</Grid>
			</Grid>
		</div>
	);
}
