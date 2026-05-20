import React from 'react'
import Layout from './Layout'
import styled from 'styled-components';


const MainFooter=styled.footer`
    width:100%; 
    background-color:${(p)=>p.theme.colors.surface};
    color:${(p)=>p.theme.colors.text};
    text-align:center;
    padding:15px 0px;
`;
const Footer = () => {
  return (
        <MainFooter> © {new Date().getFullYear()} BookStore — All rights reserved.</MainFooter>
  )
}

export default Footer
