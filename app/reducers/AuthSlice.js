import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
	name: "auth",
	initialState: {
		token: null,
		user: null,
	},
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
		},
		clearAuth: (state) => {
			state.user = null;
			state.token = null;
			return state;
		},
	},
});

export const { setUser } = authSlice.actions;
export const { setToken } = authSlice.actions;
export const { clearAuth } = authSlice.actions;
export const authSelector = (state) => state.auth;
