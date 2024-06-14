import { AuthState, User } from "@mytypes/authType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: AuthState = {
	user: null,
	token: null,
	isAuthenticated: false,
	isLoading: false,
	error: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginRequest: (state) => {
			state.isLoading = true;
		},
		loginSuccess: (
			state,
			action: PayloadAction<{ user: User; token: string }>
		) => {
			state.isLoading = false;
			state.user = action.payload.user;
			state.token = action.payload.token;
			state.isAuthenticated = true;
			state.error = null;
		},
		loginFailure: (state, action: PayloadAction<{ error: string }>) => {
			state.isLoading = false;
			state.error = action.payload.error;
		},
		logout: (state) => {
			state.user = null;
			state.token = null;
			state.isAuthenticated = false;
			state.error = null;
		},
	},
});

// Action creators are generated for each case reducer function
export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions

export default authSlice.reducer
