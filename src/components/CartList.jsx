import React from 'react'
import { CartItemsCard, ImgContainer, InnerCart } from '../styles/Cart.styles'
import { Button } from './BookCard'
import { useDispatch, useSelector } from 'react-redux'
import { cartActions } from '../store/cartSlice'


const CartList = ({ book }) => {
    const dispatch=useDispatch();
    const {items}=useSelector((state)=>state.cartReducer);

    const removeCart=()=>{
        dispatch(cartActions.removeFromCart({id:book.id}))
    }

  return (
   
    <CartItemsCard>
        <InnerCart>
            <ImgContainer>
                <img src={book.image} alt="loading" />
                <div>
                <h3>{book.title}</h3>
                <h2>₹{book.price}</h2>
                </div> 
            </ImgContainer>
            <Button onClick={removeCart}>Remove</Button>
        </InnerCart>
    </CartItemsCard>
   
  )
}

export default CartList
