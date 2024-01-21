import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import BasketProvider from "./Context/BasketContext/BasketContext.jsx";
import WishlistProvider from "./Context/WishlistContext/WishlistContext.jsx";
import SearchProvider, { SearchContext } from "./Context/SearchContext/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <BasketProvider>
        <WishlistProvider>
          <SearchProvider>
            <App />
          </SearchProvider>
        </WishlistProvider>
      </BasketProvider>
    </HelmetProvider>
  </React.StrictMode>
);
