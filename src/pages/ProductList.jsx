import { useState } from "react";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductItem from "../components/ProductItem";

const ProductList = () => {
  // State to manage the search term entered by the user
  const [searchTerm, setSearchTerm] = useState("");
  // Custom hook to fetch the list of products from the API
  const {
    data: products, // Renames the 'data' from the hook to 'products'
    loading,       // Indicates if the data is currently being fetched
    error,         // Stores any error that occurred during the fetch
  } = useFetchProducts("https://dummyjson.com/products");

  // Filters the product list based on the current search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render loading state
  if (loading) return <div className="loading">Loading products...</div>;
  // Render error state
  if (error) return <div className="error">Error: {error}</div>;

  // Render the main content of the product list page
  return (
    <main>
      {/* Container for the search input */}
      <div className="search-container">
        <span className="search-icon">🔍</span>
        {/* Input field for searching products */}
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
          // Updates the 'searchTerm' state whenever the input value changes
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Grid layout to display the list of products */}
      <div className="product-grid">
        {/* Maps through the filtered product list to render individual ProductItem components */}
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
};

export default ProductList;