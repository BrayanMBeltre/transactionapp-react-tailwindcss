import React, { useEffect, useState } from "react";
import { j2xParser } from "fast-xml-parser";

import Header from "../components/Header";
import Nav from "../components/Nav";
import Spin from "../components/Spin";

const Download = () => {
  const parser = new j2xParser();
  const [transactions, setTransactions] = useState([{}]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/transactions");
      const data = await res.json();
      setTransactions(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const Buttons = () => (
    <>
      <a
        href={`data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(transactions)
        )}`}
        download="transactions.json"
        className="w-full h-16 blo flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10 mb-8"
      >
        Download as JSON
      </a>{" "}
      <a
        href={`data:text/xml;charset=utf-8,${encodeURIComponent(
          parser.parse(transactions)
        )}`}
        download="transactions.xml"
        className="w-full h-16 flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
      >
        Download as XML
      </a>
    </>
  );

  return (
    <React.Fragment>
      <Nav />
      <Header title="Download" />
      <main>
        <div className="max-w-7xl h-96 mx-4 my-6 lg:px-8 pt-28">
          {loading ? <Spin /> : <Buttons />}
        </div>
      </main>
    </React.Fragment>
  );
};

export default Download;
