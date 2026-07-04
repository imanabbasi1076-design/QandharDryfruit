import { useState } from "react";
import Admin_navbar from "./Admin_navbar";

function User_request() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      name: "Ali Raza",
      product: "Almonds",
      quantity: "2 kg",
      price: "Rs. 10,000",
      email: "ali@gmail.com",
      status: "Pending",
    },
    {
      id: 2,
      name: "Sara Khan",
      product: "Ajwa Dates",
      quantity: "1 kg",
      price: "Rs. 7,000",
      email: "sara@gmail.com",
      status: "Accepted",
    },
    {
      id: 3,
      name: "Usman Ahmed",
      product: "Chilghoza",
      quantity: "500 g",
      price: "Rs. 9,000",
      email: "usman@gmail.com",
      status: "Cancelled",
    },
    {
      id: 4,
      name: "Fatima Noor",
      product: "Walnuts",
      quantity: "3 kg",
      price: "Rs. 18,000",
      email: "fatima@gmail.com",
      status: "Pending",
    },
    {
      id: 5,
      name: "Hassan Mir",
      product: "Apricot",
      quantity: "1 kg",
      price: "Rs. 3,000",
      email: "hassan@gmail.com",
      status: "Accepted",
    },
  ]);

  const handleAccept = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "Accepted" } : order,
      ),
    );
  };

  const handleCancel = (id) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status: "Cancelled" } : order,
      ),
    );
  };

  return (
    <div>
      <Admin_navbar />
      <div className="container mt-4">
        <h5>Client Orders</h5>
        <p className="text-muted">Total {orders.length} requests</p>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Client Name</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Email</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.product}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td>{order.email}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.status === "Pending"
                          ? "bg-warning text-dark"
                          : order.status === "Accepted"
                            ? "bg-success"
                            : "bg-danger"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-1"
                      onClick={() => handleAccept(order.id)}
                      disabled={order.status === "Accepted"}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleCancel(order.id)}
                      disabled={order.status === "Cancelled"}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User_request;
