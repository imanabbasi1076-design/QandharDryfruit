
 function View() {

    return (
      <div className="container mt-4">
        <h5>All products</h5>
        <p className="text-muted">List of all available products</p>
        <table className="table  table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">id</th>
              <th scope="col">Product Name</th>
              <th scope="col">Price</th>
              <th scope="col">Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Almonds</td>
              <td>5000</td>
              <td>10000 kg</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Chilghoza</td>
              <td>18000</td>
              <td>5000 kg </td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Walnut</td>
              <td>6000</td>
              <td>7000 kg</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cashew</td>
              <td>4000</td>
              <td>600 kg</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Figs</td>
              <td>6000</td>
              <td>70kg</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Walnut</td>
              <td>6000</td>
              <td>7000 kg</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Ajwa Dates</td>
              <td>7000</td>
              <td>50 kg</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Mabroom Dates</td>
              <td>5500</td>
              <td>80 kg</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Apricot</td>
              <td>3000</td>
              <td>200 kg</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Green Raisins</td>
              <td>2000</td>
              <td>30 kg</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Black Rasins</td>
              <td>1500</td>
              <td>10 kg</td>
            </tr>
          </tbody>
        </table>
      </div>
    );}
export default View;
