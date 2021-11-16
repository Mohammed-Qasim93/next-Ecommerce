import ShowCase from "../components/ShowCase";
import ProductCard from "../components/product/Card";
import { getData } from "../utils/fetchData";
import Section from "../components/Section";

export default function Home({ best, top }) {
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <ShowCase />
      <Section data={top} sectionTitle="our top sales" />
      <Section data={best} sectionTitle="our best sales" />
    </div>
  );
}

export async function getServerSideProps(context) {
  const top = await getData("products?topSale=true&limit=6");
  const best = await getData("products?bestDeal=true&limit=6");

  const topData = await top.data;
  const bestData = await best.data;
  return {
    props: {
      top: topData,
      best: bestData,
    },
  };
}
