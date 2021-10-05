import { useState, useContext } from "react";
import DropDownLink from "./DropDownLink";
import Cookie from "js-cookie";
import { DataContext } from "../store/GlobalState";

const Dropdown = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(DataContext);

  const { currentUser } = state;

  const handelClick = () => setIsOpen(false);
  const handelEnter = () => setIsOpen(true);
  const handelLeave = () => setIsOpen(false);
  const handleLogout = () => {
    Cookie.remove("jwt", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Loged Out" } });
  };
  return (
    <div
      className="relative w-10 h-10"
      onMouseLeave={handelLeave}
      onMouseEnter={handelEnter}
    >
      <button className="w-10  h-10">
        <img
          src={photo}
          alt="user photo"
          className="rounded-full w-full h-full object-cover"
        />
      </button>
      {isOpen && (
        <div className=" flex flex-col absolute top-10 md:-right-8 items-center justify-around transform transition-all duration-500 shadow-md bg-secondaryButtonBg p-3 space-y-3 divide-y text-bodyColor">
          {currentUser.user.role === "admin" ? (
            <DropDownLink
              to="dashboard"
              title="Dashboard"
              handelClick={handelClick}
            />
          ) : (
            ""
          )}
          <DropDownLink
            to="profile"
            title="Profile"
            handelClick={handelClick}
          />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
