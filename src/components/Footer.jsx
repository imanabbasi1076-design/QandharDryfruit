import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Qandhar Dry Fruit Exchange</h6>
            <p className="small" style={{ color: "#ccc" }}>
              Premium quality dry fruits delivered to your doorstep across
              Pakistan.
            </p>
            <p className="small mb-1" style={{ color: "#ccc" }}>
              📍 Murree, Punjab
            </p>
            <p className="small mb-1" style={{ color: "#ccc" }}>
              📞 0326-5633961
            </p>
            <p className="small mb-0" style={{ color: "#ccc" }}>
              ✉️ qandhar@gmail.com
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Quick Links</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <Link
                  to="/"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/about"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  About Us
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/shopping"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  All Products
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/login"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Login
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/register"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h6 className="fw-bold">Categories</h6>
            <ul className="list-unstyled mb-0">
              <li className="mb-1">
                <Link
                  to="/shopping?category=NUTS"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Nuts
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/shopping?category=DRIED FRUITS"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Dried Fruits
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/shopping?category=SEEDS"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Seeds
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  to="/shopping?category=SWEETS"
                  className="text-decoration-none"
                  style={{ color: "#ccc" }}
                >
                  Sweets
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <hr style={{ borderColor: "rgba(255,255,255,0.15)" }} />
        <p className="text-center small mb-0" style={{ color: "#888" }}>
          © 2025 Qandhar Dry Fruit Exchange. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
