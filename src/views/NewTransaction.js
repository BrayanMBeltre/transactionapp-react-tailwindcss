import { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "../components/Header";
import Nav from "../components/Nav";
import NewTransactionForm from "../components/NewTransactionForm";

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onSubmit = async (data) => {
    if (data) {
      try {
        setIsLoading(true);
        const res = await fetch("http://localhost:3000/api/transactions", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            OriginAccount: "803900473",
            BankName: data.BankName,
            DestinyAccount: data.DestinyAccount,
            DestinyDocument: data.DestinyDocument,
            Currency: data.Currency,
            Amount: data.Amount,
            Concept: data.Concept,
          }),
        });

        const content = await res.json();
        console.log(content);
        setIsLoading(false);
        history.push("/");
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        alert("Something bad happened");
      }
    }
  };

  return (
    <>
      <Nav />
      <Header title="New Transaction" />
      <main>
        <div className="max-w-7xl mx-4 my-6 lg:px-8">
          <NewTransactionForm isLoading={isLoading} onSubmit={onSubmit} />
        </div>
      </main>
    </>
  );
};

export default Upload;
