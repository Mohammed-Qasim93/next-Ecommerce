function sanitizeStr(s) {
  const excludedChars = [
    "!",
    "<",
    ">",
    "=",
    "%",
    "&",
    "$",
    "^",
    ",",
    "{",
    "}",
    "(",
    ")",
    "+",
    "*",
  ];
  excludedChars.forEach((el) => (s[el] === el ? delete s[el] : s));
  console.log(s);
  return s;
}

function iterAll(input) {
  Object.keys(input).forEach(function (k) {
    if (input[k] && typeof input[k] === "object") {
      iterAll(input[k]);
      return;
    }
    input[k] = sanitizeStr(input[k]);
    return input[k];
  });
}

export default iterAll;
