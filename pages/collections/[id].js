import { useState, useEffect } from "react";
import ProductCard from "../../components/product/Card";
import { getData } from "../../utils/fetchData";
import InputField from "../../components/InputField";

const Collection = ({ products }) => {
  return (
    <div className=" flex flex-col h-1/2 w-screen p-16 space-y-8 justify-between items-center ">
      <div className="drop-shadow-xl text-center">
        <InputField
          type="search"
          fieldName="productsSearch"
          placeholder="search"
        />
      </div>
      <div className=" grid gap-9 w-full pt-10 md:grid-cols-3 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-2 place-items-center">
        {products.data.length > 0 ? (
          products.data.map((p) => (
            <ProductCard
              price={p.price}
              summery={p.summery}
              name={p.name}
              key={p._id}
              href={`/products/${p._id}`}
              img={p.images[0]}
            />
          ))
        ) : (
          <h1>There are no products</h1>
        )}
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
