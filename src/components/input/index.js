import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Input({ tasks, setTasks, openCloseBtn, setOpenCloseBtn }) {
  const [task, setTask] = useState({ checked: false, task: "" });

  const setTaskElement = (checked = false, taskText = "") => {
    setTask({
      checked: checked,
      task: taskText,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // boş görev eklenmesin:
    if (task.task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask({ checked: false, task: "" });

    console.log(task, "gönderildi");
  };

  return (
    <div>
      <div className="container">
        <form onSubmit={handleSubmit} className="form-row">
          <div className="icon-div">
            <button className="ghost-btn">
              <FontAwesomeIcon
                onClick={() => setOpenCloseBtn(!openCloseBtn)}
                icon={faChevronDown}
                className="icon-btn"
              />
            </button>
          </div>
          <input
            name="task"
            type="text"
            value={task.task}
            onChange={(e) => setTaskElement(false, e.target.value)}
            placeholder="Yeni görev ekle..."
            className="search-input"
          />
        </form>
      </div>
    </div>
  );
}

export default Input;
