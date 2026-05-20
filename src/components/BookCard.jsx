import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { books } from '../data/books';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';
import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const BookContainer=styled.div`   
    background-color:${(p)=>p.theme.colors.surface};
    border-radius:10px;
    padding:20px 30px;
    display:flex;
    flex-direction:column;
    gap:10px;
    align-items:center;
    justify-content:center;
    position:relative;

    img{
        width:150px;
        height:210px;
        object-fit:cover;
        border-radius:10px;
    };
    h3{
        margin:0;
        color:${(p)=>p.theme.colors.accent};
    }
    &:hover{
        transform:translateY(-6px);
        box-shadow:${(p)=>p.theme.colors.shadow}
    }
`;

export const ButtonContainer=styled.div` 
    display:flex;
    justify-content:center;
    gap:10px;
    margin:12px 0 0; 
`;

export const Button =styled.button`
    background-color:${(p)=>p.theme.colors.accent};
    color:${(p)=>p.theme.colors.surface};
    border:none;
    border-radius:3px;
    font-size:13px;
    font-weight:500;
    padding:9px 7px;

    &:hover{
        background-color:${(p)=>p.theme.colors.primary};
        cursor:pointer;
    }
    &:disabled{
        cursor:not-allowed;
        background-color:#94a3b8;
        color:white;

    }
`;
const Badge=styled.p`
    position:absolute;
    top:0%;
    left:50%;
    transform:translate(-50%,-50%);
    padding:4px 10px;
    marin-bottom:8px;
    font-size:12px;
    background-color:${(p)=>p.theme.colors.accent};
    color:${(p)=>p.theme.colors.surface};
    border-radius:20px;
`;

const AuthorName=styled.p`
    color:${(p)=>p.theme.colors.text};
`

const BookCard = ({ book }) => {
   
   const navigate=useNavigate();
   const[showPop,setShowPop]=useState(false);

    const dispatch=useDispatch();
    const  {items}  =useSelector((state)=>state.cartReducer);
    console.log(items);

    function closePopUp(){
    setShowPop(!showPop);
   }


    const addCart=()=>{
        dispatch(cartActions.addToCart({item:book}));
        setShowPop(!showPop)
    }

    let isPresent=items.some((p)=>p.id===book.id);
 
  return (
   <>
    <BookContainer>

    {book.price>240? <Badge>Premium</Badge>:""}
       <h3>{book.title}</h3> 
       <AuthorName>{book.author}</AuthorName>
       <img src={book.image} alt="" />
       <h3>₹{book.price}</h3>

    <ButtonContainer>  
        <Button onClick={() => navigate(`/BookDetail/${book.id}`)}>View Details</Button>
        <Button onClick={addCart} disabled={isPresent} >{isPresent? 'Added to Cart':'Add To Cart'}</Button>
    </ButtonContainer> 

    </BookContainer>
         {showPop && <Modal books={book} closeAction={closePopUp}></Modal>}
    </>
   
  )
}

export default BookCard
