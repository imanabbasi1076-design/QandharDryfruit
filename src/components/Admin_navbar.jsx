import { Link, useNavigate } from "react-router-dom";
import { useContext}from "react";
import {AuthContext} from './AuthContext';
function Admin_navbar() {
  const navigate = useNavigate();
  const {logout}=useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/admin">
          Qandhar Dryfruit Exchange
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminNavbar"
          aria-controls="adminNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="adminNavbar">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/orders">
                User Requests
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add">
                Add Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/update">
                Update Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/delete">
                Delete Product
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/view">
                View Products
              </Link>
            </li>
          </ul>

          <button
            className="btn btn-outline-danger ms-2"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Admin_navbar;
