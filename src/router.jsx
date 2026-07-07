import { createBrowserRouter } from "react-router-dom";
import Landingpg from "./components/Landingpg";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Admin_panel from "./components/Admin_panel";
import Add_product from "./components/Add_product";
import Delete_product from "./components/Delete_product";
import Update_product from "./components/Update_product";
import View from "./components/View";
import User_request from "./components/User_request";
import About from "./components/About";
import Shopping from "./components/Shopping";
import Protectedroute from "./components/Protectedroute";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";



const router = createBrowserRouter([
  { path: "/", element: <Landingpg /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Registration /> },
  { path: "/about", element: <About /> },
  { path: "/shopping", element: <Shopping /> },

  { path: "/admin", element: <Protectedroute><Admin_panel /></Protectedroute> },
  { path: "/add", element:<Protectedroute><Add_product /></Protectedroute> },
  { path: "/delete", element: <Protectedroute><Delete_product /></Protectedroute> },
  { path: "/update", element: <Protectedroute><Update_product /></Protectedroute> },
  { path: "/view", element:<Protectedroute><View /></Protectedroute> },
  { path: "/orders", element: <Protectedroute><User_request /></Protectedroute> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  
]);

export default router;
