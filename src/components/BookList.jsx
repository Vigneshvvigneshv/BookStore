import React from 'react'

import BookCard from './BookCard'
import EmptyState from './EmptyState';
import styled from 'styled-components';

const CardContainer=styled.div`
    display:grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    gap:25px; 
    margin-top:30px;
`;

const BookList = ({ books }) => {
  if(books.length>0){

    return (  
        <CardContainer>
          {books.map((book)=>(    
            <BookCard key={book.id} book={book}></BookCard>
          ))}
          </CardContainer> 
    );
  }else {
    return <EmptyState>
        <h3>No Books Available</h3>
        <p>Try adjusting your search or filter criteria to find books.</p>
    </EmptyState>
  }
}

export default BookList
