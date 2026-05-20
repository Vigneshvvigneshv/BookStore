import React, { createContext, useMemo, useState } from 'react'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { ThemeContext, ThemeProvider } from 'styled-components'
import store from '../store/store'
import { darkTheme, lightTheme } from '../styles/theme'

const AppProvider = ({children}) => {
  
    // const[isDark,setTheme]=useState(false);
    
    // function toggleTheme(){
      //   setTheme(!isDark);
      // }
      
      // const theme=useMemo(()=>isDark?lightTheme:darkTheme,[isDark])
      
  const isDark=useSelector((state)=>state.themeReducer.isDark);
  const theme=isDark?darkTheme:lightTheme;
   
    // console.log("theme",theme);
    // console.log("dark",isDark);
    
    
  return (
      
        <ThemeProvider theme={theme}>
                {children}
        </ThemeProvider> 
        
  
  )
}

export default AppProvider
