import * as types from "../constants/employee.constants"
import api from "../apiService"


const getEmployees = (page,limit,searchTerm)=> async (dispatch) => {
  dispatch({ type: types.GET_EMPLOYEES_REQUEST, payload: null });
  try {
    let url = `/employees?page=${page}&limit=${limit}`
    if(searchTerm) {
      url = url + `&search=${searchTerm}`
    }
    const res = await api.get(url);
    console.log("res",res.data)
      dispatch({ type: types.GET_EMPLOYEES_SUCCESS, payload: res.data });
      
  } catch (error) {
    dispatch({ type: types.GET_EMPLOYEES_FAILURE, payload: error });
  }
};

const getTotalResults = ()=> async (dispatch) => {   
    const res = await api.get(`/employees`);
    console.log("ressssss",res.data.count)
      dispatch({ type: types.GET_TOTAL_RESULTS, payload: res.data });  
};

const employeeAction = {
  getEmployees,
  getTotalResults,
}
export default employeeAction;