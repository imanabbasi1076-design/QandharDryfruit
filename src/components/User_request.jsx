import { useState, useEffect } from "react";
import Admin_navbar from "./Admin_navbar";
import { GetOrders } from "../serviceApi";
import { UpdateOrderStatus } from "../serviceApi";

function User_request() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      const result = await GetOrders();
      setOrders(result);
    };
    loadOrders();
  }, []);

  // const handleAccept = (id) => {
  //   setOrders((prev) =>
  //     prev.map((order) =>
  //       order.Id === id ? { ...order, Status: "Confirmed" } : order,
  //     ),
  //   );
  // };

  // const handleCancel = (id) => {
  //   setOrders((prev) =>
  //     prev.map((order) =>
  //       order.Id === id ? { ...order, Status: "Cancelled" } : order,
  //     ),
  //   );
  // };
const handleAccept = async (id) => {
  const result = await UpdateOrderStatus(id, "Confirmed");
  setOrders((prev) =>
    prev.map((order) =>
      order.Id === id ? { ...order, Status: "Confirmed" } : order,
    ),
  );
};

const handleCancel = async (id) => {
  const result = await UpdateOrderStatus(id, "Cancelled");
  setOrders((prev) =>
    prev.map((order) =>
      order.Id === id ? { ...order, Status: "Cancelled" } : order,
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
                <tr key={order.Id}>
                  <td>{order.Id}</td>
                  <td>{order.FullName}</td>
                  <td>{order.productName}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td>{order.Email}</td>
                  <td>
                    <span
                      className={`badge ${
                        order.Status === "Order placed"
                          ? "bg-warning text-dark"
                          : order.Status === "Confirmed"
                            ? "bg-success"
                            : "bg-danger"
                      }`}
                    >
                      {order.Status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="btn btn-success btn-sm me-1"
                      onClick={() => handleAccept(order.Id)}
                      disabled={order.Status === "Confirmed"}
                    >
                      Accept
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleCancel(order.Id)}
                      disabled={order.Status === "Cancelled"}
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
