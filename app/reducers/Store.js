import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./AuthSlice";
export default configureStore({
	reducer: {
		auth: authSlice.reducer,
	},
});