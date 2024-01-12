import React, {useEffect, useState} from 'react';
import "../styles/CartList.css";

function CartList({ cart, setCart }) {
  const [price, setPrice] = useState(0); 

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (
        ans += item.price
    ))
    setPrice(ans);
  }

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  }

  useEffect(() => {
    handlePrice();
  })
  
  return (
    <div className='cartList'>
        {
            cart?.map((item) => (
                <div className='cart-box' key = {item.id}>
                    <div className='cart-img'>
                        <img src = {item.images && item.images[0]} alt = {item.title}/>
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <span>$ {item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
               
            ))
        }
        <div className='total'>
            <span>Total Price of your Cart -</span>
            <span>$ {price}</span>
        </div>
    </div>  
  )  
}

export default CartList



