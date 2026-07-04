import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Admin_navbar from "./Admin_navbar";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
import { AddProduct } from "../serviceApi";
import { useState } from "react";

function Add_product() {
  const [serverMessage, setServerMessage] = useState("");
  const {addproduct}=useContext(ProductContext);
  const schema=z.object({productName:z.string().min(2,{message:"Product name must be at least 4 characters long"}).max(30), 
          category:z.string().min(2,{message:"Category must be at least 2 characters long"}).max(30), 
          price:z.string().min(1,{message:"Price must be a positive number"}).max(100000), 
          weight:z.string().min(1,{message:"Weight must be a positive number"}).max(100),
           description:z.string().min(10,{message:"Description must be at least 10 characters long"}).max(200), 
         image: z.any().refine((files) => files && files.length > 0 && files[0] instanceof File, { message: "Please select a valid image file" })});
  const navigate = useNavigate();
  const { register, handleSubmit ,formState:{errors,isValid}} = useForm({
    resolver:zodResolver(schema)
  });

  const submit = async (data) => {
    try {
      const result = await AddProduct(data);
      setServerMessage(result.message); 
      navigate("/view");
    } catch (error) {
   
  setServerMessage("A server error 500 occurred."); 

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
                <h4 className="mb-0">Add Product</h4>

                <div className="col-md-12">
                  <label className="form-label" htmlFor="productName">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                    id="productName"
                    {...register("productName")}
                  />
                  {errors.productName && (
                    <p className="text-danger">{errors.productName.message}</p>
                  )}
                </div>

                <div className="col-md-12">
                  <label className="form-label" htmlFor="category">
                    Category
                  </label>
                  <select
                    className="form-select"
                    id="category"
                    {...register("category")}
                  >
                    <option value="">Choose...</option>
                    <option value="NUTS">Nuts</option>
                    <option value="SEEDS">Seeds</option>
                    <option value="DRIED FRUITS">Dried Fruits</option>
                    <option value="SWEETS">Sweets</option>
                  </select>
                  {errors.category && (
                    <p className="text-danger">{errors.category.message}</p>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="price">
                    Price (PKR)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter price"
                    id="price"
                    {...register("price")}
                  />
                  {errors.price && (
                    <p className="text-danger">{errors.price.message}</p>
                  )}
                </div>

                <div className="col-md-6">
                  <label className="form-label" htmlFor="weight">
                    Weight (gm)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter weight"
                    id="weight"
                    {...register("weight")}
                  />
                  {errors.weight && (
                    <p className="text-danger">{errors.weight.message}</p>
                  )}
                </div>

 <div className="col-12">
                  <label className="form-label" htmlFor="description">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    placeholder="Enter product description"
                    rows={3}
                    id="description"
                    {...register("description")}
                  />
                  {errors.description && (
                    <p className="text-danger">{errors.description.message}</p>
                  )}
                </div>

                <div className="col-12">
                  <label className="form-label" htmlFor="image">
                    Product Image
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    accept="image/*"
                    id="image"
                    {...register("image", {})}
                  />
                  {errors.image && (
                    <p className="text-danger">{errors.image.message}</p>
                  )}
                </div>

                <div className="col-6">
                  <button type="submit" className="btn btn-primary w-100">
                    Add Product
                  </button>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn btn-danger w-100"
                    onClick={() => navigate("/view")}
                  >
                    Cancel
                  </button>
                </div>
              </form>
              {serverMessage && (
                <p>
                  <strong>{serverMessage}</strong>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Add_product;
