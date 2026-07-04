import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from"zod";                              
import { Link } from "react-router-dom";
import { Signup } from "../serviceApi";
import { useState } from "react";

function Registration() {
  const [serverMessage, setServerMessage] = useState("");
  const schema = z.object({
    firstName: z.string().min(2,{message: "First name must be at least 2 characters long"}).max(30 ,{message: "First name must be at most 30 characters long"}),
    lastName: z.string().min(2,{message: "Last name must be at least 2 characters long"}).max(30 ,{message: "Last name must be at most 30 characters long"}),
    email: z.string().email({message: "Please enter a valid email address"}),
    password: z.string().min(6,{message: "Password must be at least 6 characters long"}).max(30,{message: "Password must be at most 30 characters long"} ),
    confirmPassword: z.string().min(6,{message: "Password must be at least 6 characters long"}).max(30,{message: "Confirm password must be at most 30 characters long"}),
    address: z.string().min(10,{message: "Address must be at least 10 characters long"}).max(200 ,{message:"Address must be at most 200 characters long"}),
    contact: z.string().min(10,{message: "Contact number must be at least 10 characters long"}).max(15,{message: "Contact number must be at most 15 characters long"}),
    city: z.string().min(2,{message: "City must be at least 2 characters long"}).max(100 ,{message: "City must be at most 100 characters long"}),
    state:z.string().min(1,{message:"Please select a province"}),
    terms:z.boolean().refine((value) => value === true, {message: "You must agree to the terms and conditions"})

  }).refine((data) => data.password==data.confirmPassword , {message: "Passwords do not match", path:["confirmPassword"],});

  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors ,isValid} } = useForm({
    resolver: zodResolver(schema),
    defaultValues:{terms:false},
  });

 const submit = async (data) => {
   try {
     const result = await Signup(data);
     setServerMessage(result.message);
   } catch (error) {
     setServerMessage("A server error 500 occurred.");
   }
 };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div
          className="card p-3"
          style={{
            minHeight: "85vh",
            width: "400px",
            border: "1px solid black",
          }}
        >
          <form className="row g-3" onSubmit={handleSubmit(submit)}>
            <div className="text-center mt-3 mb-1">
              <h5 className="fw-bold">Create Account</h5>
            </div>

            <div className="col-md-6">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-danger">{errors.firstName.message}</p>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your last name"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-danger">{errors.lastName.message}</p>
              )}
            </div>

            <div className="col-md-12">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-danger">{errors.password.message}</p>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-enter password"
                {...register("confirmPassword")}
              />
              {errors.confirmPassword && (
                <p className="text-danger">{errors.confirmPassword.message}</p>
              )}
            </div>

            <div className="col-12">
              <label className="form-label">Address</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                {...register("address")}
              />
              {errors.address && (
                <p className="text-danger">{errors.address.message}</p>
              )}
            </div>

            <div className="col-12">
              <label className="form-label">Contact Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your contact number"
                {...register("contact")}
              />
              {errors.contact && (
                <p className="text-danger">{errors.contact.message}</p>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">City</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your city"
                {...register("city")}
              />
              {errors.city && (
                <p className="text-danger">{errors.city.message}</p>
              )}
            </div>

            <div className="col-md-6">
              <label className="form-label">Province</label>
              <select className="form-select" {...register("state")}>
                <option value="">Choose...</option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
                <option value="AJK">AJK</option>
                <option value="Gilgit-Baltistan">Gilgit-Baltistan</option>
              </select>
              {errors.state && (
                <p className="text-danger">{errors.state.message}</p>
              )}
            </div>

            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="terms"
                  {...register("terms")}
                />
                {errors.terms && (
                  <p className="text-danger">{errors.terms.message}</p>
                )}
                <label className="form-check-label" htmlFor="terms">
                  I agree to the terms and conditions
                </label>
              </div>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary w-100">
                Create Account
              </button>
            </div>

            <p className="text-center text-muted mt-2">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
          
          {serverMessage && (
            <p>
              <strong>{serverMessage}</strong>
            </p>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default Registration;
