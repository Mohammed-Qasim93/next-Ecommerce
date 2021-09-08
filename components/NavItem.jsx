const NavItem = ({ Icon, title, href, pNum, classes }) => {
  return pNum ? (
    <a
      href={href}
      className="flex relative flex-col hover:text-gray-400  items-center lg:w-9 sm:w-8 w-10 group"
    >
      <Icon title={title} />
      <span
        style={{ width: "23px" }}
        className="absolute  rounded-full font-bold animate-bounce bg-red-500 text-white px-2 py-1 -top-3 -right-1 z-1 text-xs "
      >
        {pNum}
      </span>
    </a>
  ) : (
    <a
      href={href}
      className={`flex flex-col hover:text-gray-400 items-center lg:w-9 sm:w-8 w-10 group ${classes}`}
    >
      <Icon title={title} />
    </a>
  );
};

export default NavItem;
