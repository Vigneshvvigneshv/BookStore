import styled from "styled-components";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";

export const NavHeader=styled.div`
    width:100%;
    background-color:${(p)=>p.theme.colors.background};
    border-bottom:1px solid ${(p)=>p.theme.colors.border};
    box-shadow:${(p)=>p.theme.colors.shadow};
    position:sticky;
    top:0;
    z-index:100;   
    padding:0 2opx;
`;

export const NavContainer=styled.div`
  display: flex;
  align-items: center;
  width:100%;
  justify-content: space-between;
  padding:0px 60px;
  a{
    text-decoration:none;  
    color:${(p)=>p.theme.colors.text};
    padding:0.75rem;
  };
`;

export const NavLogo=styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
    h2{
        color:${(p)=>p.theme.colors.accent};
        margin:0;
        font-size:24px;
        font-weight:700;
    }
`;

export const BookIcon=styled.i`
    font-size:24px;
    color:${(props)=>props.changeLogo?'white':'black'};
`

export const BarContainer=styled.div`
    display:flex;
    gap:15px;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    p{
        padding:12px 10px;
        border-radius:5px;
        background-color:${(p)=>p.theme.colors.accent};
        margin:0;
        color:white;
        font-size:20px;
    }
   
`
export const BarIcon=styled.span`
    display:none;
    
    padding:10px 16px;
    background-color:${(p)=>p.theme.colors.border};
    border-radius:${(p)=>p.theme.radius};
    @media(max-width:768px){
        display:block;
        transform:${(props)=>props.open?"rotate(0deg)":"rotate(360deg)"};
        transition:all 1s ease;
       font-size:large;
        color:${(p)=>p.theme.colors.accent};
        &:hover{
        background-color:${(p)=>p.theme.colors.primary};
        color:white;
        }
    }
`;
export const MenuItems=styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    
   
    a:hover{
        background-color:${(p)=>p.theme.colors.border};
        color:${(p)=>p.theme.colors.primary};
        font-weight:500;
    }

   color:${(p)=>p.theme.colors.accent};

    @media(max-width:768px){
       flex-direction:column;
       position:absolute;
       width:100%;
       background-color:${(p)=>p.theme.colors.background};
       top:70px;
       left:0;
       visibility:${(props)=>props.open?"visible":"hidden"};
       transform:${(props)=>props.open?"translateY(0)":"translateY(-20px)"};
       opacity:${(props)=>props.open?1:0};
       transition:all 1s ease;
    }
`;

export const NLink =styled(NavLink)`

&.active{
    border-bottom:2px solid ${(p)=>p.theme.colors.primary};
  }
    @media(max-width:768px){
    width:100%;
    border-bottom:1px solid ${(p)=>p.theme.colors.text};
} 
  `;

