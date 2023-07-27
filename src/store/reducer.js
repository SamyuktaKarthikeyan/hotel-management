import { configureStore } from "@reduxjs/toolkit";

const jwtToken = localStorage.getItem("jwtToken");
const loggedInUserEmail = jwtToken ? JSON.parse(atob(jwtToken.split(".")[1])).sub : null;

const initialState = {
  users: [],
  loggedInUser: loggedInUserEmail, 
  totalCost: 0, 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        users: [...state.users, action.payload]
      };
    case 'LOGIN':
      return {
        ...state,
        loggedInUser: action.payload
      };
    case 'LOGOUT':
      return {
        ...state,
        loggedInUser: null
      };
    case 'UPDATE_TOTAL_COST':
      return {
        ...state,
        totalCost: action.payload
      };
    default:
      return state;
  }
};



export const updateTotalCost = (totalCost) => ({
  type: 'UPDATE_TOTAL_COST',
  payload: totalCost
});

export default configureStore({
  reducer
});
