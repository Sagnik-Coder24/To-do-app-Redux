import React, { useEffect, useState } from "react";
import { addTask, loadTasks } from "../store/tasks";
import { useDispatch, useSelector } from "react-redux";
import CompDel from "./CompDel";
import { FaRegStickyNote } from "react-icons/fa";
import Todo from "./Todo";

const Tasks = () => {
  //   const store = useContext(StoreContext);

  const tasks = useSelector((state) => state.task.tasks);
  //   const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(loadTasks());

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="tasks-outer">
      {tasks.map((task) => (
        <div key={task.id} className={task.completed ? "tasks light" : "tasks"}>
          <Todo id={task.id} task={task.task} />
          <CompDel id={task.id} completed={task.completed} />
        </div>
      ))}
      {tasks.length === 0 && (
        <div className="tasks light">
          <p>Add To-Do Tasks...</p>
          <FaRegStickyNote />
        </div>
      )}
    </div>
  );
};

export default Tasks;
