import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  rows: [
    { id: "11", name: "aaa", status: "ac5ive", company: "notes", notes: "sss" },
  ],
  userDetails: {},
};

export const customReducer = createReducer(initialState, {
  addItem: (state, action) => {
    state.rows = [...state.rows, action.payload];
  },

  deleteItem: (state, action) => {
    state.rows = state.rows.filter((_, index) => index !== action.payload);
  },

  addUser: (state, action) => {
    state.userDetails = { ...state.userDetails, ...action.payload };
  },

  toggleLogin: (state) => {
    state.userDetails.isLogin = !state.userDetails.isLogin;
  },
});
