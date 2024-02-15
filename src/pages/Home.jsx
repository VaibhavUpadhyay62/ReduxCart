import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div className="text-center mt-4">
      <h2 className="text-2xl text-violet-500">
        Welcome to the Redux toolkit store
      </h2>
      <section>
        <h3 className="text-xl text-violet-400">Products</h3>
      </section>
      <Products />
    </div>
  );
};

export default Home;
