import React from "react";
import {
  HiClipboardList,
  HiHome,
  HiOutlineClipboardList,
  HiOutlineHome,
} from "react-icons/hi";

import { Link, useLocation } from "react-router-dom";

const BottomNavigation: React.FC = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isMenu = location.pathname === "/menu";

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 flex justify-around shadow-md">
      <Link
        to="/"
        className={`flex flex-col items-center ${
          isHome ? "text-gray-800" : "text-gray-500 hover:text-gray-600"
        }`}
      >
        {isHome ? <HiHome size={24} /> : <HiOutlineHome size={24} />}
        <span className="mt-1">Home</span>
      </Link>
      <Link
        to="/menu"
        className={`flex flex-col items-center ${
          isMenu ? "text-gray-800" : "text-gray-500 hover:text-gray-600"
        }`}
      >
        {isMenu ? (
          <HiClipboardList size={24} />
        ) : (
          <HiOutlineClipboardList size={24} />
        )}
        <span className="mt-1">Menu</span>
      </Link>
    </div>
  );
};

export default BottomNavigation;
