import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";

const Products = () => {
  const dispatch = useDispatch();

  const [products, setproducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setproducts(data);
    };
    fetchProducts();
  }, []);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="grid grid-cols-4 gap-[30px] mt-5 cursor-pointer">
      {products.map((product) => (
        <div
          className="bg-white p-[20px] text-center rounded-[10px] gap-x-1"
          key={product.id}
        >
          <img className="h-[80px] mx-auto" src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button
            onClick={() => handleAdd(product)}
            className="border-none outline-none bg-[#764abc] py-[5px] px-[10px] text-white rounded-[5px] font-bold cursor-pointer transitio all 0.3s ease-in-out"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
