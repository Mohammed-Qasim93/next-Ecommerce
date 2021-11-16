import Link from "next/link";

const DropDownLink = ({ to, title, handelClick }) => {
  return (
    <div>
      <Link onClick={handelClick} href={to}>
        {title}
      </Link>
    </div>
  );
};

export default DropDownLink;
