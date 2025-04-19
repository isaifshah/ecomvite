import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  // Selects the total number of items in the cart from the Redux store
  const cartCount = useSelector((state) =>
    state.cart.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <header className="header">
      <div className="nav-container">
        {/* Link to the homepage */}
        <Link to="/" className="logo">
          <span className="logo-icon">🛒</span>
          <span className="logo-text">ShoppyGlobe</span>
        </Link>

        <nav className="nav-links">
          {/* Link to the homepage */}
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* Link to the products page */}
          <Link to="/products" className="nav-link">
            Not Found Demo
          </Link>
          {/* Link to the shopping cart page */}
          <Link to="/cart" className="cart-link">
            Cart
            {/* Display the cart counter if there are items in the cart */}
            {cartCount > 0 && <span className="cart-counter">{cartCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
