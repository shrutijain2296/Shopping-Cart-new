import React, { useEffect, useState } from 'react';
import '../styles/CartList.css';

function CartList({ cart, setCart }) {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => (ans += item.price * item.quantity));
    setPrice(ans);
  };

  const handleRemove = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
    );

    setCart(updatedCart.filter((item) => item.quantity > 0));
    handlePrice();
  };

  const handleAdd = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );

    setCart(updatedCart);
    handlePrice();
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div className='cartList'>
      {cart?.map((item) => (
        <div className='cart-box' key={`${item.id}_${item.quantity}`}>
          <div className='cart-img'>
            <img src={item.images && item.images[0]} alt={item.title} />
            <p>{item.title}</p>
          </div>
          <div>
            <span>
              $ {item.price} x {item.quantity} = ${item.price * item.quantity}
            </span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
            <button onClick={() => handleAdd(item.id)}>Add more</button>
          </div>
        </div>
      ))}
      <div className='total'>
        <span>Total Price of your Cart -</span>
        <span>$ {price}</span>
      </div>
    </div>
  );
}

export default CartList;

