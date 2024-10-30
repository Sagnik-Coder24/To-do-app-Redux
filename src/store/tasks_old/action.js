import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "./actionTypes";
 
const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      task: task,
    },
  };
};
 
const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id: id,
    },
  };
};
 
const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: {
      id,
    },
  };
};
 
export { addTask, removeTask, completeTask };
 
 