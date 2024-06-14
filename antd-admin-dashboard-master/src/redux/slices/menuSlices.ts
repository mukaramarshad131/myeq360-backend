import { createSlice } from "@reduxjs/toolkit";

interface MenuState {
	collapsed: boolean;
}

const initialState: MenuState = {
	collapsed: false,
};

export const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		setCollapsed: (state) => {
			state.collapsed = !state.collapsed;
		},
	},
});

export const { setCollapsed } = menuSlice.actions;

export default menuSlice.reducer;
