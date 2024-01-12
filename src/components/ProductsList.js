import React from 'react';
import "../styles/ProductsList.css";

function ProductsList({ paginatedProducts, addToCart }) {

  return (
    <ul className='productList'>
      {paginatedProducts.map((product) => (
        <li key={product.id} className='product-item'>
          <div className='product-title' style={{ marginTop: '10px', marginBottom: '20px' }}>
            <strong>{product.title}</strong>
          </div>
          <div className='product-image'>
            <img
              src={product.images && product.images[0]} 
              alt={product.title}
              style={{ maxWidth: '100%', maxHeight: '120px', marginBottom: '20px' }}
            />
          </div>
          <div className='description-container'>
            <div className='product-price'>
              <strong>Price : </strong>${product.price}
            </div>
            <div className='produc-discount'>
              <strong>Discount : </strong>
              {product.discountPercentage} %
            </div>
            <div className='add-to-cart'>
              <button onClick={() => addToCart(product)}>Add To Cart</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ProductsList
