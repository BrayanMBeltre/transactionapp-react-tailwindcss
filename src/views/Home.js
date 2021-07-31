import BottomNav from "../components/BottomNav";
import Header from "../components/Header";
import Spin from "../components/Spin";
import TransactionsList from "../components/TransactionsList";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const { status, data, error } = useFetch(
    "http://localhost:3000/api/transactions"
  );

  status === "error" && console.log(error);

  return (
    <>
      <div className="flex justify-between items-center">
        <Header title="Transactions" />
      </div>
      <main>
        <div className="pt-24 h-screen">
          {status === "fetching" ? (
            <Spin />
          ) : (
            <div className="h-full pb-16">
              <TransactionsList transactions={data} />
            </div>
          )}
        </div>
      </main>
      <BottomNav />
    </>
  );
}
