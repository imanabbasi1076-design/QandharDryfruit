import logo from "../assets/images/LOGO.png";
function Update_product() {
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
                <h4> UPDATE PRODUCT</h4>
                <div class="col-md-12">
                  <label for="inputname4" class="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputname4"
                    placeholder="Kaghzi Badam"
                  />
                </div>
                <div class="col-md-12">
                  <label for="inputState" class="form-label">
                    Category
                  </label>
                  <select id="inputState" class="form-select">
                   
                    <option>seeds</option>
                    <option>nuts</option>
                    <option>Dried Fruits</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputEmail4" class="form-label">
                    Price(PKR)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputEmail4"
                    placeholder="4000"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputweight" class="form-label">
                    Weight (gm)
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputweight"
                    placeholder="1kg"
                  />
                </div>

                <div class="col-12">
                  <label for="inputDescription" class="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputDescription"
                    placeholder="Kaghzi Badam is a type of almond that is known for its thin, papery skin. It is often used in desserts and snacks for its unique texture and flavor."
                  />
                </div>
                <div class="mb-3">
                  <label for="formFileSm" class="form-label">
                    Small file input example
                  </label>
                  <input
                    class="form-control form-control-sm"
                    id="formFileSm"
                    type="file"
                  />
                </div>

                <div class="col-6">
                  <button type="submit" class="btn btn-primary">
                    Update product
                  </button>
                </div>
                <div class="col-6">
                  <button type="submit" class="btn btn-danger">
                    Cancel
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
export default Update_product;
