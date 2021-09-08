const valid = (firstname, lastname, email, DOB, password, passwordConfirm) => {
  console.log(password);
  if (!firstname || !lastname || !password || !DOB || !email) {
    return "Please add your informations.";
  }

  if (!validateEmail(email)) {
    return "Please enter a valid email address.";
  }

  if (password.length < 8) {
    return "Password must be at least 8 characters long.";
  }

  if (password !== passwordConfirm) {
    return "Passwords are not the same.";
  }
  if (!DOB) return "Please enter your date of birth";
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default valid;
