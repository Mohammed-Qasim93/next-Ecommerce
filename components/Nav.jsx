import Link from "next/link";
import {
  HomeIcon,
  InformationCircleIcon,
  CollectionIcon,
  LoginIcon,
  ShoppingCartIcon,
  UserAddIcon,
} from "@heroicons/react/outline";
import NavItem from "./NavItem";
import Dropdown from "./Dropdown";

const Nav = ({ currentUser }) => {
  return (
    <nav className="flex fixed w-full md:h-32  top-0 z-50  md:flex-row flex-col md:justify-between py-4 items-center  px-5   md:space-y-0 space-y-8 md:px-10 lg:px-16 font-semibold bg-bodyColor">
      <Link href="/">
        <a className="logo text-secondaryButtonBg ">
          <h1 className="text-4xl  uppercase">e-store</h1>
        </a>
      </Link>

      <div className="flex space-x-5 sm:space-x-8  items-center">
        <NavItem Icon={HomeIcon} title="home" href="/" />
        <NavItem
          Icon={CollectionIcon}
          title="collections"
          href="/collections"
        />
        <NavItem Icon={ShoppingCartIcon} title="login" pNum="9" href="/cart" />
        <NavItem Icon={InformationCircleIcon} title="about" href="/about" />
        {Object.keys(currentUser).length !== 0 ? (
          <Dropdown photo={currentUser.user.photo} />
        ) : (
          <>
            <NavItem Icon={LoginIcon} title="login" href="/login" />
            <NavItem
              Icon={UserAddIcon}
              title="signup"
              href="/signup"
              classes="text-secondaryButtonBg hover:text-secondaryButtonBgHover"
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
