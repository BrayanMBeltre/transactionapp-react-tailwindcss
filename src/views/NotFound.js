import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";

export default function NotFound() {
  return (
    <div className="h-96">
      <Header title="Page Not Found" />
      <main className="h-full">
        <div className="flex max-w-7xl py-auto mx-4 my-6 lg:px-8 h-full">
          <Link to="/" className="my-auto w-full">
            <div className=" h-16 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Back Home
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}
