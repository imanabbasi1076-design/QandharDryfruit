import logo from "../assets/images/LOGO.png";

function Login() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="position-absolute top-50 start-50 translate-middle">
            <div
              className="card p-3"
              style={{ minHeight: "85vh", width: "400px" , border:"1px solid black" }}
            >
              <form>
                {/* Logo */}
                <div className="text-center mb-1">
                  <img
                    src={logo}
                    className="mx-auto d-block"
                    alt="logo"
                    style={{
                      width: "80px",
                      height: "80px",
                      borderRadius: "60px",
                      margin: "20px",
                    }}
                  />
                  <h6>DRY FRUIT EXCHANGE</h6>
                  <p>Welcome to our Dryfruit Exchange</p>
                </div>

                {/* Email */}
                <div className="row mb-3">
                  <label
                    htmlFor="inputEmail3"
                    className="col-sm-3 col-form-label"
                  >
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail3"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="row mb-3">
                  <label
                    htmlFor="inputPassword3"
                    className="col-sm-3 col-form-label"
                  >
                    Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword3"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>

                {/* Remember + Forgot */}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  className="mb-3"
                >
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Remember me
                    </label>
                  </div>
                  <a href="/forgot">Forgot password?</a>
                </div>

                {/* Button */}
                <button type="submit" className="btn btn-success w-100">
                  LOGIN
                </button>
                <p className="text-center text-muted mt-3">
                  No account? <a href="/register">Sign in</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
