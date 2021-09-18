const protect = async (req, res) => {
  let token;
  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({
      status: "Error",
      msg: "You are not loged in! Please log in first",
    });
  }

  // verify if token is vailed
  // promisify to turn the mthod to a promis
  // decode the token to get the user id from it
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // check if the user still exists
  const currentUser = await userModel.findById(decoded.id);
  if (!currentUser) {
    return res.status(404).json({
      status: "Error",
      msg: "User No Longer Exist",
    });
  }
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return res.status(401).json({
      status: "Error",
      msg: "User recently changed their password : please log in again",
    });
  }

  // put the user in the req maybe it comes useful in the future
  req.user = currentUser;
};

export default protect;
