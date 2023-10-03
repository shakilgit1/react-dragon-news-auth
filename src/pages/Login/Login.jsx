import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
 const {signIn} = useContext(AuthContext);
 const location = useLocation();
 const navigate = useNavigate();
 console.log('login page',location);

const handleLogin = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password')
    console.log(email, password);

    signIn(email, password)
    .then(result =>{
        console.log(result.user);
        navigate(location?.state ? location.state : '/');
    })
    .catch(error =>{
        console.log(error);
    })
}

  return (
    <div>
      <Navbar></Navbar>
      <div className="space-y-4">
      <h2 className="text-3xl text-center">Please Login</h2>
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
      </form>
         <p className="text-center">Do not have an account? Please <Link to='/register' className="text-blue-400 font-semibold">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
