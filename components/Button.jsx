import Link from "next/link";
import { useRouter } from "next/router";

const Button = ({ type, text, classes, to, stock, onclick }) => {
  //

  const router = useRouter();
  const isActive = (r) => {
    if (r === router.pathname) {
      return " font-bold ";
    } else {
      return "";
    }
  };

  const isDisabled = (s) => {
    if (s === 0) {
      return " disabled";
    } else {
      return "";
    }
  };

  return to ? (
    <Link href={to}>
      <span className={classes + " capitalize cursor-pointer" + isActive(to)}>
        {text}
      </span>
    </Link>
  ) : (
    <button
      name="button"
      className={classes + " capitalize" + isDisabled(stock)}
      onClick={onclick}
    >
      {text}
    </button>
  );
};

export default Button;
