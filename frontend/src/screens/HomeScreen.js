import React from "react";
import data from "../data";
import Product from "../components/Product";

const HomeScreen = () => {
  return (
    <div classNameName="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
};

export default HomeScreen;
