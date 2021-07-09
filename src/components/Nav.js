import { Link } from "react-router-dom";
import React from "react";
import {
  ArrowLeftIcon,
  PlusIcon,
  PencilIcon,
  MenuIcon,
} from "@heroicons/react/outline";
const Nav = () => {
  const ShowPlus = false;
  const showEdit = false;
  const ShowMenu = true;

  return (
    <div className="h-16 bg-gray-900 flex justify-between items-center">
      <Link to="/">
        <ArrowLeftIcon className="h-6 w-6 text-gray-100 ml-4" />
      </Link>
      <h1 className="text-gray-100 font-bold text-xl">Name</h1>
      {ShowPlus ? <PlusIcon className="h-6 w-6 text-gray-100 mr-4" /> : ""}
      {showEdit ? <PencilIcon className="h-6 w-6 text-gray-100 mr-4" /> : ""}
      {ShowMenu ? <MenuIcon className="h-6 w-6 text-gray-100 mr-4" /> : ""}
    </div>
  );
};

export default Nav;
