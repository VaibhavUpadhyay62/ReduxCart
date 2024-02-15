// import { getNodeText } from "@testing-library/react";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove, removeAll } from "../Store/cartSlice";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  return (
    <div className="text-center">
      <div className="m-4">
        {products.map((product) => (
          <div
            key={product.id}
            className=" flex items-center justify-between mb-[20px] p-[14px] rounde-[5px] bg-white"
          >
            <img className="h-[80px] " src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              className="border-none outline-none bg-[#764abc] py-[5px] px-[10px] text-white rounded-[5px] font-bold cursor-pointer transition all 0.3s ease-in-out"
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      {products.length == 0 ? (
        <div>Add items to cart</div>
      ) : (
        <button
          onClick={() => handleRemoveAll()}
          className=" border-none outline-none bg-[#764abc]  py-[5px] px-[10px] text-white rounded-[5px] font-bold cursor-pointer transition all 0.3s ease-in-out"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default Cart;
