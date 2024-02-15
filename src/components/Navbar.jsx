import React from "react";
import { Link } from "react-router-dom";
import { BsCartCheckFill } from "react-icons/bs";
import { useSelector } from "react-redux";
const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <div className="flex items-center justify-between">
      <span className="cursor-pointer text-2xl text-violet-700">
        REDUX STORE
      </span>
      <div className="flex items-center">
        <Link
          className="ml-[20px] text-violet-700 decoration-none text-xl"
          to="/"
        >
          Home
        </Link>
        <Link
          className="ml-[20px] text-violet-700 decoration-none text-xl"
          to="/cart"
        >
          Cart
        </Link>
        <span className="flex items-center  text-xl text-violet-700">
          <BsCartCheckFill className="font-bold ml-[20px]" />: {items.length}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
