import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import { useEffect } from "react";

// import chilghoza from "../assets/images/chilghoza (2).jpg";
// import badaam from "../assets/images/badaam (2).jpg";
// import mabroom from "../assets/images/MABROOM KHAJOOR.jpg";
// import pistachio from "../assets/images/Pistachio.jpg";
// import walnut from "../assets/images/WALNUT.jpg";
// import greenRaisins from "../assets/images/GREEN RAISINS.jpg";
// import apricot from "../assets/images/APRICOT.jpg";
// import cashew from "../assets/images/CASHEW.jpg";
// import ajwa from "../assets/images/AJWA KHAJOOR.jpg";
// import figs from "../assets/images/FIGS.jpg";
// import hazelnut from "../assets/images/HAZELNUT.jpg";
// import peanuts from "../assets/images/PEANUTS.jpg";
// import blacRaisins from "../assets/images/BLAC RAISINS.jpg";
// import kaghziBadaam from "../assets/images/Kaghzi Badaam.jpg";
// import roastedCashew from "../assets/images/ROASTED CASHEW.jpg";
// import coconut from "../assets/images/COCONUT.jpg";

import { GetProducts } from "../serviceApi";
function Shopping() {
  const { addToCart } = useContext(CartContext);
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      const result = await GetProducts();
      setProducts(result);
    };
    loadProducts();
  }, []);
  // const products = [
  //   {
  //     id: 1,
  //     image: chilghoza,
  //     productName: "Chilghoza",
  //     price: "Rs. 18000 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 2,
  //     image: badaam,
  //     productName: "Badaam",
  //     price: "Rs. 4000 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 3,
  //     image: mabroom,
  //     productName: "Mabroom Khajoor",
  //     price: "Rs. 5500 / kg",
  //     category: "DRIED FRUITS",
  //   },
  //   {
  //     id: 4,
  //     image: pistachio,
  //     productName: "Pistachio",
  //     price: "Rs. 3000 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 5,
  //     image: walnut,
  //     productName: "Walnut",
  //     price: "Rs. 6000 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 6,
  //     image: greenRaisins,
  //     productName: "Green Raisins",
  //     price: "Rs. 2000 / kg",
  //     category: "DRIED FRUITS",
  //   },
  //   {
  //     id: 7,
  //     image: apricot,
  //     productName: "Apricot",
  //     price: "Rs. 3000 / kg",
  //     category: "DRIED FRUITS",
  //   },
  //   {
  //     id: 8,
  //     image: cashew,
  //     productName: "Cashew",
  //     price: "Rs. 4000 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 9,
  //     image: ajwa,
  //     productName: "Ajwa Khajoor",
  //     price: "Rs. 7000 / kg",
  //     category: "DRIED FRUITS",
  //   },
  //   {
  //     id: 10,
  //     image: figs,
  //     productName: "Figs",
  //     price: "Rs. 6000 / kg",
  //     category: "DRIED FRUITS",
  //   },
  //   {
  //     id: 11,
  //     image: hazelnut,
  //     productName: "Hazelnut",
  //     price: "Rs. 4500 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 12,
  //     image: peanuts,
  //     productName: "Peanuts",
  //     price: "Rs. 800 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 13,
  //     image: blacRaisins,
  //     productName: "Black Raisins",
  //     price: "Rs. 1500 / kg",
  //     category: "DRIED FRUITS",
  //   },
  //   {
  //     id: 14,
  //     image: kaghziBadaam,
  //     productName: "Kaghzi Badaam",
  //     price: "Rs. 3000 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 15,
  //     image: roastedCashew,
  //     productName: "Roasted Cashew",
  //     price: "Rs. 4500 / kg",
  //     category: "NUTS",
  //   },
  //   {
  //     id: 16,
  //     image: coconut,
  //     productName: "Coconut",
  //     price: "Rs. 2000 / kg",
  //     category: "NUTS",
  //   },
  // ];

  const categories = ["ALL", "NUTS", "DRIED FRUITS"];

  const filteredProducts =
    activeCategory === "ALL"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const [quantities, setQuantities] = useState({});

  const handleIncrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleDecrement = (id) => {
    setQuantities((prev) => ({ ...prev, [id]: (prev[id] || 0) - 1 }));
  };
  useEffect(() => {
    console.log("Category changed:", activeCategory);
    console.log("now", filteredProducts.length, "products filtered");
  }, [activeCategory]);

  return (
    <div>
      <Navbar />

      {/* Header */}
      <div
        className="py-4 text-white text-center"
        style={{ backgroundColor: "#002147" }}
      >
        <h2 className="fw-bold">Shop Premium Dry Fruits</h2>
        <p className="lead">Fresh from Afghanistan, Iran, KPK & Kashmir</p>
      </div>

      {/* Category Buttons */}
      <div className="container text-center my-4">
        <div className="d-flex justify-content-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`btn rounded-pill px-4 ${activeCategory === cat ? "btn-warning" : "btn-outline-secondary"}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products */}
      <div className="container mb-5">
        <div className="row">
          {filteredProducts.map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card h-100 shadow-sm border-0">
                <img
                  src={"http://localhost/qandhar-backend/" + product.image}
                  //Database mein image k just path store hoti hai ,React browser mein image dikhata hai  browser ko poora URL chahiye: Browser yeh URL se image load kar leta hai! ✅                  className="card-img-top"
                  alt={product.productName}
                  style={{ height: "300px", objectFit: "cover", width: "100%" }}
                />
                <div className="card-body text-center">
                  <h6 className="fw-bold">{product.productName}</h6>
                  <p className="text-muted">{product.price}</p>
                  <div className="d-flex justify-content-center align-items-center gap-2 my-3">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleDecrement(product.id)}
                    >
                      -
                    </button>
                    <span>{quantities[product.id] || 0}</span>
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => handleIncrement(product.id)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="btn btn-warning w-100"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default Shopping;
