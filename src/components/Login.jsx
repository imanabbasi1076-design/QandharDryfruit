import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {useContext} from 'react';
import {AuthContext} from './AuthContext';


function Login() {
    const schema = z.object({ 
        email: z.string().email({ message: "Invalid email address" }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" })
      });
  const navigate = useNavigate();
  const {login}=useContext(AuthContext);
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ resolver: zodResolver(schema) });

  function submit(data) {
    console.log(data);
   
    if (data.email === "admin@gmail.com" && data.password === "admin123") {
      login();
      navigate("/admin");
    } else {
      console.log("Invalid credentials");
      
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="position-absolute top-50 start-50 translate-middle">
            <div
              className="card p-3"
              style={{
                minHeight: "85vh",
                width: "400px",
                border: "1px solid black",
              }}
            >
              <form onSubmit={handleSubmit(submit)}>
                <div className="text-center mb-3">
                  <h5 className="fw-bold">QANDHAR DRYFRUIT</h5>
                  <p className="text-muted">Welcome back! Please login</p>
                </div>

                <div className="row mb-3">
                  <label htmlFor="email" className="col-sm-3 col-form-label">
                    Email
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      id="email"
                        {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-danger">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="row mb-3">
                  <label htmlFor="password" className="col-sm-3 col-form-label">
                    Password
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                        {...register("password")}
                    />
                    {errors.password && (
                      <p className="text-danger">{errors.password.message}</p>
                    )}
                  </div>
                </div>

                <div className="d-flex justify-content-between mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="rememberMe"
                    />
                    <label className="form-check-label" htmlFor="rememberMe">
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  LOGIN
                </button>

                <p className="text-center text-muted mt-3">
                  No account? <Link to="/register">Sign up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
