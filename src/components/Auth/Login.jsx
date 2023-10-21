import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Login = () => {
  const { user, signInUser, signInWithGoogle } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");

  const location = useLocation()
  const navigate = useNavigate()

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
          // Navigate after login
        navigate(location.state? location.state : '/')
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
        setLoginError(error.message);
        
      });
  };

  const handleGoogleSignIn = ()=>{
    signInWithGoogle()
    .then(result =>{
      console.log(result.user);
    //   userUpdate((name, photo)=>{

    //   })

      if(result.user){
        navigate(location.state ? location.state: "/")
      }

    })
    .then(error=>{
      console.log(error);
      
    })
}

     
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

              <p className="text-[#D2042D] mt-2">{loginError}</p>

              <button onClick={handleGoogleSignIn} className="border-2 border-gray-200 w-2/3  mx-auto mt-2 flex justify-center items-center py-2  rounded-xl" >
              <FcGoogle className="mr-2"/> Sign With Google
            </button>


              <Link to="/sign-up">
            <p className="text-[#2b1b9a] text-center mt-4">Sign Up Here</p>
          </Link>
            </form>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
