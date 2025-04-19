<h1 align="center">🛒 ShoppyGlobe - Your Simple E-commerce Experience 🛍️</h1>

<p align="center">
  A basic e-commerce web application built with React, Redux, and React Router.
</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License"></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-v18.x-blue" alt="React"></a>
  <a href="https://redux.js.org/"><img src="https://img.shields.io/badge/Redux-v4.x-purple" alt="Redux"></a>
  <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-v6.x-green" alt="React Router"></a>
  <a href="https://dummyjson.com/"><img src="https://img.shields.io/badge/API-DummyJSON-orange" alt="DummyJSON API"></a>
</p>

<br/>

## <div align="center">✨ Features ✨</div>

* 🛍️ **Browse Products:** Explore a curated list of items fetched from a public API.
* 🔍 **Detailed Views:** Dive into product specifics on dedicated detail pages.
* ✍️ **Effortless Search:** Quickly find what you're looking for with intuitive filtering.
* 🛒 **Interactive Cart:** Add, remove, and adjust quantities with ease.
* 🚀 **Simple Checkout:** A streamlined path from cart to order (basic implementation).
* 🗺️ **Seamless Navigation:** Hop between sections of the app smoothly.
* 📱 **Responsive Layout:** Looks great on desktops, tablets, and phones.
* ⚠️ **Robust Error Handling:** Clear feedback when things go awry during data loading.
* ⏳ **Loading Indicators:** Know when data is on its way with visual cues.
* 🚧 **404 Awareness:** A friendly page for those lost URLs.
* ⚡ **Optimized Performance:** Faster initial loads thanks to smart code splitting.

## 🛠️ Technologies at a Glance 🛠️

* **Frontend Framework:** `React` (v18.x) - Building dynamic user interfaces.
* **State Management:** `Redux` (v4.x) - For predictable application state.
* **Routing:** `React Router` (v6.x) - Navigating the application.
* **Hooks:** `useState`, `useEffect`, `useParams`, `useDispatch`, `useSelector`, `useNavigate` - Powering functional components.
* **Performance:** `React.lazy`, `Suspense` - Loading components on demand.
* **Type Checking:** `Prop Types` - Ensuring component prop integrity.
* **Styling:** `CSS` - Crafting the visual presentation.
* **Data Source:** `DummyJSON API` - Providing mock e-commerce data.

## ⚙️ Getting Started ⚙️

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/isaifshah/ecomvite.git
    cd ecomvite
    ```

2.  **Install Dependencies:**
    ```bash
    npm install  # or yarn install
    ```

## 🏃 Running the Application 🏃

1.  **Fire up the development server:**
    ```bash
    npm run dev
    ```

2.  **Open in your browser:** Head to `http://localhost:3000` (or the port in your terminal).

## 🔑 Key Components 🔑

* **`App.js`:** The conductor of our application, setting up routes and lazy loading.
* **`Header.jsx`:** The navigation hub, showing links and cart status.
* **`ProductList.jsx`:** The showcase of our available products with search.
* **`ProductItem.jsx`:** A single product's snapshot in the product list.
* **`ProductDetail.jsx`:** Where you can learn all about a specific item.
* **`Cart.jsx`:** Your virtual shopping bag, ready for review.
* **`CartItem.jsx`:** A single item's representation within the cart.
* **`NotFound.jsx`:** Guiding lost users back on track.
* **`Loader.jsx`:** The spinning wheel of anticipation.
* **`useFetchProducts.js`:** Our custom data fetching wizard.

## 🔗 API Interaction 🔗

We tap into the power of the [DummyJSON Fake Store API](https://dummyjson.com/) for our product data:

* `GET https://dummyjson.com/products`: To populate our product listings.
* `GET https://dummyjson.com/products/:id`: For fetching the details of individual products.

## 💾 State Management (Redux) 💾

Redux orchestrates our cart's state:

* `redux/cartSlice.js`: Defines how our cart items are managed (adding, removing, updating).
* `redux/store.js`: The central hub where our application's state lives.
* `useSelector`, `useDispatch`: The React Redux tools we use to interact with the store in our components.

## 🚀 Performance Enhancements 🚀

* **Lazy Loading:** We only load components when they're needed, making initial load times snappier.
* **Code Splitting:** Our application is broken down into smaller chunks, improving efficiency.

## 🎨 Styling 🎨

The visual presentation is crafted with standard `CSS`, with responsiveness in mind to ensure a consistent experience across devices.

## 🏞️ Screenshots 🏞️

![image](https://github.com/user-attachments/assets/e4a1e608-d1c6-44c6-bfc7-dcf63c161d39)
![image](https://github.com/user-attachments/assets/286cf3c4-cc3b-44aa-85ec-41c4cef0ccfe)
![image](https://github.com/user-attachments/assets/c36ca454-f7f3-460c-adf5-a9211c91dbdf)
![image](https://github.com/user-attachments/assets/1768435b-1564-4884-9f84-f984005e4cb8)
![image](https://github.com/user-attachments/assets/01a1c7f6-b2c3-40e1-bd75-e84631e8a4a8)
![image](https://github.com/user-attachments/assets/ef28f7ba-6151-4f0d-8bc8-fa5797e657c2)






