import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [serverMessage, setServerMessage] = useState("");
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartItems.length === 0) {
      const timer = setTimeout(() => {
        navigate("/shopping");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cartItems]);

  return (
    <div>
      <Navbar />

      <div
        className="py-4 text-white text-center"
        style={{ backgroundColor: "#002147" }}
      >
        <h2 className="fw-bold">Your Cart</h2>
        <p className="lead">Review your selected items</p>
      </div>

      <div className="container my-5">
        {cartItems.length === 0 ? (
          <div className="text-center py-5">
            <h4 className="text-muted">🛒 Your cart is empty!</h4>
            <p className="text-muted">Add some products to get started.</p>
            <Link to="/shopping" className="btn btn-warning mt-3">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>Image</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          alt={item.productName}
                          style={{
                            width: "70px",
                            height: "70px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        />
                      </td>
                      <td className="fw-bold">{item.productName}</td>
                      <td className="text-muted">{item.price}</td>
                      <td>
                        <span className="badge bg-warning text-dark fs-6">
                          {item.quantity}
                        </span>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => removeFromCart(item.productName)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <Link to="/shopping" className="btn btn-outline-secondary">
                ← Continue Shopping
              </Link>
              <button className="btn btn-danger" onClick={clearCart}>
                Clear Cart
              </button>
              <button
                className="btn btn-success"
                onClick={() => navigate("/checkout")}
              >
                Place Order
              </button>
            </div>
          </>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default Cart;
