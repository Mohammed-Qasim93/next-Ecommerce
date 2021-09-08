import { motion } from "framer-motion";
import Card from "../components/Card";
import {
  childAnimation,
  containerAnimation,
  fadeInAnimation,
} from "./../utils/animations";

const Collections = () => {
  const i = [1, 4, 7];
  return (
    <div className="flex flex-col justify-center overflow-hidden mt-10 space-y-20">
      <motion.h1
        variants={fadeInAnimation}
        initial="initial"
        animate="animate"
        className="section-title sm:text-3xl text-center capitalize"
      >
        welcome to our collection you can find any thing here by it's catagory
      </motion.h1>
      <motion.div
        variants={containerAnimation}
        initial="initial"
        animate="animate"
        className="cards flex flex-col md:flex-row items-center justify-center md:space-y-0 space-y-10 md:space-x-7 last:pb-10"
      >
        {i.map((i) => (
          <Card key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default Collections;
