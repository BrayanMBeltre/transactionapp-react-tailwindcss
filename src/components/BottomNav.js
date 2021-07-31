import { DownloadIcon, PlusIcon, UploadIcon } from "@heroicons/react/outline";
import React from "react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <div className="block fixed inset-x-0 bottom-0 z-10 bg-gray-900">
      <div className="flex justify-around items-center h-16">
        <Link
          to="/upload"
          className="w-48 h-16 flex justify-center items-center hover:bg-gray-700"
        >
          <UploadIcon className="h-6 w-6 text-gray-100" />
        </Link>
        <Link
          to="/new"
          className="w-48 h-16 flex justify-center items-center hover:bg-gray-700"
        >
          <PlusIcon className="h-6 w-6 text-gray-100" />
        </Link>
        <Link
          to="/download"
          className="w-48 h-16 flex justify-center items-center hover:bg-gray-700"
        >
          <DownloadIcon className="h-6 w-6 text-gray-100" />
        </Link>
      </div>
    </div>
  );
}
