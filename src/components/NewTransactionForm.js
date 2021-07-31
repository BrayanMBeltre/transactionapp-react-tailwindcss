import React from "react";
import { useForm } from "react-hook-form";

export default function NewTransactionForm({ isLoading, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <div className="relative z-0 w-full mb-8">
        <input
          type="number"
          name="Origin Account"
          placeholder=" "
          {...register("OriginAccount", { required: true, maxLength: 9 })}
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
        />
        <label
          htmlFor="Origin Account"
          className="absolute duration-300 top-3  -z-1 origin-0 text-gray-500"
        >
          Origin Account
        </label>
        {errors.OriginAccount && (
          <span className="text-sm text-red-600" id="error">
            {errors.OriginAccount?.type === "required" &&
              "Origin Account is required"}
          </span>
        )}
      </div> */}

      <div className="relative z-0 w-full mb-8">
        <input
          type="text"
          name="Bank Name"
          placeholder=" "
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          {...register("BankName", { required: true, maxLength: 80 })}
        />
        <label
          htmlFor="Bank Name"
          className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >
          Enter Bank Name
        </label>
        {errors.BankName && (
          <span className="text-sm text-red-600" id="error">
            {errors.BankName?.type === "required" && "Bank Name is required"}
          </span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="relative z-0 w-full mb-8">
          <input
            type="number"
            name="Destiny Account"
            placeholder=" "
            {...register("DestinyAccount", { required: true, maxLength: 9 })}
            className="pt-3 pb-2  block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            htmlFor="Destiny Account"
            className="absolute duration-300 top-3  -z-1 origin-0 text-gray-500"
          >
            Destiny Account
          </label>

          {errors.DestinyAccount && (
            <span className="text-sm text-red-600" id="error">
              {errors.DestinyAccount?.type === "required" &&
                "Destiny Account is required"}
            </span>
          )}
        </div>

        <div className="relative z-0 w-full mb-8">
          <input
            type="number"
            name="Destiny Document"
            placeholder=" "
            {...register("DestinyDocument", { required: true, maxLength: 11 })}
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <label
            htmlFor="Destiny Document"
            className="absolute duration-300 top-3  -z-1 origin-0 text-gray-500"
          >
            Destiny Document
          </label>
          {errors.DestinyDocument && (
            <span className="text-sm text-red-600" id="error">
              {errors.DestinyDocument?.type === "required" &&
                "Destiny Document is required"}
            </span>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative z-0 w-full mb-8">
          <select
            className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
            {...register("Currency", { required: true })}
          >
            <option value="DOP">DOP</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
          <label
            htmlFor="select"
            className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
          >
            Select an option
          </label>
          {errors.Currency && (
            <span className="text-sm text-red-600" id="error">
              {errors.Currency?.type === "required" &&
                "Option has to be selected"}
            </span>
          )}
        </div>

        <div className="relative z-0 w-full mb-8">
          <input
            type="number"
            name="Amount"
            placeholder=" "
            {...register("Amount", { required: true, min: 69 })}
            className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          />
          <div className="absolute top-0 left-0 mt-3 ml-1 text-gray-400">$</div>
          <label
            htmlFor="Amount"
            className="absolute duration-300 top-3 left-5 -z-1 origin-0 text-gray-500"
          >
            Amount
          </label>
          {errors.Amount && (
            <span className="text-sm text-red-600" id="error">
              {errors.Amount?.type === "required" && "Amount is required"}
            </span>
          )}
        </div>
      </div>

      <div className="relative z-0 w-full mb-8">
        <textarea
          type="text"
          rows={3}
          name="Concept"
          placeholder=" "
          className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          {...register("Concept", { required: true })}
        />
        <label
          htmlFor="Concept"
          className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >
          Enter Concept
        </label>
        {errors.Concept && (
          <span className="text-sm text-red-600" id="error">
            {errors.Concept?.type === "required" && "Concept is required"}
          </span>
        )}
      </div>
      {/* 
      <div className="relative z-0 w-full mb-8">
        <input
          type="datetime"
          name="date"
          defaultValue={formatedDate}
          disabled={true}
          className="text-gray-500 pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
          {...register("Date", { required: true })}
        />
        <label
          htmlFor="date"
          className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
        >
          Date
        </label>
        {errors.Date && (
          <span className="text-sm text-red-600" id="error">
            {errors.Date?.type === "required" && "Date is required"}
          </span>
        )}
      </div> */}

      <button
        type="submit"
        disabled={isLoading && true}
        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
      >
        {isLoading ? "Loading..." : "Upload"}
      </button>
    </form>
  );
}
