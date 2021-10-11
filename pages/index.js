import ShowCase from "../components/ShowCase";
import ProductCard from "../components/product/Card";
import { getData } from "../utils/fetchData";
import Carosul from "../components/Carosul";

export default function Home({ best, top }) {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <ShowCase />
      <div className="top pb-10">
        <h1 className="capitalize text-5xl text-center">our top sales</h1>
        <Carosul data={top} />
      </div>
      <div className="best pb-10">
        <h1 className="capitalize text-5xl text-center">our best deals</h1>
        <Carosul data={best} />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const top = await getData("products?topSale=true");
  const best = await getData("products?bestDeal=true");

  const topData = await top.data;
  const bestData = await best.data;
  return {
    props: {
      top: topData,
      best: bestData,
    },
  };
}
