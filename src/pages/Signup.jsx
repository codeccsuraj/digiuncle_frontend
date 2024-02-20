import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword : "",
  });

  const handleMobileChange = (e) => {
    const inputValue = e.target.value;
    if (
      inputValue === "" ||
      (/^\d+$/.test(inputValue) && inputValue.length <= 10)
    ) {
      setUserDetails({
        ...userDetails,
        mobile: inputValue,
      });
    }
  };
  const isPasswordValid = (password) => {
    // Password should contain at least one uppercase letter, one lowercase letter,
    // one number, and one special character
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
    return passwordRegex.test(password);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (Object.values(userDetails).some((value) => value === "")) {
      toast.error("Please fill all required fields");
    } else if (userDetails.mobile.length < 10) {
      toast.error("Mobile number should be at least 10 digits");
    } else if (userDetails.password.length < 8) {
      toast.error("Password should be more than 8 digits");
    } else if (!isPasswordValid(userDetails.password)) {
      Swal.fire({
        icon: "error",
        title: "Password validation error",
        text: "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character(@,_,$,%)",
      });
    }else if (userDetails.password !== userDetails.confirmPassword) {
      toast.error("Password and confirm password do not match");
    } else {
      toast.success("user registered successfully")
      console.log(userDetails);
    }
  };
  return (
    <div className="w-screen overflow-x-hidden ">
      <div className="mx-32 grid grid-cols-2">
        <div>
          <img src="" alt="" className="object-cover" />
        </div>
        <div className="flex flex-col items-center relative">
          <span className="absolute top-4 right-4">
            <Link to="/" className="flex gap-2 text-green-600">
              <FaHome className="text-2xl text-green-600" /> Back to home
            </Link>
          </span>
          <h2 className="text-3xl py-4 text-center">Sign up here</h2>
          <p>
            Already have an account ?{" "}
            <Link to="/login" className="text-cyan-600 font-bold">
              Login in here
            </Link>
          </p>
          <form onSubmit={handleClick} className="w-full">
            <div className="grid grid-cols-2 gap-2">
              <div className="form-group flex flex-col gap-2 py-3">
                <label htmlFor="first_name" className="text-lg font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
                  value={userDetails.first_name}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      first_name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-group flex flex-col gap-2 py-3">
                <label htmlFor="last_name" className="text-lg font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
                  value={userDetails.last_name}
                  onChange={(e) =>
                    setUserDetails({
                      ...userDetails,
                      last_name: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="form-group flex flex-col gap-2 py-3">
              <label htmlFor="mobile" className="text-lg font-bold">
                Mobile
              </label>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
                value={userDetails.mobile}
                onChange={handleMobileChange}
              />
            </div>
            <div className="form-group flex flex-col gap-2 py-3">
              <label htmlFor="email" className="text-lg font-bold">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    email: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group flex flex-col gap-2 py-3">
              <label htmlFor="password" className="text-lg font-bold">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    password: e.target.value,
                  })
                }
              />
              <p className="flex items-center gap-2">
                <input onClick={() => setShowPassword(!showPassword)} type="checkbox"  /> show password</p>
            </div>
            <div className="form-group flex flex-col gap-2 py-3">
              <label htmlFor="confirmPassword" className="text-lg font-bold">
                Confirm password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Enter your password"
                className="w-full py-3 px-3 border-none outline-none bg-slate-100 rounded-2xl"
                value={userDetails.confirmPassword}
                onChange={(e) =>
                  setUserDetails({
                    ...userDetails,
                    confirmPassword: e.target.value,
                  })
                }
              />
            </div>
            <div className="form-group flex justify-center gap-2 py-3">
              <button
                type="submit"
                className="bg-orange-700 py-3 text-lg font-bold rounded-2xl w-2/4"
              >
                Register
              </button>
            </div>
          </form>
          <div className="py-3">
            <p>
              Get help in signing in.{" "}
              <Link className="text-cyan-600 font-bold">forgot now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
