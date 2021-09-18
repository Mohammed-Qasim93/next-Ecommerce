import { useRouter } from "next/router";
import { useEffect } from "react";
import { getData } from "../../../utils/fetchData";

const Collection = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(async () => {
    try {
      const res = await getData(`product/catagories/${slug}`);
      const { data } = await res;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return <div>{slug}</div>;
};

export default Collection;
