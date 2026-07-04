import Navbar from "./Navbar";
import Footer from "./Footer";
import logo from "../assets/images/QANDHAR DRY FRUIT.LOGO.png";

function About() {
  const features = [
    { id: 1, icon: "✅", text: "100% Fresh & Organic" },
    { id: 2, icon: "📦", text: "Secure Packaging" },
    { id: 3, icon: "🚚", text: "Fast Home Delivery Across Pakistan" },
    { id: 4, icon: "💰", text: "Money Back Guarantee" },
    {
      id: 5,
      icon: "🌍",
      text: "Sourced from Afghanistan, Iran, KPK & Kashmir",
    },
    { id: 6, icon: "⭐", text: "500+ Happy Customers" },
  ];

  const team = [
    {
      id: 1,
      name: "Mr. Sabar Abbasi",
      role: "Founder (Late)",
      desc: "The visionary who started Qandhar Dryfruit Exchange in 1970. His legacy lives on through quality and trust.",
    },
    {
      id: 2,
      name: "Mr. Nasir Abbasi",
      role: "Co-Owner",
      desc: "Continuing his father's legacy with a passion for quality and customer satisfaction.",
    },
    {
      id: 3,
      name: "Mr. Abid Abbasi",
      role: "Co-Owner",
      desc: "Dedicated to expanding the business while maintaining the highest standards of quality.",
    },
  ];

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div
        className="py-5 text-white text-center"
        style={{ backgroundColor: "#002147" }}
      >
        <div className="container">
          <img
            src={logo}
            alt="logo"
            style={{
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              marginBottom: "20px",
            }}
          />
          <h1 className="fw-bold">About Qandhar Dryfruit Exchange</h1>
          <p className="lead">
            Serving Pakistan's Finest Dry Fruits Since 1970
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2 className="fw-bold mb-3" style={{ color: "#002147" }}>
              Our Story
            </h2>
            <p className="text-muted">
              Founded in <strong>1970</strong> by late{" "}
              <strong>Mr. Sabar Abbasi</strong> in{" "}
              <strong>Murree, Punjab</strong>. He built a legacy of trust and
              quality.
            </p>
            <p className="text-muted">
              Today his sons <strong>Mr. Nasir Abbasi</strong> and{" "}
              <strong>Mr. Abid Abbasi</strong> source premium dry fruits from{" "}
              <strong>Afghanistan, Iran, KPK, Kashmir</strong> and across
              Pakistan.
            </p>
            <p className="text-muted">
              Over <strong>50 years</strong> of experience makes us Pakistan's
              most trusted dry fruit exchange.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={logo}
              className="img-fluid rounded-circle shadow"
              alt="logo"
              style={{ maxWidth: "280px" }}
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-5" style={{ backgroundColor: "#f8f4ef" }}>
        <div className="container">
          <h2 className="fw-bold text-center mb-4" style={{ color: "#002147" }}>
            Why Choose Us?
          </h2>
          <div className="row">
            {features.map((f) => (
              <div className="col-md-4 mb-3" key={f.id}>
                <div className="card border-0 shadow-sm p-3 h-100">
                  <p className="fs-5">
                    {f.icon} {f.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="container my-5">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#002147" }}>
          Meet Our Team
        </h2>
        <div className="row justify-content-center">
          {team.map((m) => (
            <div className="col-md-4 mb-4" key={m.id}>
              <div className="card border-0 shadow text-center p-4 h-100">
                <div
                  className="rounded-circle bg-secondary mx-auto d-flex align-items-center justify-content-center mb-3"
                  style={{ width: "80px", height: "80px", fontSize: "2rem" }}
                >
                  👤
                </div>
                <h5 className="fw-bold" style={{ color: "#002147" }}>
                  {m.name}
                </h5>
                <p className="text-warning fw-bold">{m.role}</p>
                <p className="text-muted small">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="py-5 text-white" style={{ backgroundColor: "#002147" }}>
        <div className="container text-center">
          <h2 className="fw-bold mb-4">Get In Touch</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 mb-3">
              <div className="card bg-transparent border-light p-3">
                <h5>📍 Location</h5>
                <p className="text-light">Murree, Punjab, Pakistan</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-transparent border-light p-3">
                <h5>📞 Phone</h5>
                <p className="text-light">0326-5633961</p>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card bg-transparent border-light p-3">
                <h5>✉️ Email</h5>
                <p className="text-light">imanabbasi138@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
export default About;
