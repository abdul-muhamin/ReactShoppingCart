import React, { useState, useEffect, Component } from "react";
import "../AddNew.css";

// Url with IIS
const BaseUrl = "http://localhost:56964/Product/GetProducts";
const PutUrl = "http://localhost:56964/Product/UpdateProduct";

// Component Starts
function UpdateMember() {
  const [Title, setTitle] = useState("");
  const [Descrition, setDescription] = useState("");
  const [Price, setPrice] = useState("");
  const [Blob, setBlob] = useState("");

  let PutData = {};

  const uploadImage = async (e) => {
    // console.log(e.target.files);
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    const base64 = await convertBase64(file);
    setBlob(base64);
    // console.log(base64);

    console.log(
      "title is ",
      Title,
      " Description is  ",
      Descrition,
      "  and price is ",
      Price
    );
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
  const UpdateRow = () => {
    // console.log(PutData);
    let header = new Headers();
    header.append("Content-Type", "application/json");
    header.append("Accept", "application/json");

    fetch(PutUrl, {
      method: "PUT",
      headers: header,
      body: JSON.stringify(PutData),
    })
      .then((response) => response.json())
      .then(() => {
        fetch(BaseUrl, { method: "GET", headers: header }).then((res) =>
          res.json()
        );
      });
  };

  //   const ToHome = () => {
  //     console.log("pushed to <Table/>");
  //     history.push("/");
  //   };
  //   const ToAddNew = () => {
  //     console.log("pushed to <AddNew/>");
  //     history.push("/AddNew");
  //   };

  return (
    <div className="MainDiv" style={{ marginTop: 50 }}>
      <div className="text">* All fields are required</div>
      <button className="button btn-success float-right">Back to Home</button>

      <form style={{ paddingBottom: "20", borderRadius: "10" }}>
        <h2>Update Product</h2>
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

          <input
            className="button btn-primary"
            type="submit"
            value="Update Product"
          />
        </div>
      </form>
      {/* <img src={Blob} style={{ width: 200, height: 300 }} /> */}
    </div>
  );
}
export default UpdateMember;
