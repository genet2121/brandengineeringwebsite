


import React, { useState, useEffect } from "react";
import AdminAPI from "../../APIs/AdminAPI";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const MESSAGE_TIMEOUT = 2000; 

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseData, setResponseData] = useState<{
    status: string;
    message: string;
  } | null>(null);

  useEffect(() => {
    if (responseData) {
      const timer = setTimeout(() => {
        setResponseData(null);
      }, MESSAGE_TIMEOUT);
      
      return () => clearTimeout(timer);
    }
  }, [responseData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setResponseData(null);
    
    try {
      const payload = { email };
      const response = await AdminAPI.createNormal("v1/subscription", payload);
      
      setResponseData({
        status: response.status || "SUCCESS",
        message: response.message || "Thank you for subscribing!"
      });
      
      if (response.status === "SUCCESS") {
        setEmail("");
      }
    } catch (error: any) {
      const errorMessage = error.response?.data?.message || 
                         error.message || 
                         "Subscription failed. Please try again later.";
      
      setResponseData({
        status: "ERROR",
        message: errorMessage
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-yellow-400 py-8 sm:py-10 rounded-lg px-4 sm:px-6 mx-2 sm:mx-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {/* Left Text */}
        <div className="mb-4 md:mb-0 text-center md:text-left w-full md:w-auto">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
          Subscribe to Our Newsletters
          </h2>
          <p className="text-xs sm:text-sm text-gray-800 mt-1">
          Get valuable updates, expert tips, and important news delivered regularly.
          </p>
        </div>

        {/* Message or Form */}
        {responseData ? (
          <div
            className={`flex items-center justify-center w-full md:w-auto ${
              responseData.status === "SUCCESS"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            } px-4 py-2 sm:py-3 rounded-full animate-fadeIn`}
          >
            {responseData.status === "SUCCESS" ? (
              <CheckCircleIcon className="mr-2 text-sm" />
            ) : (
              <ErrorOutlineIcon className="mr-2 text-sm" />
            )}
            <span className="text-xs sm:text-sm font-medium">{responseData.message}</span>
          </div>
        ) : (
          <form className="w-full md:w-auto min-w-0" onSubmit={handleSubmit}>
            {/* <div className="flex flex-col sm:flex-row rounded-full bg-white overflow-hidden shadow-md w-full max-w-md"> */}
            <div className="flex items-stretch rounded-full bg-white overflow-hidden shadow-md w-full max-w-md">

              <div className="flex items-center px-3 sm:px-4 py-2 sm:py-0 flex-grow">
                <EmailIcon fontSize="small" className="text-gray-500 text-sm" />
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow px-2 py-2 sm:py-3 outline-none text-xs sm:text-sm w-full min-w-0"
                  disabled={isLoading}
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 sm:px-5 py-2 sm:py-3 text-xs sm:text-sm rounded-full transition-all disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default Subscribe;