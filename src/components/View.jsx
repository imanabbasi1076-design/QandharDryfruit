import { Link } from "react-router-dom";
import {useContext} from 'react';
import {ProductContext} from './ProductContext';
import {useEffect} from 'react';
function View() {
  
  const {products}=useContext(ProductContext);
  
  useEffect(() => {
    console.log("Products updated! Total products:", products.length);
  }, [products]);
  
  return (
    <div className="container mt-4">
      <h5>All Products</h5>
      <p className="text-muted">List of all available products</p>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>id</th>
            <th>Product Name</th>
            <th>Price</th>
          
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.price}</td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default View;
