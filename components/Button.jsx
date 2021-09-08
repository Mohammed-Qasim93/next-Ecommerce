const Button = ({ type, text, classes }) => {
  return (
    <button type={type} className={classes + "capitalize"}>
      {text}
    </button>
  );
};

export default Button;
