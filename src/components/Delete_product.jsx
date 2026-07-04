import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Admin_navbar from "./Admin_navbar";
import {z} from "zod";
import { zodResolver} from "@hookform/resolvers/zod";
import {useContext} from 'react';
import{ProductContext} from "./ProductContext";


function Delete_product() {
  const {deleteproduct}=useContext(ProductContext);
  const schema=z.object({ 
    productname:z.string().min(2,{message:"Product name must be at least 2 characters long"}).max(30  ,{message:"Product name must be at most 30 characters long"})

  });
  const navigate = useNavigate();
  const { register, handleSubmit ,formState:{errors,isValid},} = useForm({resolver:zodResolver(schema)});


  function submit(data) {
    console.log("Delete:", data);
    deleteproduct(data.productname);
    navigate("/view");
  }

  return (
    <div>
      <Admin_navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card p-4" style={{ border: "1px solid black" }}>
              <form className="row g-3" onSubmit={handleSubmit(submit)}>
                <h4 className="mb-0">Delete Product</h4>
                <p className="text-muted small mb-0">
                  Enter the product name to permanently delete it.
                </p>

                <div className="col-md-12">
                  <label htmlFor="productname" className="form-label">Product Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                    id="productname"
                    {...register("productname")}
                  />
                  {errors.productname && <p> {errors.productname.message}</p>}
                </div>

                <div className="col-6">
                  <button type="submit" className="btn btn-danger w-100">
                    Delete Product
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-secondary w-100"
                    onClick={() => navigate("/view")}
                  >
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

export default Delete_product;
