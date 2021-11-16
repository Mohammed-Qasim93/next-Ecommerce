import { useContext } from "react";
import { DataContext } from "../store/GlobalState";

const SideCart = () => {
  const { state, dispatch } = useContext(DataContext);
  const { sideCart } = state;

  return (
    <div className="z-40 absolute top-40 bg-green-400 right-4">
      {sideCart && <div className="container w-full max-h-screen">[p[[]]]</div>}
    </div>
  );
};

export default SideCart;
