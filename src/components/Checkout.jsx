import Navbar from "./Navbar";
import Footer from "./Footer";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlaceOrder } from "../serviceApi";

function Checkout() {
  const [serverMessage, setServerMessage] = useState("");
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const schema = z.object({
    fullName: z
      .string()
      .min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    address: z
      .string()
      .min(10, { message: "Address must be at least 10 characters" }),
    contact: z
      .string()
      .min(10, { message: "Contact must be at least 10 digits" }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

const placeOrder = async (userDetails) => {
    try {
        const result = await PlaceOrder(cartItems, userDetails);
        setServerMessage(result.message);
        clearCart();
        setTimeout(() => {
            navigate("/shopping");
        }, 2000);
    } catch (error) {
        setServerMessage("A server error 500 occurred.");
    }
};

  return (
    <div>
      <Navbar />

      <div
        className="py-4 text-white text-center"
        style={{ backgroundColor: "#002147" }}
      >
        <h2 className="fw-bold">Checkout</h2>
        <p className="lead">Enter your delivery details</p>
      </div>

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card p-4" style={{ border: "1px solid black" }}>
              <form onSubmit={handleSubmit(placeOrder)} className="row g-3">
                <h4 className="mb-0">Delivery Details</h4>

                <div className="col-12">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    {...register("fullName")}
                  />
                  {errors.fullName && (
                    <p className="text-danger">{errors.fullName.message}</p>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email.message}</p>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    {...register("address")}
                  />
                  {errors.address && (
                    <p className="text-danger">{errors.address.message}</p>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label">Contact</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your contact number"
                    {...register("contact")}
                  />
                  {errors.contact && (
                    <p className="text-danger">{errors.contact.message}</p>
                  )}
                </div>

                <div className="col-6">
                  <button
                    type="submit"
                    disabled={!isValid}
                    className="btn btn-success w-100"
                  >
                    Confirm Order
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-secondary w-100"
                    onClick={() => navigate("/cart")}
                  >
                    Back to Cart
                  </button>
                </div>
              </form>

              {serverMessage && (
                <p className="mt-3">
                  <strong>{serverMessage}</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Checkout;
