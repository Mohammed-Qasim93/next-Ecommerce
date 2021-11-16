import { useContext } from "react";
import { DataContext } from "../store/GlobalState";

const Cart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { cart } = state;

  if (cart.length === 0) return <h1>empty</h1>;
  return <div className="pt-3"></div>;
};

export default Cart;
