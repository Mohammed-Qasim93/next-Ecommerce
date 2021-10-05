import Link from "next/link";
import { useRouter } from "next/router";

const Button = ({ type, text, classes, to }) => {
  //
  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return " font-bold ";
    } else {
      return "";
    }
  };

  return to ? (
    <Link href={to}>
      <a className={classes + " capitalize " + isActive(to)}>{text}</a>
    </Link>
  ) : (
    <button name="button" type={type} className={classes + " capitalize"}>
      {text}
    </button>
  );
};

export default Button;
