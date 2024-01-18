import React, { useState } from "react";
import * as api from "..";

const Task = ({ task, setData }) => {
  const { description, est_time } = task;
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
      description: input.description,
      est_time: input.est_time,
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
      {!isEditing && <p>{description}</p>}
      {!isEditing && <p>{est_time}</p>}
      {isEditing && (
        <input
          type="text"
          placeholder="description"
          name="description"
          value={input.description}
          onChange={handleInputChange}
        />
      )}
      {isEditing && (
        <input
          type="text"
          placeholder="est_time"
          name="est_time"
          value={input.est_time}
          onChange={handleInputChange}
        />
      )}
      {!isEditing && <button onClick={editTask}>Edit</button>}
      {!isEditing && <button onClick={removeTask}>Remove</button>}
      {isEditing && <button onClick={saveTask}>Save</button>}
      {isEditing && <button onClick={cancelEdit}>Cancel</button>}
    </div>
  );
};

export default Task;
