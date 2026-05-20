import { createSlice } from "@reduxjs/toolkit";
const initialState={isDark:false};
export const ThemeSlice=createSlice({
    name:'SwitchTheme',
    initialState,
    reducers:{
        toggletheme(state){
            state.isDark=!state.isDark;
        },
       
    },

});

export const ThemeActions=ThemeSlice.actions;
