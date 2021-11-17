import { useContext } from "react";
import Link from "next/link";
import Button from "../components/Button";
import { DataContext } from "../store/GlobalState";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const removeFromCart = () => {};

  const increaseQuantity = () => {
    product.quantity++;
  };
  const decreaseQuantity = () => {
    product.quantity--;
  };

  if (cart.length === 0) return <h1>empty</h1>;
  return (
    <div className="pt-3">
      <h1 className="py-5  text-left text-2xl capitalize">
        {" "}
        your cart has the following products{" "}
      </h1>
      <div className="md:pl-4">
        {cart.map((product, key) => (
          <div className="px-16 md:px-0 md:mx-0 md:max-w-md  mx-auto   max-w-xl pb-4 flex justify-between h-28 ">
            <div className="md:w-24 w-32 flex flex-grow  space-x-2">
              <img
                className="object-fill"
                src={product.images[0]}
                alt={product.name}
              />
              <div className="flex  text-bold text-primaryButtonBg capitalize flex-col justify-around">
                <span className=" font-semibold text-xl  w-64">
                  <Link href={`/products/${product.id}`}>{product.name}</Link>
                </span>
                <p className="text-lg"> {product.price}$ </p>
              </div>
            </div>

            <div className="flex relative h-full items-center">
              <div className="flex items-center justify-around h-10 w-32">
                <Button
                  text="+"
                  handleClick={increaseQuantity}
                  classes="text-lg w-1/4 font-bold border-2 "
                />
                <p className="text-3xl"> {product.quantity} </p>
                <Button
                  text="-"
                  handleClick={decreaseQuantity}
                  classes="text-lg font-bold w-1/4  border-2"
                />
              </div>
              <Button
                handleClick={removeFromCart}
                text="X"
                classes="absolute -right-8 top-0  p-2"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="total">
        total : {cart.reduce((acc, curr) => acc + curr.price, 0)}
      </div>
    </div>
  );
};

export default Cart;
