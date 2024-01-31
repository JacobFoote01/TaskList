import React, { useState } from "react";
import * as api from "..";

const Task = ({ task, setData }) => {
  const { Description, Time } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [input, setInput] = useState(task);

  // remove a task from the list
  const removeTask = async () => {
    const newData = await api.removeTask(task.id);
    // set the data to the new filtered data
    setData(newData);
  };

  // handle the input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // set the state of the input
    setInput({ ...input, [name]: value });
  };

  // edit a task from the list
  const editTask = () => {
    setIsEditing(true);
  };

  // save the edited task
  const saveTask = async () => {
    const newData = await api.updateTask({
      ...task,
      Description: input.Description,
      Time: input.Time,
    });

    setData(newData);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setInput(task);
    setIsEditing(false);
  };

  return (
    <div className="task">
      {!isEditing && <p>{Description}</p>}
      {!isEditing && <p>{Time}</p>}
      {isEditing && (
        <input
          type="text"
          placeholder="Description"
          value={input.Description}
          onChange={handleInputChange}
        />
      )}
      {isEditing && (
        <input
          type="text"
          placeholder="Time"
          value={input.Time}
          onChange={handleInputChange}
        />
      )}
      {!isEditing && <button onClick={editTask}>Edit</button>}
      {!isEditing && <button onClick={removeTask}>Delete</button>}
      {isEditing && <button onClick={saveTask}>Save</button>}
      {isEditing && <button onClick={cancelEdit}>Cancel</button>}
    </div>
  );
};

export default Task;
