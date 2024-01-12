import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "../styles/Homepage.css";
import ReactPaginate from 'react-paginate';
import NavigationBar from '../components/NavigationBar';
import PriceFilter from '../components/PriceFilter';
import ProductsList from '../components/ProductsList';
import CartList from '../components/CartList';

function Homepage() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [PriceFilterState, setPriceFilterState] = useState({ minPrice: '', maxPrice: '' });
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(true);
 
  useEffect(() => {
    const fetchProducts = async() => {
        try{
            let response = await axios.get("https://dummyjson.com/products");
            console.log(response.data.products);
            if(response.status === 200){
                setProducts(response.data.products)
            }
            else{
              console.log("Error in fetching products");
            }
    
        }catch(error){
            console.log("Failed to fetch items", error)
        }
      };
      fetchProducts();
  }, [])

  const combinedFilteredProducts = products.filter((product) => 
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
    (PriceFilterState.minPrice === ''|| parseFloat(product.price) >= PriceFilterState.minPrice) &&
    (PriceFilterState.maxPrice === ''|| parseFloat(product.price) <= PriceFilterState.maxPrice)
  );

  const addToCart = (product) => {
    setCart([...cart, product ])
  }; 

  // Pagination
  const itemsPerPage = 12;
  const offset = currentPage * itemsPerPage;
  const paginatedProducts = combinedFilteredProducts.slice(offset, offset + itemsPerPage);

  const handlePageChange = ({selected}) => {
    setCurrentPage(selected)
  };

  const handlePriceFilterChange = (filter) => {
    setPriceFilterState(filter);
    setCurrentPage(0);
  }
 
  return (
    <div className='product-page'>    
        <NavigationBar onChange = {(value) => setSearchQuery(value)} cart = {cart} size = {cart.length} setShow = {setShow}/>       
        {
            show ? (
                <div>
                    <div className='price-filter'>
                        <PriceFilter onFilterChange = {handlePriceFilterChange} />
                    </div>

                    <ProductsList products = {combinedFilteredProducts} paginatedProducts ={paginatedProducts} addToCart = {addToCart} /> 

                    <ReactPaginate 
                        pageCount={Math.ceil(products.length / itemsPerPage)}
                        onPageChange={handlePageChange}
                        containerClassName='pagination'
                        activeClassName='active'  
                    />
                </div>
                ):(
                    <CartList cart = {cart} setCart = {setCart} />
                )                
        }       
    </div>
  )
}

export default Homepage