import Link from "next/link";

const DropDownLink = ({ to, title, handelClick }) => {
  return (
    <div>
      <Link href={to}>
        <a onClick={handelClick}>{title}</a>
      </Link>
    </div>
  );
};

export default DropDownLink;
