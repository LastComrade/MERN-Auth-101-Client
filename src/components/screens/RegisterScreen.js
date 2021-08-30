/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const RegisterScreen = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("https://mern-auth-101.herokuapp.com/api/auth/register", { name, email });
      toast.success(data.data);
    } catch (error) {
      toast.error (error.response.data.error);
    }
  };

  return (
    <div className="font-sans min-h-screen antialiased bg-gray-900 flex justify-center items-center">
      <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
        <h1 className="font-bold text-center text-4xl text-yellow-500">
          MERN<span className="text-blue-500"> Auth-101</span>
        </h1>
        <form onSubmit={registerHandler}>
          <div className="flex flex-col bg-white px-10 py-5 rounded-lg shadow space-y-6">
            <h1 className="font-bold text-xl text-center">Register</h1>

            <div className="flex flex-col space-y-1">
              <label>Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label>Email Address</label>
              <input
                type="text"
                name="email"
                id="email"
                className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col-reverse sm:flex-row sm:justify-between items-center">
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold px-5 py-2 rounded focus:outline-none shadow hover:bg-blue-700 transition-colors"
              >
                Register
              </button>
            </div>
            <Link
              to="/login"
              className="mx-auto inline text-yellow-700 text-lg hover:text-yellow-900"
            >
              Already have an account?
            </Link>
          </div>
        </form>
        <div className="flex justify-center text-gray-500 text-sm">
          <p>&copy;{new Date().getFullYear()} | MIT License | Konark Lohat</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
