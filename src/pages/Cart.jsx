import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/cartSlice';
import CartItem from '../components/CartItem';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  // Selects the cart items from the Redux store
  const cartItems = useSelector(state => state.cart);
  // Provides the dispatch function to update the Redux store
  const dispatch = useDispatch();
  // Hook for programmatic navigation
  const navigate = useNavigate();
  // Calculates the total price of items in the cart
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Handles navigation to the checkout page
  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* Maps through cart items to render individual CartItem components */}
          {cartItems.map(item => (
            <CartItem
              key={item.id}
              item={item}
              // Dispatches action to remove item from cart
              onRemove={() => dispatch(removeFromCart(item.id))}
              // Dispatches action to update the quantity of an item in the cart
              onUpdate={quantity => dispatch(updateQuantity({
                id: item.id,
                quantity: Math.max(1, quantity)
              }))}
            />
          ))}
          <div className="cart-total">
            Total: ₹{total.toFixed(2)}
          </div>
          {/* Button to proceed to the checkout page */}
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;