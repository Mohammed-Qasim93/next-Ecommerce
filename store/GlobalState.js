import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    sideCart: {},
    currentUser: {},
    cart: [],
  };
  const [state, dispatch] = useReducer(reducers, initialState);
  const { cart } = state;

  useEffect(async () => {
    const firstLogin = localStorage.getItem("firstLogin");
    if (firstLogin) {
      await getData("auth/accessToken").then((res) => {
        if (res.err) return localStorage.removeItem("firstLogin");

        dispatch({
          type: "AUTH",
          payload: {
            token: res.accessToken,
            user: res.user,
          },
        });
      });
    }
  }, []);

  useEffect(() => {
    const customer_cart = JSON.parse(localStorage.getItem("customer_cart"));
    if (customer_cart) dispatch({ type: "ADD_CART", payload: customer_cart });
  }, []);

  useEffect(() => {
    localStorage.setItem("customer_cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
