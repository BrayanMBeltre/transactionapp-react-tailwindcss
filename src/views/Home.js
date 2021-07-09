import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Spin from "../components/Spin";
import TransactionsList from "../components/TransactionsList";

const Home = () => {
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

  return (
    <React.Fragment>
      <Header title="Transactions" />
      <main>
        <div className="pt-24 h-screen">
          {loading === true ? (
            <Spin />
          ) : (
            <div className="h-full pb-16">
              <TransactionsList transactions={transactions} />
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </React.Fragment>
  );
};

export default Home;
