import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/cartSlice';

const ProductItem = ({ product }) => {
  // Provides the dispatch function to interact with the Redux store
  const dispatch = useDispatch();

  return (
    <div className="product-card">
      {/* Link to the detailed page of the product */}
      <Link to={`/product/${product.id}`}>
        {/* Display the thumbnail image of the product */}
        <img src={product.thumbnail} alt={product.title} />
        {/* Display the title of the product */}
        <h3>{product.title}</h3>
        {/* Display the price of the product */}
        <p>₹{product.price}</p>
      </Link>
      {/* Button to add the product to the shopping cart */}
      <button
        className="add-to-cart"
        // Dispatches the 'addToCart' action with the product data when clicked
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  );
};

// Defines the expected prop types for the ProductItem component
ProductItem.propTypes = {
  // Shape of the 'product' prop, representing a single product
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired
  }).isRequired
};

export default ProductItem;