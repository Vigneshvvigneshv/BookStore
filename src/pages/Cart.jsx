import Layout from "../components/Layout";

import { CartContainer, CartItem, CartItemsCard, ImgContainer, InnerCart } from "../styles/Cart.styles";
import { Button } from "../components/BookCard";
import CartList from "../components/CartList";
import EmptyState from "../components/EmptyState";
import { useSelector } from "react-redux";


export function Cart(){
      const { items }=useSelector((state)=>state.cartReducer);

    return (
        <Layout>

            <CartContainer>
                <h1>Your Shopping Cart</h1>
                <p>This page displays all books currently added to your cart. Items remain stored until they are manually removed.</p>
                <p>The cart is managed globally across the application to ensure consistent behavior regardless of where books are added.</p>


                {items.length>0?
                        <CartItem>
                        {items.map((book)=>(
                             <CartList key={book.id} book={book}></CartList>
                 ))}</CartItem>:<EmptyState>
                    <h3>Your Cart is Empty</h3>
                    <p>Books you add to your cart will appear here.</p>
                </EmptyState>}
          
               
            </CartContainer>
         
        </Layout>
    )
};