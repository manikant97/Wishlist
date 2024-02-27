import React from "react";
import "./Data.css";
export default function Data({ sendData, DeleteItem }) {
  let items = sendData.map((item, index) => (
    <div key={index} className="parent">
      <li>{item}</li>
      <div className="delete">
        <button onClick={() => DeleteItem(index)}>Delete</button>
      </div>
    </div> 
  ));
  return (
    <div>
      <h1 style={{ fontFamily: "Luxurious Roman" }}>Wish List : </h1>
      <ul><b>{items}</b></ul>
    </div>
  );
}