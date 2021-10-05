import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import CatagoryCard from "../../components/CatagoryCard";
import { containerAnimation, fadeInAnimation } from "../../utils/animations";
import { DataContext } from "../../store/GlobalState";
import { getData } from "../../utils/fetchData";

const Collections = ({ catagories }) => {
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
        {catagories.data.map((catagory) => (
          <CatagoryCard
            key={catagory._id}
            href={`collections/${catagory.id}`}
            name={catagory.name}
            numberOfItems={catagory.numberOfItems}
            img={catagory.image}
            slug={catagory.slug}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Collections;

export async function getServerSideProps(context) {
  const res = await getData("catagories");

  const { data } = await res;
  return {
    props: {
      catagories: data,
    }, // will be passed to the page component as props
  };
}
