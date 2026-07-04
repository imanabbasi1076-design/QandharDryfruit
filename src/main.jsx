import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './components/AuthContext';
import ProductProvider from './components/ProductContext';
import CartProvider from "./components/CartContext";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <RouterProvider router={router} />
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  </StrictMode>,
);
