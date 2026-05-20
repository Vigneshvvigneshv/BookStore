import { createSlice } from "@reduxjs/toolkit";
import { lightTheme } from "../styles/theme";


const initialState={
    items : JSON.parse(localStorage.getItem('cart'))||[]
}
console.log(JSON.parse(localStorage.getItem('cart')))
export const cartSlice=createSlice({
    name:'userCart',
    initialState,
    reducers:{
       addToCart(state,action){
            state.items.push(action.payload.item);
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
        removeFromCart(state,action){ 
           state.items= state.items.filter((p)=>p.id!==action.payload.id);
            localStorage.setItem('cart',JSON.stringify(state.items));
        },
    },
});


// export const themeSlice=createSlice({
//     name:'themeChange',
//     initialState:{theme:'lightTheme'},
//     reducers:{
//         toggletheme(state,action){
//             state.theme=action.payload.theme;
//         },
//     },
// });


export const cartActions=cartSlice.actions;
// export const ThemeActions=themeSlice.actions;