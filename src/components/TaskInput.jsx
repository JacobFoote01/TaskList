import React, { useState } from "react";
import * as api from "../index.js";

export default function TaskInput({ data, setData }) {
  const [taskValue, setTaskValue] = useState("");
  const [timeValue, setTimeValue] = useState("");

  const addTask = async () => {
    const newTask = {
      description: taskValue,
      est_time: timeValue,
    };
    const newData = await api.addTask(newTask);

    setData(newData);

    setTaskValue("");
    setTimeValue("");
  };

  return (
    <div className="inputContainer">
      <div className="taskContainer">
        <h2>Task</h2>
        <input
          className="taskInput"
          type="text"
          value={taskValue}
          onChange={(event) => setTaskValue(event.target.value)}
        />
      </div>
      <div className="estContainer">
        <h2>Estimated Time</h2>
        <input
          className="timeInput"
          type="text"
          value={timeValue}
          onChange={(event) => setTimeValue(event.target.value)}
        />
      </div>
      <button onClick={addTask} className="addBtn">
        Add
      </button>
    </div>
  );
}
