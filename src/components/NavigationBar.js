// import React from 'react';
// import "../styles/NavigationBar.css"
// import '../App.css';

// function NavigationBar({ onChange, cart, size, setShow }) {

//   return (
//     <div className="navigation-bar">
//       <button className='homePage' onClick={() => setShow(true)}>
//         Shopping Cart.
//       </button>
//       <input type="text" class = "input-bar" placeholder="Search here..." onChange={(e) => onChange(e.target.value)} />
//       <div className="cart">
//         <button  onClick = {() => setShow(false)} className="myCartBtn">
//           My Cart
//         </button>
//         <span>
//           <i class="fa-solid fa-cart-shopping"></i>
//         </span>
//         <span>
//           {size}
//         </span>
//       </div>
//     </div>
//   );
// }
// export default NavigationBar;


import React from 'react';
import "../styles/NavigationBar.css"
import '../App.css';

function NavigationBar({ onChange, cart, setShow }) {
  // Calculate the total quantity of items in the cart
  const totalQuantity = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <div className="navigation-bar">
      <button className='homePage' onClick={() => setShow(true)}>
        Shopping Cart.
      </button>
      <input type="text" className="input-bar" placeholder="Search here..." onChange={(e) => onChange(e.target.value)} />
      <div className="cart">
        <button onClick={() => setShow(false)} className="myCartBtn">
          My Cart
        </button>
        <span>
          <i className="fa-solid fa-cart-shopping"></i>
        </span>
        <span>
          {totalQuantity}
        </span>
      </div>
    </div>
  );
}

export default NavigationBar;

