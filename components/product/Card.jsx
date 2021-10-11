import Image from "next/image";
import Button from "../Button";
import { motion } from "framer-motion";
import {
  childAnimation,
  containerAnimation,
  fadeInAnimation,
} from "../../utils/animations";

const Card = ({ price, summery, name, img, href, topSale, bestDeal }) => {
  return (
    <motion.div
      variants={containerAnimation}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="card text-center w-56 hover:z-50 h-96 z-20 relative flex flex-col bg-bodyColor rounded overflow-hidden  items-center justify-center shadow-md "
    >
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
            {price}$
          </motion.span>
        </motion.p>

        {topSale && (
          <motion.p
            variants={childAnimation}
            className="badge flex justify-start object-cover  items-center w-full py-3 px-4 absolute z-10"
          >
            <motion.span className="text-gray-100 capitalize bg-green-400  text-xl rounded-full py-1 px-2">
              top sale
            </motion.span>
          </motion.p>
        )}
        {bestDeal && (
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
          <Image
            //   layout="responsive"
            src={img}
            layout="fill"
          />
        </div>
      </motion.div>
      <motion.div
        variants={childAnimation}
        style={{ borderTopRightRadius: "50%" }}
        className="cardBody px-3 h-64 overflow-hidden divide-y-2 pt-10 space-y-2"
      >
        <h2 className="cardname text-2xl uppercase  ">{name}</h2>
        <p className="pt-2">{summery}</p>
      </motion.div>
      <motion.div
        variants={fadeInAnimation}
        className="buttons flex space-x-2 justify-between w-full p-3"
      >
        {/* <Link>
          <a href={`${product.product._id}`}>View</a>
        </Link> */}
        <Button
          type="button"
          to={href}
          text="View"
          classes="px-2 flex-grow py-1 bg-primaryButtonBg hover:bg-primaryButtonBgHover  text-bodyColor "
        />
        <Button
          type="button"
          text="buy"
          classes="px-2 flex-grow py-1 bg-secondaryButtonBg hover:bg-secondaryButtonBgHover hover:text-textHover text-bodyColor"
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
