import Link from "next/link";

const Button = ({ type, text, classes, to }) => {
  return to ? (
    <Link href={to}>
      <a className={classes + " capitalize "}>{text}</a>
    </Link>
  ) : (
    <button name="button" type={type} className={classes + " capitalize"}>
      {text}
    </button>
  );
};

export default Button;
