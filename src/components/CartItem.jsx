import PropTypes from 'prop-types';

const CartItem = ({ item, onRemove, onUpdate }) => {
  return (
    <div className="cart-item">
      {/* Display the thumbnail image of the cart item */}
      <img src={item.thumbnail} alt={item.title} />
      <div>
        {/* Display the title of the cart item */}
        <h4>{item.title}</h4>
        {/* Display the price per item and the current quantity */}
        <p>₹{item.price} x {item.quantity}</p>
        {/* Input field to allow the user to update the quantity of the item */}
        <input
          type="number"
          value={item.quantity}
          min="1"
          // Calls the 'onUpdate' prop function whenever the quantity changes
          onChange={(e) => onUpdate(Number(e.target.value))}
        />
        {/* Button to remove the item from the cart */}
        <button onClick={onRemove}>Remove</button>
      </div>
    </div>
  );
};

// Defines the expected prop types for the CartItem component
CartItem.propTypes = {
  // Shape of the 'item' prop, representing a single cart item
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  // Function to be called when the remove button is clicked
  onRemove: PropTypes.func.isRequired,
  // Function to be called when the quantity input changes
  onUpdate: PropTypes.func.isRequired
};

export default CartItem;