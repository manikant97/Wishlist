import "./User.css";
import React, { useState } from "react";

export default function User({ addtothelist, clearAll }) {
  const [item, setItem] = useState({ updata: "" });
  function whenSubmmit(e) {
    e.preventDefault();
    addtothelist(item);
    setItem({ updata: "" });
  }
  function handleChange(e) {
    e.preventDefault();
    setItem({ updata: e.target.value });
  }
  function setClearAll(e) {
    clearAll(true);
    e.preventDefault();
  }
  return (
    <div className="parent">
      <form>
        <label htmlFor="inputwish" className="label">
          <b> Wish : </b>
        </label>
        <input
          type="text"
          id="inputwish"
          value={item.updata}
          onChange={handleChange}
        />
        <br />
        <button onClick={whenSubmmit} id="add"> Update </button>
        <button onClick={setClearAll} id="clear"> Clear All </button>
      </form>
    </div>
  );
}
