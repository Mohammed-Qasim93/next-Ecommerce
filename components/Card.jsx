import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import {
  childAnimation,
  containerAnimation,
  fadeInAnimation,
} from "./../utils/animations";

const Card = () => {
  return (
    <motion.div
      variants={containerAnimation}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="card text-center h-96 relative w-60 flex flex-col rounded overflow-hidden  items-center justify-center shadow-md "
    >
      <motion.div
        variants={childAnimation}
        style={{ borderBottomLeftRadius: "50%" }}
        className="cardimg  overflow-hidden relative"
      >
        <motion.p
          variants={childAnimation}
          className="badge flex justify-end object-cover  items-center w-full py-3 px-3 absolute z-10"
        >
          <motion.span className="text-textHover bg-secondaryButtonBg  text-xl rounded-full py-1 px-2">
            666$
          </motion.span>
        </motion.p>

        <Image
          //   layout="responsive"
          src="https://picsum.photos/300"
          width={300}
          height={300}
        />
      </motion.div>
      <motion.div
        variants={childAnimation}
        style={{ borderTopRightRadius: "50%" }}
        className="cardBody px-3 h-64 overflow-hidden divide-y-2 pt-4 space-y-2"
      >
        <h2 className="cardname text-2xl uppercase  ">product</h2>
        <p className="pt-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          omnis alias dignissimos
        </p>
      </motion.div>
      <motion.div
        variants={fadeInAnimation}
        className="buttons flex justify-between w-full p-3"
      >
        <Button
          type="button"
          text="add favorate"
          classes="px-2 py-1 bg-primaryButtonBg hover:bg-primaryButtonBgHover  text-bodyColor "
        />
        <Button
          type="button"
          text="add to cart"
          classes="px-2 py-1 bg-secondaryButtonBg hover:bg-secondaryButtonBgHover   text-bodyColor"
        />
      </motion.div>
    </motion.div>
  );
};

export default Card;
