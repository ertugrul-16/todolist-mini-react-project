import React from "react";
import { useState } from "react";
import "./index.css";
import { useEffect } from "react";

function Footer({
  tasks,
  setTasks,
  openCloseBtn,
  setOpenCloseBtn,
  footerBtnControl,
  setFooterBtnControl,
}) {
  const clickControll = (btn_name) => ({
    backgroundColor: footerBtnControl === btn_name ? "#1F8CE6" : "gray",
    color: footerBtnControl === btn_name ? "black" : "black",
    border: "1px solid gray",
    padding: "5px 10px",
    margin: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease, color 0.3s ease", // nelerde değişim olacaksa hepsini belirtmelisin
  });

  return (
    <div className="footer-main-div">
        <div className="my-text-style">{tasks.length} item</div>
      <div className="d-grid gap-2 d-md-block component-div">
        <button
          name="All"
          className="btn btn-primary item"
          type="button"
          onClick={(e) => setFooterBtnControl(e.currentTarget.name)}
          style={clickControll("All")}
        >
          All
        </button>
        <button
          name="Active"
          className="btn btn-primary item"
          type="button"
          onClick={(e) => setFooterBtnControl(e.currentTarget.name)}
          style={clickControll("Active")}
        >
          Active
        </button>
        <button
          name="Completed"
          className="btn btn-primary item"
          type="button"
          onClick={(e) => setFooterBtnControl(e.currentTarget.name)}
          style={clickControll("Completed")}
        >
          Completed
        </button>
        <div
          name="Clear"
          className="clear-btn my-text-style"
          type="button"
          onClick={() => {
            setTasks([]);
          }}
        >
          Clear Completed
        </div>
      </div>
    </div>
  );
}

export default Footer;
