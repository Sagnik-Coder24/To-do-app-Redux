import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, postTasks } from "../store/tasks";
import { FaPlus } from "react-icons/fa";
import reactLogo from "../assets/react.svg";
import viteLogo from "../assets/vite.svg";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AddTask = () => {
  const [task, setTask] = useState("");
  const loading = useSelector((state) => state.task.loading);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") dispatch(addTask({ task }));
    setTask("");
  };

  return (
    <div>
      <div className="outer">
        <img src={reactLogo} alt="React" className="logo" />
        <h2>Manage your TO-DOs below...</h2>
        {loading ? (
          <div className="loading-container">
            <AiOutlineLoading3Quarters className="logo-2" />
          </div>
        ) : (
          <img src={viteLogo} alt="React" />
        )}
      </div>
      <form onSubmit={handleSubmit} className="task-form">
        <input
          type="text"
          name="text"
          placeholder="Enter new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">
          <FaPlus />
          <p>Add Task</p>
        </button>
      </form>
    </div>
  );
};

export default AddTask;
