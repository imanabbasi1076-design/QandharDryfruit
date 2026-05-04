function User_request() {
  return (
   
      <div className="container mt-4">
        <h5>Client Orders</h5>
        <p className="text-muted">Total 5 requests</p>

        <table className="table table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Client Name</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
              <th scope="col">Email</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ali Raza</td>
              <td>Almonds</td>
              <td>2 kg</td>
              <td>Rs. 10,000</td>
              <td>ali@gmail.com</td>
              <td><span className="badge bg-warning text-dark">Pending</span></td>
              <td>
                <button className="btn btn-success btn-sm me-1">Accept</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Sara Khan</td>
              <td>Ajwa Dates</td>
              <td>1 kg</td>
              <td>Rs. 7,000</td>
              <td>sara@gmail.com</td>
              <td><span className="badge bg-success">Accepted</span></td>
              <td>
                <button className="btn btn-success btn-sm me-1">Accept</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Usman Ahmed</td>
              <td>Chilghoza</td>
              <td>500 g</td>
              <td>Rs. 9,000</td>
              <td>usman@gmail.com</td>
              <td><span className="badge bg-danger">Cancelled</span></td>
              <td>
                <button className="btn btn-success btn-sm me-1">Accept</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Fatima Noor</td>
              <td>Walnuts</td>
              <td>3 kg</td>
              <td>Rs. 18,000</td>
              <td>fatima@gmail.com</td>
              <td><span className="badge bg-warning text-dark">Pending</span></td>
              <td>
                <button className="btn btn-success btn-sm me-1">Accept</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>Hassan Mir</td>
              <td>Apricot</td>
              <td>1 kg</td>
              <td>Rs. 3,000</td>
              <td>hassan@gmail.com</td>
              <td><span className="badge bg-success">Accepted</span></td>
              <td>
                <button className="btn btn-success btn-sm me-1">Accept</button>
                <button className="btn btn-danger btn-sm">Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
}
export default User_request;