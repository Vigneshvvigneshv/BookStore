import styled from "styled-components";

export const CartContainer=styled.div`
    max-width:75%;
    margin:0 auto;
    padding:0 16px;
`;

export const CartItemsCard=styled.div`  
    padding:18px 20px;
    background:rgb(255,255,255);
    border-radius:10px;
    
`;

export const InnerCart=styled.div`

    display:flex;
    justify-content:space-between;
    align-items:center;
    Button{
        padding:10px 14px;
        border-radius:8px;
        font-size: 14px;
        font-weight: 600;
    }

    @media(max-width:768px){
        flex-direction:column;
        justify-content:left;
        align-items:unset;
        gap:20px;
    }
`;

export const ImgContainer=styled.div`
display:flex;
justify-content:left;
align-items:center;
gap:15px;
  img{
    height:90px;
    width:64px;
    border-radius:8px;
  }
    div{
    h2{
        margin:0;
        color:${(p)=>p.theme.colors.accent};
        font-weight:700;
        font-size:1.3rem;
        margin:3px 0 0 0;
        }
        h3{
        margin:0;
        font-size:1.05rem;
        font-weight:600
        ;}
    }
        
    
`;

export const CartItem=styled.div`
    display:flex;
    flex-direction:column;
    gap:15px;
`;
