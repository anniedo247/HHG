import * as types from "../constants/employee.constants"

const initialState = {
  employees :[],
  loading: true,
  totalResults: null,
}

const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_EMPLOYEES_REQUEST:
      return { ...state, loading: true };
    case types.GET_EMPLOYEES_SUCCESS:
      return {
        ...state,
        employees: payload.items,
        loading: false,
      };
    case types.GET_EMPLOYEES_FAILURE:
      return { ...state, loading: false };
    case types.GET_TOTAL_RESULTS:
      return{...state, totalResults: payload.count, loading:false}
    default:
      return state;
  }
}
export default employeeReducer;