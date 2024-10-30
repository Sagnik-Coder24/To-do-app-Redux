import axios from "axios";
import { apiCallPost } from "../api";
 
const post =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallPost.type) return next(action);
 
    const { url, method, data, onStart, onSuccess, onError } = action.payload;
 
    if (onStart) dispatch({ type: onStart });
 
    try {
      const response = await axios.request({
        baseURL: "http://localhost:5000/api",
        url: url,
        method,
        data,
      });
 
      dispatch({ type: onSuccess, payload: response.data });
    } catch (error) {
      if (onError)
        dispatch({ type: onError, payload: { error: error.message } });
      dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
    }
  };
export default post;
 
// import axios from "axios";
// import { loadTasks } from "../tasks";
 
// const post =
//   ({ dispatch }) =>
//   (next) =>
//   async (action) => {
//     if (action.type !== "tasks/addNewTask") return next(action);
 
//     const task = { id: 6, task: action.payload.task, completed: false };
 
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/tasks",
//         task
//       );
 
//       dispatch(loadTasks());
//     } catch (error) {
//       dispatch({ type: "SHOW_ERROR", payload: { error: error.message } });
//     }
//   };
// export default post;
 
 