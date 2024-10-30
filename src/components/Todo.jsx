import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateTask } from "../store/tasks";

const Todo = ({ task, id }) => {
  const [editTodo, setEditTodo] = useState(task);
  const [isEditOn, setIsEditOn] = useState(false);
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setIsEditOn(false);
        setEditTodo(task);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [task]);

  const handleEdit = () => {
    setIsEditOn(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  const editState = (e) => {
    e.preventDefault();
    dispatch(updateTask({ id, task: editTodo }));
    setIsEditOn(false);
  };

  return (
    <div className="todo-indv" onClick={handleEdit}>
      {isEditOn ? (
        <form onSubmit={editState}>
          <input
            type="text"
            placeholder="Edit the to-do..."
            onChange={(e) => setEditTodo(e.target.value)}
            value={editTodo}
            ref={inputRef}
            onClick={(e) => e.stopPropagation()} // Prevent handleEdit from being called
          />
        </form>
      ) : (
        <>{task}</>
      )}
    </div>
  );
};

export default Todo;
