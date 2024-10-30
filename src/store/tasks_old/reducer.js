import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from "./actionTypes";
 
let id = 0;
 
const reducer = (state = [], action) => {
  //   if (action.type === "ADD_TASK") {
  //     return [
  //       ...state,
  //       {
  //         id: ++id,
  //         task: action.payload.task,
  //         completed: false,
  //       },
  //     ];
  //   } else if (action.type === "REMOVE_TASK") {
  //     return state.filter((task) => task.id !== action.payload.id);
  //   }
  //   return state;
 
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload.id);
    case COMPLETE_TASK:
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, completed: true } : task
      );
 
    default:
      return state;
  }
};
 
export default reducer;
 
 