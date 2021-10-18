import React, { Component, useState } from "react";
import "./styles/css/FilterBar.css";
import { Checkbox, FormGroup, FormControlLabel, Button, Input } from "@mui/material";
import { Domain, Filter, Label } from "@material-ui/icons";
import Link from "@mui/material/Link";

///

export default function FilterBar(props) {
	const [filters, setFilters] = useState([]);
	let isFilter = false;
	const IncludedInState = "check.includes(e.target.value)";
	const Checked = "e.target.checked";
	const check = [];
	const FilterEvent = (e) => {
		if (!check.includes(e.target.value) && Checked) {
			check.push(e.target.value);
			isFilter = true;
		} else if (!e.target.checked && check.includes(e.target.value) && check.length >= 0) {
			isFilter = true;
			check.pop(e.target.value);
		} else if (check.length == 0) {
			isFilter = false;
		}
		setFilters(check);
	};
	props.onAddingFilter(filters);

	const dataFilterHandler = (e) => {
		setFilters(check);
		// console.log(filters);
	};

	return (
		<div className="FilterBar">
			<h2>Filter</h2>
			<label>
				<Input type="checkBox" /> Category 1
			</label>
			<FormGroup
				className="formGroup"
				style={{ paddingLeft: 40 }}
				onSubmit={(e) => console.log("submitted")}
			>
				{props.Cards.map((filtered) => (
					<FormControlLabel
						key={filtered.id}
						label={filtered.category}
						control={<Checkbox value={filtered.category} onChange={FilterEvent} />}
					/>
				))}

				<Button variant="contained" style={{ width: 100 }} type="submit">
					Filter
				</Button>
			</FormGroup>
		</div>
	);
}
