import React from "react";
import { Link } from "react-router-dom";
import { FaSadTear } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <FaSadTear className="text-5xl mb-4 text-blue-500" />
      <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
      <p className="mb-6 text-center">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-orange-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
