import { Link } from "react-router-dom";
import React from "react";

const BottomNav = () => {
  return (
    <div className="block fixed inset-x-0 bottom-0 z-10 bg-gray-900 ">
      <div className="flex justify-around items-center h-16">
        <Link to="/upload">
          <div className="w-48 h-16 flex justify-center items-center hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
              />
            </svg>
          </div>
        </Link>
        <Link to="/download">
          <div className="w-48 h-16 flex justify-center items-center hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;
