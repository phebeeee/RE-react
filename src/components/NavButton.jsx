import React from "react";
import { Link } from "react-router-dom";

function NavButton({ children }) {
  const getPath = (text) => {
    if (text === "مستخدم جديد") return "/register";
    if (text === "تسجيل الدخول") return "/login";
    return "/";
  };

  return (
    <Link
      to={getPath(children)}
      className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
    >
      {children}
    </Link>
  );
}

export default NavButton;
