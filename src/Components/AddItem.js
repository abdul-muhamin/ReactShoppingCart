import "../AddNew.css";
import React, { Component, useState } from "react";
import { useHistory } from "react-router";

const BaseUrl = "http://localhost:56964/Product/GetProducts";
const PostUrl = "http://localhost:56964/Product/AddProduct";

function AddItem() {
	const files = [];
	const [Title, setTitle] = useState("");
	const [Descrition, setDescription] = useState("");
	const [Price, setPrice] = useState("");
	const [Blob, setBlob] = useState("");
	const [List, setList] = useState("");
	// const [Files, setFiles] = useState([]);
	//  let history = new History();

	let photo = {
		uri: "https://us.khaadi.com/media/catalog/product/a/2/a21386_grey_1_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=1500&width=1000&canvas=1000:1500",
	};
	let formData = new FormData();
	formData.append("product[name]", "image");
	formData.append("product[image]", {
		uri: photo.uri,
		name: "Khadi Suit",
		type: "image/jpg",
	});

	let ProductDetail = {
		title: Title,
		description: Descrition,
		price: Price,
		image64: formData,
		imageBlob: Blob,
	};

	const PostProduct = (event) => {
		event.preventDefault();
		console.log("Post Started");
		// console.log(JSON.stringify(ProductDetail));

		let header = new Headers();
		header.append("Content-Type", "application/json");
		header.append("Accept", "application/json");

		fetch(PostUrl, {
			method: "POST",
			headers: header,
			body: JSON.stringify(ProductDetail),
		}).then(() => {
			fetch(BaseUrl, { method: "GET", headers: header })
				//
				.then((response) => response.json())
				.then((result) => {
					// console.log(result);
					setList(result);
					// props.ComponentNumber = 0;
				});
		});
		/// PostProduct method main body
		// history.push("/");
	};

	// const ToHome = () => {
	//   console.log("pushed to Home ");
	//   history.push("/");
	// };
	const uploadImage = async (e) => {
		// console.log(e.target.files);
		e.preventDefault();
		const file = e.target.files[0];
		console.log(file);
		const base64 = await convertBase64(file);
		setBlob(base64);
		// console.log(base64);

		console.log("title is ", Title, " Description is  ", Descrition, "  and price is ", Price);
		console.log("Converted to Base 64");
	};

	const convertBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});
	};
	return (
		<div className="MainDiv" style={{ marginTop: 50 }}>
			<div className="text">* All fields are required</div>
			<button className="button btn-success float-right">Back to Home</button>

			<form style={{ paddingBottom: "20", borderRadius: "10" }} onSubmit={PostProduct}>
				<h2>Add New Product</h2>
				<div className="outerDiv">
					<div className="innerDiv">
						<input
							type="text"
							autoComplete="off"
							name="title"
							placeholder="Title"
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>

					<div className="innerDiv">
						<input
							type="text"
							autoComplete="off"
							name="description"
							placeholder="Description"
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<div className="innerDiv" style={{ marginBottom: 15 }}>
						<input
							type="text"
							autoComplete="off"
							name="price"
							placeholder="Price"
							onChange={(e) => setPrice(e.target.value)}
						/>
					</div>

					<div className="innerDiv">
						<input
							type="file"
							placeholder="Add Image"
							name="blob"
							onChange={(e) => {
								uploadImage(e);
							}}
						/>
					</div>

					{/* <FileBase64 multiple={true} onDone={getFiles.bind(this)} /> */}

					<input className="button btn-primary" type="submit" value="Submit Product" />
				</div>
			</form>
			{/* <img src={Blob} style={{ width: 200, height: 300 }} /> */}
		</div>
	);
}

export default AddItem;
