import logo from "../assets/images/LOGO.png";
function Registration() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div>
            <div
              className="card p-3 "
              style={{
                minHeight: "85vh",
                width: "400px",
                border: "1px solid black",
              }}
            >
              <form class="row g-3">
                {/* Logo */}
                <div className="text-center mt-3 mb-1">
                  <img
                    src={logo}
                    className="mx-auto d-block"
                    alt="logo"
                    style={{
                      width: "80px",

                      borderRadius: "60px",
                      marginBottom: "10px",
                      marginTop: "10px",
                    }}
                  />{" "}
                </div>
                <div class="col-md-6">
                  <label for="inputname4" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputname4"
                    placeholder="Enter your name"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputname4" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="last name"
                    class="form-control"
                    id="inputname4"
                    placeholder="Enter your last name"
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputEmail4" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="Enter your email"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="inputPassword4"
                    placeholder="Enter your password"
                  />
                </div>
                <div class="col-12">
                  <label for="inputAddress" class="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputAddress"
                    placeholder="Enter your address"
                  />
                </div>
                <div class="col-12">
                  <label for="inputNumber" class="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputNumber"
                    placeholder="Enter your contact number"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputCity" class="form-label">
                    City
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputCity"
                    placeholder="Enter your city name"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label">
                    State
                  </label>
                  <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>

                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label class="form-check-label" for="gridCheck">
                      I agree to the terms and conditions
                    </label>
                  </div>
                </div>
                <div class="col-12">
                  <button type="submit" class="btn btn-primary">
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registration;