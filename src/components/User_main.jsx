import carousel from "../assets/images/carousel1.jpg";
import carousels from "../assets/images/Carousel2.jpg";
import chilghoza from "../assets/images/chilghoza (2).jpg";
import badaam from "../assets/images/badaam (2).jpg";
import mabroom  from "../assets/images/MABROOM KHAJOOR.jpg";
import pistachio from "../assets/images/Pistachio.jpg";

function User_main() {
  return (
    <div>
      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators  ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
          ></button>
          <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
            <h2>Premium Dry Fruits</h2>
            <p>Fresh from the mountains of KPK</p>
            <button className="btn btn-success btn-lg">Shop Now</button>
          </div>
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
          </div>
          <div className="carousel-item">
            <img
              src={carousels}
              className="d-block w-100"
              alt="slide2"
              style={{ height: "600px", objectFit: "cover" }}
            />
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

      {/* Features Cards */}
      <div className="container mt-4">
        <h3 className="text-center">Why Choose Us?</h3>
        <p className="text-center">Premium quality at your doorstep</p>
        <div className="row">
          <div className="col-md-3">
            <div className="card text-center p-2 ">
              <div className="card-body">
                <h3>🚚</h3>
                <h5 className="card-title">Free Delivery</h5>
                <p className="card-text text-muted">Orders above Rs. 2000</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center p-2">
              <div className="card-body">
                <h3>🌿</h3>
                <h5 className="card-title">Pure Quality</h5>
                <p className="card-text text-muted">Hand-picked from KPK</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center p-2">
              <div className="card-body">
                <h3>🔒</h3>
                <h5 className="card-title">Secure Payment</h5>
                <p className="card-text text-muted">
                  Cash on delivery available
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center p-2">
              <div className="card-body">
                <h3>⭐</h3>
                <h5 className="card-title">Top Rated</h5>
                <p className="card-text text-muted">500+ happy customers</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="container mt-4">
        <h3 className="text-center">Our Products</h3>
        <p className="text-center">Premium quality dryfruits</p>
        <div className="row">
          <div className="col-md-3 ">
            <div className="card h-100">
              <img src={chilghoza} className="card-img-top" alt="Chilghoza" />
              <div className="card-body">
                <h5 className="card-title">Chilghoza</h5>
                <p className="card-text text-muted">Rs. 18000 / kg</p>
                <button className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card h-100">
              <img src={badaam} className="card-img-top" alt="Badaam" />
              <div className="card-body">
                <h5 className="card-title">Badaam</h5>
                <p className="card-text text-muted">Rs. 1200 / kg</p>
                <button className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card h-100">
              <img
                src={mabroom}
                className="card-img-top"
                alt="Mabroom Khajoor"
              />
              <div className="card-body">
                <h5 className="card-title">Mabroom Khajoor</h5>
                <p className="card-text text-muted">Rs. 1800 / kg</p>
                <button className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="col-md-3 ">
            <div className="card h-100">
              <img src={pistachio} className="card-img-top" alt="Pistachio" />
              <div className="card-body">
                <h5 className="card-title">Pistachio</h5>
                <p className="card-text text-muted">Rs. 2200 / kg</p>
                <button className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default User_main;
