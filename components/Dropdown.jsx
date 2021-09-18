import { useState, useContext } from "react";
import Link from "next/link";
import Cookie from "js-cookie";
import { DataContext } from "../store/GlobalState";

const Dropdown = ({ photo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(DataContext);

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
        <div className="links flex flex-col absolute  items-center justify-between transform transition-all duration-500 shadow-md bg-secondaryButtonBg p-3 space-y-2 divide-y text-bodyColor">
          <Link href="/profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
