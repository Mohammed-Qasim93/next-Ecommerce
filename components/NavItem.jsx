import { useRouter } from "next/router";
import Link from "next/link";

const NavItem = ({ Icon, title, href, pNum, classes }) => {
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return " text-gray-700 animate-pulse ";
    } else {
      return "";
    }
  };

  return pNum ? (
    <Link href={href}>
      <span
        name={title}
        className={`flex relative flex-col hover:text-gray-400 cursor-pointer items-center w-12 ${isActive(
          href
        )}  group`}
      >
        <Icon title={title} />
        <span
          style={{ width: "23px" }}
          className="absolute pointer-events-none  rounded-full font-bold animate-bounce bg-red-500 text-white px-2 py-1 -top-3 -right-1 z-1 text-xs "
        >
          {pNum}
        </span>
      </span>
    </Link>
  ) : (
    <Link href={href}>
      <span
        name={title}
        className={`flex flex-col cursor-pointer ${isActive(
          href
        )} hover:text-gray-400 items-center w-12   group ${classes}`}
      >
        <Icon title={title} />
      </span>
    </Link>
  );
};

export default NavItem;
