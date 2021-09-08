import {
  HomeIcon,
  InformationCircleIcon,
  CollectionIcon,
  LoginIcon,
  LogoutIcon,
  ShoppingCartIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import { motion } from "framer-motion";
import InputField from "./InputField";
import NavItem from "./NavItem";
import { BeatingAnimation } from "../utils/animations";

const Nav = () => {
  return (
    <nav className="flex sticky top-0 z-50  sm:flex-row flex-col sm:justify-between py-5 items-center sm:px-8 px-5 sm:space-y-0 space-y-6 md:px-10 lg:px-16 font-semibold bg-bodyColor">
      <motion.a
        variants={BeatingAnimation}
        whileHover="hover"
        href="/"
        className="logo text-secondaryButtonBg "
      >
        <h1 className="sm:text-2xl text-3xl lg:text-3xl uppercase">e-store</h1>
      </motion.a>
      <input
        type="search"
        className="p-2 border focus:outline-none  border-gray-800 rounded text-gray-500 bg-bodyColor text-lg font-semibold md:w-80  w-80 sm:mx-4 sm:w-60 mr-2"
        name="search"
        placeholder="search"
      />
      <div className="flex space-x-3 capitalize md:text-lg md:space-x-5 items-center">
        <NavItem Icon={HomeIcon} title="home" href="/" />
        <NavItem
          Icon={CollectionIcon}
          title="collections"
          href="/collections"
        />
        <NavItem Icon={ShoppingCartIcon} title="login" pNum="9" href="/cart" />
        <NavItem Icon={InformationCircleIcon} title="about" href="/about" />
        {/* {data.data.users[0].username === "hal" ? (
            <NavItem Icon={LogoutIcon} title="login" href="/logout" />
          ) : ( */}
        <NavItem Icon={LoginIcon} title="login" href="/login" />
        {/* )} */}
        <NavItem
          Icon={UserAddIcon}
          title="signup"
          href="/signup"
          classes="text-secondaryButtonBg hover:text-secondaryButtonBgHover"
        />
      </div>
    </nav>
  );
};

export default Nav;
