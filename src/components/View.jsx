import { useState } from "react";
import { GetProducts } from "../serviceApi";
import Admin_navbar from "./Admin_navbar";

function View() {
  const [products, setProducts] = useState([]);

  const ShowProducts = async () => {
    const result = await GetProducts();
    setProducts(result);
  };

  return (
    <div className="container mt-4">
      <h5>All Products</h5>
      <p className="text-muted">List of all available products</p>
      <button className="btn btn-primary mb-3" onClick={ShowProducts}>
        View Products
      </button>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default View;
