import Image from "next/image";
import { useContext, useState } from "react";
import { motion } from "framer-motion";
import Button from "../Button";
import {
  childAnimation,
  containerAnimation,
  fadeInAnimation,
} from "../../utils/animations";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";

const Card = ({ product, href }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;
  const [show, setShow] = useState(false);

  const handelClick = () => {
    dispatch(addToCart(product, cart));
    dispatch({ type: "SIDE_CART", payload: { sideCart: true } });
  };

  const outOfStock = () => {
    if (product.stock === 0) {
      return (
        <div className=" h-20 w-56 top-32 rounded-md -rotate-12 text-bodyColor right-0 left-0 bg-textHover opacity-90 absolute z-20  ">
          <h4 className=" capitalize text-3xl pt-6 ">out of stock</h4>
        </div>
      );
    } else {
      return "";
    }
  };

  return (
    <motion.div
      variants={containerAnimation}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="card  text-center w-56 hover:z-50 h-96 z-20 relative flex flex-col bg-bodyColor rounded overflow-hidden  items-center justify-center shadow-md "
    >
      {outOfStock()}
      <motion.div
        variants={childAnimation}
        style={{ borderBottomLeftRadius: "50%" }}
        className="cardimg  overflow-hidden relative"
      >
        <motion.p
          variants={childAnimation}
          className="badge flex justify-end object-cover  items-center w-full py-3 px-4 absolute z-10"
        >
          <motion.span className="text-textHover bg-secondaryButtonBg  text-xl rounded-full py-1 px-2">
            {product.price}$
          </motion.span>
        </motion.p>

        {product.topSale && (
          <motion.p
            variants={childAnimation}
            className="badge flex justify-start object-cover  items-center w-full py-3 px-4 absolute z-10"
          >
            <motion.span className="text-gray-100 capitalize bg-green-400  text-xl rounded-full py-1 px-2">
              top sale
            </motion.span>
          </motion.p>
        )}
        {product.bestDeal && (
          <motion.p
            variants={childAnimation}
            className="badge flex justify-start object-cover  items-center w-full py-3 px-4 absolute z-10"
          >
            <motion.span className="text-gray-100 capitalize bg-green-400  text-xl rounded-full py-1 px-2">
              best deal
            </motion.span>
          </motion.p>
        )}
        <div className="relative  w-60  h-64">
          <Image src={product.images[0]} layout="fill" />
        </div>
      </motion.div>
      <motion.div
        variants={childAnimation}
        style={{ borderTopRightRadius: "50%" }}
        className="cardBody px-3 h-64 overflow-hidden divide-y-2 pt-10 space-y-2"
      >
        <h2 className="cardname text-2xl uppercase  ">{product.name}</h2>
        <p className="pt-2">{product.summery}</p>
      </motion.div>
      <motion.div
        variants={fadeInAnimation}
        className="buttons flex space-x-2 justify-between w-full p-3"
      >
        <Button
          type="button"
          to={href}
          text="View"
          classes="px-2 flex-grow py-1 bg-primaryButtonBg hover:bg-primaryButtonBgHover  text-bodyColor "
        />
        <Button
          type="button"
          text="buy"
          stock={product.stock}
          classes="px-2 flex-grow py-1 bg-secondaryButtonBg hover:bg-secondaryButtonBgHover hover:text-textHover text-bodyColor"
          onclick={handelClick}
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
