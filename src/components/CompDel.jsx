import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  completeTaskPatch,
  deleteTask,
  loadTasks,
  removeTask,
  updateCompleted,
} from "../store/tasks";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";

const CompDel = ({ id, completed }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(completeTaskPatch({ id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(removeTask({ id }));
    // dispatch(loadTasks());
  };

  return (
    <div className="comp-del">
      <button onClick={handleComplete} title="Change Completion">
        {completed ? <FaTimes /> : <FaCheck />}
      </button>
      <button onClick={handleDelete} title="Delete Task">
        <FaTrash />
      </button>
    </div>
  );
};

export default CompDel;
