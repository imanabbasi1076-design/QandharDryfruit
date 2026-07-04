import carousel from "../assets/images/carousel1.jpg";
import carousels from "../assets/images/Carousel2.jpg";
import chilghoza from "../assets/images/chilghoza (2).jpg";
import badaam from "../assets/images/badaam (2).jpg";
import mabroom from "../assets/images/MABROOM KHAJOOR.jpg";
import pistachio from "../assets/images/Pistachio.jpg";
import walnut from "../assets/images/WALNUT.jpg";
import greenRaisins from "../assets/images/GREEN RAISINS.jpg";
import apricot from "../assets/images/APRICOT.jpg";
import cashew from "../assets/images/CASHEW.jpg";
import { Link } from "react-router-dom";

function User_main() {
  const features = [
    {
      id: 1,
      icon: "🚚",
      title: "Free Delivery",
      text: "On orders above Rs. 2000",
    },
    { id: 2, icon: "🌿", title: "Pure Quality", text: "Hand-picked from KPK" },
    {
      id: 3,
      icon: "🔒",
      title: "Secure Payment",
      text: "Cash on delivery available",
    },
    { id: 4, icon: "⭐", title: "Top Rated", text: "500+ happy customers" },
  ];

  const products = [
    { id: 1, img: chilghoza, name: "Chilghoza", price: "Rs. 18,000 / kg" },
    { id: 2, img: badaam, name: "Badaam", price: "Rs. 4,000 / kg" },
    { id: 3, img: mabroom, name: "Mabroom Khajoor", price: "Rs. 5,500 / kg" },
    { id: 4, img: pistachio, name: "Pistachio", price: "Rs. 3,000 / kg" },
    { id: 5, img: walnut, name: "Walnut", price: "Rs. 6,000 / kg" },
    {
      id: 6,
      img: greenRaisins,
      name: "Green Raisins",
      price: "Rs. 2,000 / kg",
    },
    { id: 7, img: apricot, name: "Apricot", price: "Rs. 3,000 / kg" },
    { id: 8, img: cashew, name: "Cashew", price: "Rs. 4,000 / kg" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Ahmed Khan",
      review: "Best quality dry fruits I have ever tasted! Fresh and pure.",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Sana Malik",
      review: "Fast delivery and amazing packaging. Will order again!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Bilal Ahmed",
      review: "Chilghoza was absolutely fresh. Highly recommended!",
      stars: "⭐⭐⭐⭐⭐",
    },
    {
      id: 4,
      name: "Ayesha Noor",
      review: "Great prices and excellent quality. My family loves it!",
      stars: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <div>
      {/* ── SCROLL 1: Carousel ── */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carousel}
              className="d-block w-100"
              alt="slide1"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-flex flex-column align-items-center justify-content-center"
              style={{ bottom: "0", top: "0" }}
            >
              <h1
                className="fw-bold display-5 mb-2"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
              >
                Premium Dry Fruits
              </h1>
              <p
                className="lead mb-4"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
              >
                Fresh from the mountains of KPK & Afghanistan
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/shopping">
                  <button
                    className="btn btn-lg fw-bold px-4"
                    style={{
                      backgroundColor: "#c9952a",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    Shop Now
                  </button>
                </Link>
                <Link to="/about">
                  <button className="btn btn-outline-light btn-lg px-4">
                    About Us
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={carousels}
              className="d-block w-100"
              alt="slide2"
              style={{ height: "600px", objectFit: "cover" }}
            />
            <div
              className="carousel-caption d-flex flex-column align-items-center justify-content-center"
              style={{ bottom: "0", top: "0" }}
            >
              <h1
                className="fw-bold display-5 mb-2"
                style={{ textShadow: "0 2px 8px rgba(0,0,0,0.7)" }}
              >
                Taste the Difference
              </h1>
              <p
                className="lead mb-4"
                style={{ textShadow: "0 2px 6px rgba(0,0,0,0.6)" }}
              >
                Sourced from Afghanistan, Iran, KPK & Kashmir
              </p>
              <div className="d-flex gap-3 justify-content-center">
                <Link to="/shopping">
                  <button
                    className="btn btn-lg fw-bold px-4"
                    style={{
                      backgroundColor: "#c9952a",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    View All Products
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      {/* ── Features Strip ── */}
      <div style={{ backgroundColor: "#002147" }} className="py-4">
        <div className="container">
          <div className="row text-white text-center">
            {features.map((feature) => (
              <div className="col-6 col-md-3 mb-3 mb-md-0" key={feature.id}>
                <div className="d-flex flex-column align-items-center">
                  <span style={{ fontSize: "2rem" }}>{feature.icon}</span>
                  <h6 className="fw-bold mt-2 mb-1">{feature.title}</h6>
                  <p className="small mb-0" style={{ color: "#ccc" }}>
                    {feature.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  Featured Products */}
      <div className="py-5" style={{ backgroundColor: "#fdf8f2" }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ color: "#002147" }}>
              Our Best Sellers
            </h2>
            <p className="text-muted">
              Handpicked premium dry fruits — straight to your door
            </p>
            <div
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#c9952a",
                margin: "0 auto",
              }}
            ></div>
          </div>
          <div className="row">
            {products.map((product) => (
              <div className="col-6 col-md-3 mb-4" key={product.id}>
                <div
                  className="card h-100 border-0"
                  style={{
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ overflow: "hidden", height: "200px" }}>
                    <img
                      src={product.img}
                      className="card-img-top"
                      alt={product.name}
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        
                      }}
                    
                    />
                  </div>
                  {/* product card body */}
                  <div className="card-body text-center px-3 py-3">
                    <h6 className="fw-bold mb-1" style={{ color: "#002147" }}>
                      {product.name}
                    </h6>
                    <p
                      className="mb-3"
                      style={{ color: "#c9952a", fontWeight: "600" }}
                    >
                      {product.price}
                    </p>
                    <Link to="/shopping">
                      <button
                        className="btn btn-sm w-100 fw-bold"
                        style={{
                          backgroundColor: "#002147",
                          color: "#fff",
                          borderRadius: "8px",
                        }}
                      >
                        View Product
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <Link to="/shopping">
              <button
                className="btn btn-lg px-5 fw-bold"
                style={{
                  backgroundColor: "#c9952a",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                View All Products →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* ── SCROLL 3: About Banner ── */}
      <div
        className="py-5"
        style={{ backgroundColor: "#002147", color: "#fff" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7 mb-4 mb-md-0">
              <p
                className="text-uppercase fw-bold mb-2"
                style={{
                  color: "#c9952a",
                  letterSpacing: "2px",
                  fontSize: "13px",
                }}
              >
                Since 1970
              </p>
              <h2 className="fw-bold display-6 mb-3">
                Pakistan's Most Trusted Dry Fruit Exchange
              </h2>
              <p style={{ color: "#ccc", lineHeight: "1.8" }}>
                Founded by <strong>Late Mr. Sabar Abbasi</strong> in Murree,
                Punjab, we have spent over 50 years sourcing the finest dry
                fruits directly from{" "}
                <strong>Afghanistan, Iran, KPK & Kashmir</strong>. Today, his
                sons continue that legacy — delivering quality and trust to your
                doorstep.
              </p>
              <div className="d-flex gap-4 mt-4">
                <div>
                  <h3 className="fw-bold mb-0" style={{ color: "#c9952a" }}>
                    50+
                  </h3>
                  <p className="small mb-0" style={{ color: "#aaa" }}>
                    Years of Experience
                  </p>
                </div>
                <div>
                  <h3 className="fw-bold mb-0" style={{ color: "#c9952a" }}>
                    500+
                  </h3>
                  <p className="small mb-0" style={{ color: "#aaa" }}>
                    Happy Customers
                  </p>
                </div>
                <div>
                  <h3 className="fw-bold mb-0" style={{ color: "#c9952a" }}>
                    30+
                  </h3>
                  <p className="small mb-0" style={{ color: "#aaa" }}>
                    Products
                  </p>
                </div>
              </div>
              <Link to="/about">
                <button
                  className="btn mt-4 px-4 fw-bold"
                  style={{
                    backgroundColor: "#c9952a",
                    color: "#fff",
                    border: "none",
                    borderRadius: "8px",
                  }}
                >
                  Learn Our Story →
                </button>
              </Link>
            </div>
            <div className="col-md-5">
              <div className="row g-3">
                {[
                  { icon: "✅", text: "100% Fresh & Organic" },
                  { icon: "📦", text: "Secure Packaging" },
                  { icon: "🚚", text: "Delivery Across Pakistan" },
                  { icon: "💰", text: "Money Back Guarantee" },
                ].map((item, idx) => (
                  <div className="col-6" key={idx}>
                    <div
                      className="p-3 text-center rounded"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.07)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <span style={{ fontSize: "1.6rem" }}>{item.icon}</span>
                      <p className="small mt-2 mb-0" style={{ color: "#ddd" }}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SCROLL 3 (continued): Reviews ── */}
      <div className="py-5" style={{ backgroundColor: "#fdf8f2" }}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold" style={{ color: "#002147" }}>
              What Our Customers Say
            </h2>
            <p className="text-muted">
              Hear from our happy family across Pakistan
            </p>
            <div
              style={{
                width: "60px",
                height: "3px",
                backgroundColor: "#c9952a",
                margin: "0 auto",
              }}
            ></div>
          </div>
          <div className="row">
            {reviews.map((review) => (
              <div className="col-md-3 col-sm-6 mb-4" key={review.id}>
                <div
                  className="card border-0 h-100 p-3 text-center"
                  style={{
                    boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
                    borderRadius: "12px",
                  }}
                >
                  <div
                    className="rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                    style={{
                      width: "52px",
                      height: "52px",
                      backgroundColor: "#002147",
                      color: "#c9952a",
                      fontWeight: "700",
                      fontSize: "1.1rem",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <p className="mb-1" style={{ fontSize: "1rem" }}>
                    {review.stars}
                  </p>
                  <p
                    className="text-muted small px-1"
                    style={{ lineHeight: "1.6" }}
                  >
                    "{review.review}"
                  </p>
                  <h6
                    className="fw-bold mb-0 mt-auto"
                    style={{ color: "#002147" }}
                  >
                    — {review.name}
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SCROLL 4: Final CTA ── */}
      <div
        className="py-5 text-white text-center"
        style={{
          background: "linear-gradient(135deg, #c9952a 0%, #002147 60%)",
        }}
      >
        <div className="container">
          <h2 className="fw-bold display-6 mb-3">Ready to Order?</h2>
          <p className="lead mb-4" style={{ color: "#eee" }}>
            Get premium dry fruits delivered to your doorstep across Pakistan.
            <br />
            Cash on Delivery available.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/shopping">
              <button
                className="btn btn-lg fw-bold px-5"
                style={{
                  backgroundColor: "#fff",
                  color: "#002147",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                Shop Now
              </button>
            </Link>
            <a href="tel:03265633961">
              <button
                className="btn btn-outline-light btn-lg px-5"
                style={{ borderRadius: "8px" }}
              >
                📞 Call Us: 0326-5633961
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User_main;
