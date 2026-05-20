import React from 'react'
import styled from 'styled-components'
import { Button, ButtonContainer } from './BookCard'
import { useNavigate } from 'react-router-dom';

const BackDrop=styled.div`
    height:100vh;
    width:100vw;
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    z-index:1000;
    background-color:rgb(245, 244, 244);
    display:flex;
    justify-content:center;
    align-items:center;
    background:rgb(0,0,0,0.3); 
`;

const ModalContainer=styled.div`
    width:50%;
    position:fixed;
    background-color:${(p)=>p.theme.colors.surface};
    padding:24px;
    border-radius:8px;
    max-width:500px;
    width:90%;
    z-index:1002; 

    
        color:${(p)=>p.theme.colors.text};
    
`;

const ModalButton=styled.div`
    display:flex;
    justify-content:end;
    gap:10px;
    margin:12px 0 0;
    button{
        font-weight:600;
        font-size:14px;
        border-radius:8px;
    }
`;

const Modal = ({books,closeAction}) => {
    const navigate=useNavigate();
  return (
    <BackDrop onClick={closeAction}>
    <ModalContainer onClick={((e)=>e.stopPropagation())}>
        <h2>Added To Cart</h2>
        <p><strong>{books.title}</strong> has been added to your cart.</p>

        <ModalButton>
            <Button onClick={()=>{
                closeAction();
                navigate(`/cart`)}} >View Cart</Button>
            <Button onClick={closeAction}>Continue Shopping</Button>
        </ModalButton>
    </ModalContainer>
    </BackDrop>
  )
}

export default Modal
