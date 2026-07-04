import logo from "../assets/images/QANDHAR DRY FRUIT.LOGO.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function Navbar() {
  const [search, setSearch] = useState("");
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/shopping?search=${search.trim()}`);
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#002147" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="logo"
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                marginRight: "8px",
              }}
            />
            <span className="text-white fw-bold">QANDHAR DRYFRUIT</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarMain">
            {/* Search Bar */}
            <form className="d-flex flex-grow-1 mx-4" onSubmit={handleSearch}>
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search dry fruits..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="btn btn-warning" type="submit">
                  Search
                </button>
              </div>
            </form>

            {/* Right Links */}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
              <li className="nav-item ms-2">
                <Link to="/register" className="btn btn-outline-light btn-sm">
                  Register
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to="/login" className="btn btn-warning btn-sm">
                  Login
                </Link>
              </li>
              <li className="nav-item ms-2">
                <Link to="/cart" className="btn btn-outline-warning btn-sm">
                  🛒 Cart ({cartItems.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Category Bar */}
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#c9952a" }}
      >
        <div className="container-fluid">
          <ul className="navbar-nav d-flex flex-row flex-wrap gap-2 py-1">
            <li className="nav-item">
              <Link to="/shopping" className="nav-link text-white fw-bold">
                ☰ All
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shopping?category=NUTS"
                className="nav-link text-white"
              >
                Best Sellers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shopping" className="nav-link text-white">
                All Products
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shopping?category=NUTS"
                className="nav-link text-white"
              >
                Nuts
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shopping?category=DRIED FRUITS"
                className="nav-link text-white"
              >
                Dried Fruits
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shopping?category=SEEDS"
                className="nav-link text-white"
              >
                Seeds
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/shopping?category=SWEETS"
                className="nav-link text-white"
              >
                Sweets
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link text-white">
                Customer Service
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
