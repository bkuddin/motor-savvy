import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { user, signInUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);

        const user = {
          email,
          lastLoggedAt: result.user?.metadata?.lastSignInTime,
        };
        // Updated last logged at in the Database
        fetch("http://localhost:5000/users", {
          method: "PATCH",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

     
  return (
    <div>
      <div className="min-h-screen mt-40">
        <div className="flex justify-center items-center">
          <div className="card flex-shrink-0 w-full max-w-sm border-2 border-gray-200 bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
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
                  placeholder="password"
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
              <p>{user && 'Success'}</p>


              <Link to="/sign-up">
            <p className="text-[#2b1b9a] text-center mt-6">Sign Up Here</p>
          </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
