import styled from "styled-components"

export const SearchWrapper=styled.section`
   max-width:800px;
   line-height:1.7; 
   margin-bottom:56px;
`;

export const SearchInput=styled.input`
    padding:10px;
    max-width:400px;
    width:100%;
`;

export const FilterWrapper=styled.div`
   padding-top:20px;
    width:100%;
    flex-wrap:wrap;
    display:flex;
    align-items:center;
    gap:15px;
    select{
        padding:10px;
        border-radius:8px;
    }

`;

export const RangeFilter=styled.div`
    display:flex;
    align-items:center;
    gap:15px;
    h3{
    margin:0;
    }
`;