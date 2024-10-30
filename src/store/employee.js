import { createSlice } from "@reduxjs/toolkit";
 
let id = 0;
 
const employeeSlice = createSlice({
  name: "employee",
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload,
      });
    },
    removeEmployee: (state, action) => {
      const index = state.findIndex((emp) => emp.id === action.payload);
      if (index !== -1) state.splice(index, 1);
    },
  },
});
 
export const { addEmployee, removeEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
 
 