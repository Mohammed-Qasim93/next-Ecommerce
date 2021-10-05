import { getData } from "../../utils/fetchData";

const Product = ({ product }) => {
  return <div>{product.data.name}</div>;
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
