import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const PrivateScreen = ({ history }) => {
  const [privateData, setPrivateData] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      history.push("/login");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        const { data } = await axios.get("/api/private", config);
        setPrivateData(data.data);
      } catch (error) {
        localStorage.removeItem("authToken");
        toast.error("Not authorized. Please login again");
      }
    };

    fetchPrivateData();
  }, [history]);

  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    history.push("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="container text-white">
        <p className="text-center text-green-400 ">{privateData}</p>
        <div className="bg-purple-800 rounded shadow-lg p-5 md:p-20 mx-10">
          <div className="text-center">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-yellow-600 sm:text-5xl sm:leading-none md:text-6xl">
              MERN<span className="text-white"> Auth-101</span>
            </h2>
            <h3 className="text-xl md:text-3xl mt-10">
              Authentication & Authorization System developed with MERN Stack
            </h3>
            <p className="text-md md:text-xl mt-10">
              <a className="hover:underline" href="http://www.google.com">
                MERN Auth-101
              </a>{" "}
              is an open-source code base to start with the fast developement of
              MERN based Authentication & Authorization. MIT Licensed and
              managed by <span className="font-bold">Konark Lohat</span>.
            </p>
          </div>
          <div className="flex flex-wrap mt-10 justify-center">
            <div className="m-3">
              <a
                href="https://github.com/LastComrade"
                className="md:w-32 bg-white tracking-wide duration-200 text-gray-800 font-bold rounded border-2 border-gray-900 hover:bg-gray-900 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">GitHub</span>
              </a>
            </div>
            <div className="m-3">
              <a
                href="https://www.linkedin.com/in/konark-lohat/"
                className="md:w-32 bg-white tracking-wide duration-200 text-gray-800 font-bold rounded border-2 border-blue-500 hover:border-blue-800 hover:bg-blue-800 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">LinkedIn</span>
              </a>
            </div>
            <div className="m-3">
              <button
                onClick={logoutHandler}
                className="md:w-32 bg-white tracking-wide duration-200 text-gray-800 font-bold rounded border-2 border-red-600 hover:border-red-600 hover:bg-red-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >
                <span className="mx-auto">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 justify-center text-gray-500 text-sm">
        <p>&copy;{new Date().getFullYear()} | MIT License | Konark Lohat</p>
      </div>
    </div>
  );
};

export default PrivateScreen;
