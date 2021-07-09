import { Link } from "react-router-dom";

const TransactionsList = ({ transactions }) => (
  <div className="px-4 py-6 divide-y divide-gray-500 divide-opacity-25 w-full h-full overflow-auto">
    {transactions.map((transaction) => (
      <Link
        to={" "}
        key={transaction.TransactionID}
        className="flex justify-between py-4"
      >
        <div>
          <p className="font-bold">{transaction.DestinyAccount}</p>
          <p className="text-sm">{transaction.BankName}</p>
        </div>
        <div className="text-right">
          <p className="font-bold">
            {transaction.Currency} {transaction.Amount}
          </p>
          <p className="text-sm">{transaction.Date}</p>
        </div>
      </Link>
    ))}
  </div>
);
export default TransactionsList;
