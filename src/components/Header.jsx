import Layout from "../components/Layout";

import { Link } from "react-router-dom";
import { NavHeader,NavContainer,NavLogo,MenuItems, NLink, BarIcon, BarContainer, BookIcon, } from "../styles/Header.styles";
import { useState } from "react";


import { useDispatch, useSelector } from "react-redux";

import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeActions } from "../store/ThemeSlice";

function Header(){
    
    const[showMenu,setShowMenu]=useState(false);
    // const{isDark,toggleTheme}=useContext(ThemeContext);
    const dispatch=useDispatch();
    const isDark=useSelector((state)=>state.themeReducer.isDark);

    function closeMenu(){
        setShowMenu(!showMenu);
    }

   function toggleTheme(){
    console.log("Inside toggle")
        dispatch(ThemeActions.toggletheme({theme:isDark}))
    }
    
    return(
        <NavHeader>    
            <NavContainer> 
            <NavLogo> 
                <BookIcon changeLogo={isDark} className="fa-solid fa-book"></BookIcon>
                <Link to="/"><h2>BookStore</h2></Link>
            </NavLogo>
            <div style={{display:"flex"}}>
            <MenuItems open={showMenu}>
                 <NLink to="/" onClick={closeMenu}> Home </NLink> 
                 <NLink to="/Search" onClick={closeMenu}> Search </NLink>
                 <NLink to="/About" onClick={closeMenu}> About </NLink> 
                 <NLink to="/FAQs" onClick={closeMenu}> FAQs </NLink>
                 <NLink to="/Cart" onClick={closeMenu}> Cart </NLink>
                  
            </MenuItems>
                 
            <BarContainer >
             <BarIcon onClick={closeMenu} className={showMenu?"fa-solid fa-x":"fa-solid fa-bars"}></BarIcon>
             <p onClick={()=>toggleTheme()} className={isDark?"fa-solid fa-sun":"fa-solid fa-moon"}></p>
            </BarContainer>  
            </div>
            </NavContainer>
        </NavHeader>

    )
}

export default Header;