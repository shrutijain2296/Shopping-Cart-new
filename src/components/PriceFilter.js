import React, {useState} from 'react';
import "../styles/CartList.css";

function PriceFilter({ onFilterChange }) {

  const [priceRange, setPriceRange] = useState([0, 2000]);

  const handleFilterChange = () => {
    const filter = {
        minPrice: priceRange[0],
        maxPrice: priceRange[1],
    };
    onFilterChange(filter);

  }
  return (
    <div className='price-filter'>
        <div className='price-filter-info'>
            <h3>Price filter: </h3>
            <div>
                <label htmlFor='priceRange'>Min Price:</label>
                <input type = "range" id = "priceRange" min= "0" max = "2000" step = "10" value = {priceRange[0]} onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])} />

                <span>${priceRange[0]}</span>
            </div>
        
            <div>
                <label htmlFor='priceRange'>Max Price:</label>
                <input type = "range" id = "priceRange" min= "0" max = "2000" step = "10" value = {priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])} />

                <span>${priceRange[1]}</span>
            </div>
            <div>
                <button  className = "price-filter-btn" onClick={handleFilterChange}>Apply Filter</button>
            </div> 
        </div>                
    </div>
  )
}

export default PriceFilter;