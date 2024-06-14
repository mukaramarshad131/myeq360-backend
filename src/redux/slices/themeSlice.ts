import { createSlice } from "@reduxjs/toolkit"

interface ThemeState {
    isDarkMode: boolean
}

const initialState:ThemeState = {
    isDarkMode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setIsDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode
        }
    }
});

export const {setIsDarkMode} = themeSlice.actions

export default themeSlice.reducer