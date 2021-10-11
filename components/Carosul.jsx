import { useRef, useEffect } from "react";
import ProductCard from "./product/Card";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/outline";

const Carosul = ({ data }) => {
  const listRef = useRef();

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -170,
        behavior: "smooth",
      });
    }
    console.log(listRef.current);
  };

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 170,
        behavior: "smooth",
      });
    }
    console.log(listRef.current);
  };

  return (
    <>
      {data.data.length > 0 ? (
        <div
          style={{ height: "60vh" }}
          className="flex items-center  mx-auto overflow-y-hidden sm:space-x-3 "
        >
          <ArrowLeftIcon
            onClick={scrollLeft}
            className="cursor-pointer"
            width={50}
            height={50}
          />
          <div
            ref={listRef}
            className="flex  items-center px-8 justify-start overflow-hidden xl:w-109 lg:w-104 md:w-102 sm:w-100 xs:w-80  space-x-4"
            style={{ maxWidth: "81rem", height: "60vh" }}
          >
            {data.data.map((p) => (
              <div key={p.id} className="w-60">
                <ProductCard
                  price={p.price}
                  summery={p.summery}
                  name={p.name}
                  key={p._id}
                  href={`/products/${p._id}`}
                  img={p.images[0]}
                  topSale={p.topSale}
                  bestDeal={p.bestDeal}
                />
              </div>
            ))}
          </div>
          <ArrowRightIcon
            onClick={scrollRight}
            className="cursor-pointer"
            width={50}
            height={50}
          />
        </div>
      ) : (
        <h1 className="h-64 pt-20 text-center text-3xl">nothing is here yet</h1>
      )}
    </>
  );
};

export default Carosul;
