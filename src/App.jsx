import React from "react";
import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";
// import StoreContext from "./contexts/storeContext";

const App = () => {
  return (
    // {/* <StoreContext.Provider value={store}> */}
    <div className="card">
      <AddTask />
      <Tasks />
      <p className="footer">Click the To-Do text to edit.</p>
    </div>
    // {/* </StoreContext.Provider> */}
  );
};

export default App;
