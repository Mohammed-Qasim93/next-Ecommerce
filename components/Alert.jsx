import { motion } from "framer-motion";
import { AlertAnimation } from "../utils/animations";

const Alert = ({ bgColor, msg, handelShow }) => {
  return (
    <motion.div
      variants={AlertAnimation}
      initial="initial"
      animate="animate"
      className={`p-3 fixed ${bgColor} right-3 z-20 rounded text-gray-100 px-3`}
    >
      <h1 className="mb-3 ">{msg.title} :</h1>
      <p> {msg.msg}</p>

      <button
        name="close"
        className="absolute top-2 right-2"
        onClick={handelShow}
      >
        X
      </button>
    </motion.div>
  );
};

export default Alert;
