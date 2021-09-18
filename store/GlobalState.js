import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducers";
import { getData } from "../utils/fetchData";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = {
    notify: {},
    currentUser: {},
  };
  const [state, dispatch] = useReducer(reducers, initialState);

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

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
