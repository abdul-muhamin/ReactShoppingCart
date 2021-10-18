import * as React from "react";
import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { CardActionArea, Container } from "@mui/material";
import FilterBar from "./FilterBar";

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
})(({ theme, expand }) => ({
	transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
	marginLeft: "auto",
	transition: theme.transitions.create("transform", {
		duration: theme.transitions.duration.shortest,
	}),
}));

export default function Cards(props) {
	const [expanded, setExpanded] = React.useState(false);
	// const [Data, setData] = useState([]);
	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	// if (props.NewFilters == [])
	return (
		<Grid container spacing={1}>
			{props.cards.map((Record) => (
				<Grid item xl={3} md={4} sm={12} xs={12} style={{ marginBootom: 10 }} key={Record.id}>
					<Item>
						<Card elevation={2} sx={{ maxWidth: 345, maxHeight: 300 }}>
							<CardActionArea>
								<CardMedia component="img" height="140" image={Record.image64} alt="green iguana" />
								<CardContent>
									<Typography gutterBottom variant="h5" component="span">
										{Record.title}
										<Typography variant="h6" style={{ fontSize: 12 }}>
											({Record.category})
										</Typography>
									</Typography>

									<Typography variant="body2" color="text.secondary">
										{Record.description}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Item>
				</Grid>
			))}
		</Grid>
	);
}
