import { useState, useEffect } from "react";
import ProductCard from "../../components/product/Card";
import { getData } from "../../utils/fetchData";
import InputField from "../../components/InputField";
import Carosul from "../../components/Carosul";

const Collection = ({ products }) => {
  return (
    <div
      style={{ height: "81vh" }}
      className=" flex flex-col p-16 md:space-y-3 space-y-8 justify-between items-center "
    >
      <div className="drop-shadow-xl text-center">
        <InputField
          type="search"
          fieldName="productsSearch"
          placeholder="search"
        />
      </div>

      <div className="pt-12">
        <Carosul data={products} />
      </div>
    </div>
  );
};

export default Collection;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await getData(`products?catagory=${id}`);

  const productsData = await res.data;

  // console.log(catagory);
  return {
    props: {
      products: productsData,
    }, // will be passed to the page component as props
  };
}
