/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PasswordRegisterScreen = ({ match, history }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordRegisterScreen = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      return toast.error("Password do not match. Please try again.");
    }
    try {
      const { data } = await axios.put(
        `https://mern-auth-101.herokuapp.com/api/auth/activate-account/${match.params.registertoken}`,
        {
          password,
        }
      );
      localStorage.setItem("authToken", data.token);
      toast.success(
        "Account regitered successfully. You will be redirected to the dashboard"
      );
      setTimeout(() => {
        history.push("/login");
      }, 5000);
    } catch (error) {
      toast.error(error.response.data.error);
    }
  };

  return (
    <div className="font-sans min-h-screen antialiased bg-gray-900 flex justify-center items-center">
      <div className="flex flex-col justify-center sm:w-96 sm:m-auto mx-5 mb-5 space-y-8">
        <h1 className="font-bold text-center text-4xl text-yellow-500">
          MERN<span className="text-blue-500"> Auth-101</span>
        </h1>
        <form onSubmit={passwordRegisterScreen}>
          <div className="flex flex-col bg-white px-10 py-5 rounded-lg shadow space-y-6">
            <h1 className="font-bold text-xl text-center">Password Register</h1>

            <div className="flex flex-col space-y-1">
              <label>Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label>Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmpPassword"
                className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
          </div>
        </form>
        <div className="flex justify-center text-gray-500 text-sm">
          <p>&copy;{new Date().getFullYear()} | MIT License | Konark Lohat</p>
        </div>
      </div>
    </div>
  );
};

export default PasswordRegisterScreen;
