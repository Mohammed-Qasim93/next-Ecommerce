import ShowCase from "../components/ShowCase";

export default function Home(props) {
  return (
    <div className="max-h-screen">
      <ShowCase />

      {/* {products.length === 0 ? (
        <h2>there is no products available</h2>
      ) : (
        products.map((product) => (
          <CatagoryCard
            price={product.price}
            name={product.name}
            summery={product.summery}
            img={product.images[0]}
          />
        ))
      )} */}
    </div>
  );
}
