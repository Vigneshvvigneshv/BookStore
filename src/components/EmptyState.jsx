import React from 'react'
import styled from 'styled-components'


const EmptyContainer=styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;  
    padding:48px 16px;
    h3{
       margin:0;
    } 
`;
const EmptyState = ({children}) => {
  return (
    <EmptyContainer>
        {children}
    </EmptyContainer>
  )
}

export default EmptyState
