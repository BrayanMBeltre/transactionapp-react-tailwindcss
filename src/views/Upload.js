import React, { useState } from "react";

import Header from "../components/Header";
import Nav from "../components/Nav";
import DropZone from "../components/DropZone";
import Spin from "../components/Spin";

const Upload = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const postData = () => {
    setLoading(true);
    transactions.map(async (transaction) => {
      try {
        const res = await fetch("http://localhost:3000/api/transactions", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(transaction),
        });

        const content = await res.json();
        console.log(content);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <React.Fragment>
      <Nav />
      <Header title="Upload" />
      <main>
        <div className="max-w-7xl mx-4 my-6 lg:px-8">
          <form onSubmit={handleSubmit}>
            <DropZone setTransactions={setTransactions} />
            {transactions.length > 0 ? (
              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                {loading ? <Spin /> : "Upload"}
              </button>
            ) : (
              ""
            )}
          </form>
        </div>
      </main>
    </React.Fragment>
  );
};

export default Upload;
