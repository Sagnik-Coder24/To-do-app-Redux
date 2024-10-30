import {
    createAction,
    createAsyncThunk,
    createReducer,
    createSlice,
  } from "@reduxjs/toolkit";
  // import instance from "../utils/http";
  import { apiCallBegan, apiCallPost } from "./api";
   
  const initialState = {
    tasks: JSON.parse(localStorage.getItem("tasks")) || [],
    loading: false,
    error: null,
  };
   
  // export const fetchTasks = createAsyncThunk(
  //   "fetchTasks",
  //   async (a, { rejectWithValue }) => {
  //     try {
  //       const response = await instance.get("/tasks");
  //       return { tasks: response.data };
  //     } catch (error) {
  //       return rejectWithValue({ error: error.message });
  //     }
  //   }
  // );
   
  const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
      // action: function
      apiRequested: (state) => {
        state.loading = true;
      },
      apiRequestFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      },
      getTasks: (state, action) => {
        // return action.payload.tasks;
        state.tasks = action.payload.tasks;
        state.loading = false;
      },
      addTask: (state, action) => {
        state.tasks.push({
          id: state.tasks.length + 1,
          task: action.payload.task,
          completed: false,
        });
      },
      updateTask: (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) state.tasks[index].task = action.payload.task;
      },
      addNewTask: (state, action) => {
        state.tasks.push(action.payload);
      },
      removeTask: (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) {
          state.tasks.splice(index, 1);
          for (
            let index = action.payload.id - 1;
            index < state.tasks.length;
            index++
          ) {
            state.tasks[index].id = state.tasks[index].id - 1;
          }
        }
      },
      completeTask: (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) state.tasks[index].completed = true;
      },
      completeTaskPatch: (state, action) => {
        const index = state.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        if (index !== -1) state.tasks[index].completed = action.payload.completed;
      },
    },
    //   extraReducers: (builder) => {
    //     builder
    //       .addCase(fetchTasks.pending, (state) => {
    //         state.loading = true;
    //       })
    //       .addCase(fetchTasks.fulfilled, (state, action) => {
    //         state.loading = false;
    //         state.tasks = action.payload.tasks;
    //       })
    //       .addCase(fetchTasks.rejected, (state, action) => {
    //         state.loading = false;
    //         state.error = action.payload.error;
    //       });
    //   },
  });
   
  // console.log(taskSlice);
   
  export const {
    apiRequested,
    apiRequestFailed,
    getTasks,
    addTask,
    updateTask,
    addNewTask,
    removeTask,
    completeTask,
    completeTaskPatch,
  } = taskSlice.actions;
  export default taskSlice.reducer;
   
  // Action Creators
  const url = "/tasks";
   
  export const loadTasks = () =>
    apiCallBegan({
      url,
      onStart: apiRequested.type,
      onSuccess: getTasks.type,
      onError: apiRequestFailed.type,
    });
   
  export const postTasks = (data) =>
    apiCallPost({
      url,
      method: "POST",
      data: data,
      onSuccess: addNewTask.type,
      onError: apiRequestFailed.type,
    });
   
  export const updateCompleted = (task) =>
    apiCallPost({
      url: `${url}/${task.id}`,
      method: "PATCH",
      data: task,
      onSuccess: completeTaskPatch.type,
      onError: apiRequestFailed.type,
    });
   
  export const deleteTask = (task) =>
    apiCallPost({
      url: `${url}/${task.id}`,
      method: "DELETE",
      onSuccess: removeTask.type,
      onError: apiRequestFailed.type,
    });
   
  // // // Action Types
  // // const ADD_TASK = "ADD_TASK";
  // // const REMOVE_TASK = "REMOVE_TASK";
  // // const COMPLETE_TASK = "COMPLETE_TASK";
   
  // // Actions
  // const addTask = createAction("ADD_TASK");
  // const removeTask = createAction("REMOVE_TASK");
  // const completeTask = createAction("COMPLETE_TASK");
   
  // // console.log(removeTask.type);
   
  // // console.log(
  // //   test({
  // //     task: "Task 1",
  // //   })
  // // );
   
  // // const addTask = (task) => {
  // //   return {
  // //     type: ADD_TASK,
  // //     payload: {
  // //       task: task,
  // //     },
  // //   };
  // // };
   
  // // const removeTask = (id) => {
  // //   return {
  // //     type: REMOVE_TASK,
  // //     payload: {
  // //       id: id,
  // //     },
  // //   };
  // // };
   
  // // const completeTask = (id) => {
  // //   return {
  // //     type: COMPLETE_TASK,
  // //     payload: {
  // //       id,
  // //     },
  // //   };
  // // };
   
  // // export const fetchTodo = () => async (dispatch) => {
  // //   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // //   const task = await response.json();
  // //   dispatch(addTask(task.title));
  // // };
   
  // // Reducers
  // let id = 0;
   
  // export default createReducer([], (builder) => {
  //   builder
  //     .addCase(addTask.type, (state, action) => {
  //       state.push({
  //         id: ++id,
  //         task: action.payload.task,
  //         completed: false,
  //       });
  //     })
  //     .addCase(removeTask.type, (state, action) => {
  //       const index = state.findIndex((task) => task.id === action.payload.id);
  //       if (index !== -1) state.splice(index, 1);
  //     })
  //     .addCase(completeTask.type, (state, action) => {
  //       const index = state.findIndex((task) => task.id === action.payload.id);
  //       if (index !== -1) state[index].completed = true;
  //     });
  // });
   
  // // const reducer = (state = [], action) => {
  // //   switch (action.type) {
  // //     case addTask.type:
  // //       return [
  // //         ...state,
  // //         {
  // //           id: ++id,
  // //           task: action.payload.task,
  // //           completed: false,
  // //         },
  // //       ];
  // //     case removeTask.type:
  // //       return state.filter((task) => task.id !== action.payload.id);
  // //     case completeTask.type:
  // //       return state.map((task) =>
  // //         task.id === action.payload.id ? { ...task, completed: true } : task
  // //       );
   
  // //     default:
  // //       return state;
  // //   }
  // // };
   
  // export { addTask, removeTask, completeTask };
   
   