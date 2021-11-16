import Link from "next/link";
import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
import { getData } from "../../utils/fetchData";
import Button from "../../components/Button";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { fadeInAnimation } from "../../utils/animations";

const Product = (props) => {
  const [product] = useState(props.product.data);
  const [tab, setTab] = useState(0);

  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  const handelClick = () => dispatch(addToCart(product, cart));

  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      animate="animate"
      className="pt-2 px-3 pb-4"
    >
      <div className="grid w-full md:grid-cols-2 gap-4 place-content-around place-items-center">
        <div className="left grid grid-cols-2  gap-2">
          <div className="img col-span-4">
            <img
              className="block w-100"
              src={product.images[tab]}
              alt={product.name}
              style={{ height: "360px" }}
            />
          </div>
          <div className="images flex space-x-2 col-span-4">
            {product.images.map((image, index) => (
              <img
                className="cursor-pointer"
                style={{ width: "20%", height: "80px" }}
                key={index}
                src={image}
                alt={product.name}
                onClick={() => setTab(index)}
              />
            ))}
          </div>
        </div>
        <div className="right w-full space-y-5">
          <div className="catagory flex items-center space-x-2 capitalize  text-2xl">
            <div className="bg-primaryButtonBg py-1 px-2 rounded-sm text-bodyColor">
              <Link href={`/collections/${product.catagory.id}`}>
                {product.catagory.name}
              </Link>
            </div>
            <ArrowRightIcon width="20" />
            <div className="bg-primaryButtonBg py-1 px-2 rounded-sm text-bodyColor">
              <Link href={`/products/${product.id}`}>{product.name}</Link>
            </div>
          </div>
          <div className="lg:text-3xl  text-2xl md:text-xl text-secondaryButtonBg capitalize w-full flex justify-between">
            <span className="">price : {product.price}$</span>
            {product.stock > 0 ? (
              <span>stock : {product.stock} </span>
            ) : (
              <span className="bg-textHover text-bodyColor py-1 px-2 rounded-sm">
                Out of stock
              </span>
            )}
            <span>sold : {product.sold} </span>
          </div>
          <div className="info space-y-4 capitalize">
            <h2 className="text-5xl">{product.name}</h2>
            <p className="text-3xl"> {product.summery} </p>
            <p className="text-3xl text-secondaryButtonBg">
              rating :{product.ratingAverage}
            </p>
          </div>
          <Button
            stock={product.stock}
            text="add to cart"
            classes=" flex-grow p-2 bg-primaryButtonBg hover:bg-primaryButtonBgHover  text-bodyColor "
            onclick={handelClick}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Product;

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await getData(`products/${id}`);

  const productData = await res.data;
  // console.log(catagory);
  return {
    props: {
      product: productData,
    }, // will be passed to the page component as props
  };
}
