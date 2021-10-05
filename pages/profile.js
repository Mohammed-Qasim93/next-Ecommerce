import { useContext, useEffect } from "react";
import Button from "../components/Button";
import SideNav from "../components/SideNav";
import { DataContext } from "../store/GlobalState";

const profile = () => {
  const { state, dispatch } = useContext(DataContext);

  const { currentUser } = state;

  return (
    <div className="flex flex-col md:flex-row" style={{ height: "84vh" }}>
      <SideNav />
      <div className="bg-red-100 flex-grow">
        <h1>wlecome {currentUser.user.firstname}</h1>
      </div>
    </div>
  );
};

export default profile;
