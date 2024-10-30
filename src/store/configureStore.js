// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import reducer from "./tasks";
// import { thunk } from "redux-thunk";
// import { devToolsEnhancer } from "redux-devtools-extension";
 
// const store = createStore(
//   reducer,
//   //   applyMiddleware(thunk),
//   devToolsEnhancer({ trace: true })
// );
 
// export default store;
 
import logger from "redux-logger";
import log from "./middleware/log";
import employeeReducer from "./employee";
import taskReducer from "./tasks";
import { configureStore } from "@reduxjs/toolkit";
import error from "./middleware/error";
import api from "./middleware/api";
import post from "./middleware/post";
 
const store = configureStore({
  reducer: {
    task: taskReducer,
    employee: employeeReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    // logger,
    api,
    post,
    error,
  ],
});
 
export default store;
 
 