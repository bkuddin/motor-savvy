import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider";

const Register = () => {
  const { registerUser, verifyEmail, signInWithGoogle} = useContext(AuthContext);
  const [registerError, setRegisterError] = useState("");
  const [registerSuccess, setRegisterSuccess] = useState("");
  const [gender, setGender] = useState("");

  const location = useLocation()
  const navigate = useNavigate()



  // Handle Gender
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // Handle Register

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;   

    if (!/^(?=.*[a-z]).{6,}$/.test(password)) {
        // return toast.error("Password length must have 6 characters")
       return setRegisterError("Password length must have 6 characters")
    }

    else if (!/(?=.*[!@#$%^&*])/.test(password)) {
        return toast.error("Password must have a special character")
    }
    else if (!/(?=.*[A-Z])/.test(password)) {
        return toast.error("Password must have a capital letter")
    }
    else if (!/(?=.*\d)/.test(password)) {
        return toast.error("Password must have a number")
    }

    // Firebase Register Auth
    registerUser(email, password)
      .then((result) => {
        console.log(result.user);        
        setRegisterSuccess("User created successfully");
        // Send email for verification 
        verifyEmail(result.user)
        .then(() => {
          alert('Email verification sent, Please verify your account!')
          return
      });

        if(result.user){
            navigate(location.state ? location.state: "/")
          }
        //  Send user to Database
        const createAt = result.user?.metadata?.creationTime;
        const users = { name, email, password, createAt, gender };
        console.log(users);
        
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(users),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          
            if (data.insertedId) {           
                
              Swal.fire({
                title: "Success!",
                text: "User added successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
              
              form.reset();
            }
          });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
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
    <div className="py-40">
      <div className="w-1/3 mx-auto bg-white  p-10 rounded-3xl border-2 border-gray-200">
        <form onSubmit={handleRegister}>
          <div className="form-control">
            <label className="label"></label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered rounded-xl focus:outline-none focus:border-[#2b1b9a] "
              required
            />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered rounded-xl focus:outline-none focus:border-[#2b1b9a] "
              required
            />
          </div>
          <div className="form-control">
            <label className="label"></label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered rounded-xl focus:outline-none focus:border-[#2b1b9a] "
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl">Gender</span>
            </label>
            <div className="flex space-x-4 ">
              <div className="text-[#2b1b9a] font-semibold">
                <input
                  className="mr-2"
                  type="radio"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={handleGenderChange}
                />
                Male
              </div>
              <div className="text-[#2b1b9a] font-semibold">
                <input
                  className="mr-2"
                  type="radio"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={handleGenderChange}
                />
                Female
              </div>
              <div className="text-[#2b1b9a] font-semibold">
                <input
                  className="mr-2"
                  type="radio"
                  name="gender"
                  value="other"
                  checked={gender === "other"}
                  onChange={handleGenderChange}
                />
                Other
              </div>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#2b1b9a] rounded-xl text-white hover:text-[#2b1b9a]">
              Register
            </button>
            <p className="text-[#D2042D] mt-2">{registerError}</p>
            {registerSuccess && <p className="text-green-700">{registerSuccess}</p>}
            <button onClick={handleGoogleSignIn} className="border-2 border-gray-200 w-1/2  mx-auto mt-7 flex justify-center items-center py-2 rounded-xl" >
              <FcGoogle className="mr-3"/> Sign With Google
            </button>

          </div>                 
              

          <Link to="/login">
            <p className="text-[#2b1b9a] text-center mt-6">Login Here</p>
          </Link>
        </form>

        

       
      </div>
    </div>
  );
};

export default Register;
