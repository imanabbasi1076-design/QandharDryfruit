import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Admin_navbar from "./Admin_navbar";
import { z} from "zod";
import { zodResolver} from "@hookform/resolvers/zod";
// import {useContext} from 'react';
// import{ProductContext} from "./ProductContext";
import {useState }from "react";
import { DeleteProduct } from "../serviceApi";



function Delete_product() {
  // const {deleteproduct}=useContext(ProductContext);
  const [servermessage, setServerMessage] = useState("");
  const schema=z.object({ 
    id:z.string().min(1,{message:"ID is required"})

  });
  const navigate = useNavigate();
  const { register, handleSubmit ,formState:{errors,isValid},} = useForm({resolver:zodResolver(schema)});


  const submit = async (data) => {
    try{
        const result=await DeleteProduct(data.id);
        setServerMessage(result.message);
    }
    catch(error) {
      setServerMessage("An server error 500 occurred");
    }
  };

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
                  Enter the product ID to permanently delete it.
                </p>

                <div className="col-md-12">
                  <label htmlFor="id" className="form-label">
                    Product ID
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product ID"
                    id="id"
                    {...register("id")}
                  />
                  {errors.id && <p> {errors.id.message}</p>}
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
              {servermessage && (
                <p>
                  <strong>{servermessage}</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delete_product;
