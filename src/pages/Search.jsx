import React, { useEffect, useMemo, useRef, useState } from 'react'
import Layout from '../components/Layout'
import { SearchWrapper, SearchInput, FilterWrapper, RangeFilter } from '../styles/Search.styles'
import { books } from '../data/books'
import BookList from '../components/BookList'
const Search = () => {

  const[searchText,setSearchText]=useState('');
  const[category,setCategory]=useState('All');
  const[maxPrice,setMaxPrice]=useState(1000);

  const searchRef=useRef(null);

  useEffect(()=>{
    searchRef.current.focus();
  },[]);


  const filteredBooks=useMemo(()=>{
   return books.filter((book)=>{
        const matchesText=
            book.title.toLowerCase().includes(searchText.toLowerCase())||
            book.author.toLowerCase().includes(searchText.toLowerCase());

        const matchesCategory = category === 'All' || book.category === category;
        const matchesPrice = book.price <= maxPrice;

      return matchesText && matchesCategory && matchesPrice;

    })
  },[searchText,category,maxPrice])

  return (
    <Layout>
        <SearchWrapper>
            <h1>Search and Filter Books</h1>
            <p>This page enables users to search books using title, author name, category selection, and price range filters. Multiple filters can be applied simultaneously to refine results.</p>
            <p>Results update dynamically as filter values change, allowing users to identify relevant books without reloading or navigating away.</p>

            <SearchInput 
                    type="text"  
                    placeholder="Search by title or author"   
                    value={searchText}
                    ref={searchRef}
                    onChange={(e)=>setSearchText(e.target.value)}>
            </SearchInput>

            <FilterWrapper>    
                <select  value={category} onChange={(e)=>setCategory(e.target.value)}>
                  <option value='All'>All Categories</option>
                  <option value="comedy">comedy</option>
                  <option value="Horror">Horror</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="mystery">Mystery</option>
                </select>

                <RangeFilter>
                    <input type="range" name="rangeFilter" value={maxPrice} max={1000} min={100} step={50} onChange={(e)=>setMaxPrice(Number(e.target.value))}  />
                    <h3>Up to {maxPrice}</h3>
                </RangeFilter>
            </FilterWrapper>
             
        </SearchWrapper>
        <BookList books={filteredBooks}></BookList>
    </Layout>
  )
}

export default Search
