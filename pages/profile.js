import { useContext, useEffect } from "react";
import Button from "../components/Button";
import SideNav from "../components/SideNav";
import { DataContext } from "../store/GlobalState";
import InputField from "../components/InputField";
import { getData } from "../utils/fetchData";
import UserInfo from "../components/UserInfo";

const profile = () => {
  const { state, dispatch } = useContext(DataContext);
  let { currentUser } = state;
  const { user } = currentUser;
  return (
    <div className="flex flex-col md:flex-row" style={{ height: "84vh" }}>
      <SideNav />
      <div className="bg-red-100 flex-grow">
        <UserInfo user={user} />
      </div>
    </div>
  );
};

export default profile;
