import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductDetail = () => {
  // Extracts the product ID from the URL parameters
  const { id } = useParams();
  // State to store the fetched product data
  const [product, setProduct] = useState(null);
  // State to indicate if the data is currently being loaded
  const [loading, setLoading] = useState(true);
  // State to store any error that occurred during data fetching
  const [error, setError] = useState(null);
  // Provides the dispatch function to interact with the Redux store
  const dispatch = useDispatch();

  // useEffect hook to fetch product details when the component mounts or when the 'id' in the URL changes
  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) throw new Error('Product not found');
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]); // Dependency array ensures this effect runs when the 'id' changes

  // Function to handle adding the current product to the cart
  const handleAddToCart = () => {
    // Check if a product has been successfully fetched
    if (product) {
      // Dispatch the 'addToCart' action to the Redux store, passing the product data
      dispatch(addToCart(product));
      // Consider adding user feedback here (e.g., a message or redirect)
    }
  };

  // Render loading state
  if (loading) return <div>Loading product details...</div>;
  // Render error state
  if (error) return <div>Error: {error}</div>;
  // Render nothing if product data hasn't been fetched yet
  if (!product) return null;

  // Render the product details
  return (
    <div className="product-detail">
      <div className="product-detail-image-container">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p className="price">Price: ₹{product.price}</p>
      <p className="rating">Rating: {(product.rating).toFixed(2)}/5</p>
      {/* Button to add the product to the shopping cart */}
      <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

// Defines the expected prop types for this component
ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default ProductDetail;