import {combineReducers} from 'redux';
import employeeReducer from "./employee.reducer";

export default combineReducers ({
  employee: employeeReducer,
  
})