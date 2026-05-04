function  Delete_product() {
    return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div>
            <div
              className="card p-3 "
              style={{
                minHeight: "30vh",
                width: "400px",
                border: "1px solid black",
              }}
            >
              <form class="row g-3">
                <h4> DELETE PRODUCT</h4>
                <div class="col-md-12">
                  <label for="inputname4" class="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="inputname4"
                    placeholder="Enter product name"
                  />
                </div>
         
                <div class="col-6">
                  <button type="submit" class="btn btn-primary">
                    Delete product
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
  )
}
    export default Delete_product;