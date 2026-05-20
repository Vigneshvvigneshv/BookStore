import React from 'react'
import Layout from '../components/Layout'
import { useParams } from 'react-router-dom'
import { books } from '../data/books'
import { booksDescription } from '../data/books'

import styled from 'styled-components'
import { Button } from '../components/BookCard'

import Modal from '../components/Modal'

const BookDetailContainer=styled.div`
  width:100%;
  max-width:75%;
  padding:0 40px;
  margin:0 auto;
  
    span{
      color:${(p)=>p.theme.colors.accent};
      font-size:28px;
      font-weight:bolder;
    }
  button{
    padding:9px 12px;
    font-size:16px;
  }
`;

const BookDetailPriceContainer=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:1rem;
    padding-top:20px;
    border-top:1px solid ${(p)=>p.theme.colors.border};
`

const BookDetail = () => {
  const {id}=useParams();
  const book=books.find((e)=>e.id===id)
  const{cartItems,showPop,closePopUp,addCart}=useCartContext();

  let isPresent=cartItems.some(P=>P.id===book.id);
  return (
    <Layout>
        <BookDetailContainer>
            <h1>{book.title}</h1>
            <p><strong>Author:</strong>{book.author}</p>
            <p><strong>Category:</strong>{book.category}</p>
            <p><strong>Book Overview</strong></p>
            <p>{booksDescription[id]}</p>
            <p><strong>Who This Book Is For?</strong></p>
            <p>This book is intended for readers who prefer focused storytelling and genre-specific narratives delivered in a structured format.</p>
            <BookDetailPriceContainer>
                <span>₹{book.price}/-</span>
                <Button onClick={()=>addCart(book)} disabled={isPresent} >{isPresent? 'Added to Cart':'Add To Cart'}</Button>
            </BookDetailPriceContainer>
                {showPop && <Modal books={book} closeAction={closePopUp}></Modal>}
        </BookDetailContainer>
    </Layout>
  );
}

export default BookDetail
