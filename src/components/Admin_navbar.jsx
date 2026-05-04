function Admin_navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Qandhar Dryfruit Exchange
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Dashboard
              </a>
            </li>
          
            <li className="nav-item">
              <a className="nav-link" href="#">
                Orders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Users Req
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Add
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Delete
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Update
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
            View
              </a>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success " type="submit">
              Search
            </button>

            <button className="btn btn-outline-danger ms-2" type="button">
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Admin_navbar;
