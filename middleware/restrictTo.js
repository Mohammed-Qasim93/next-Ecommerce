const restrictTo = (handler, ...role) => {
  return async (req, res) => {
    // the req.user.role is comming from the protect fn from req.user = currentUser
    if (!role.includes(req.user.role)) {
      return res.status(403).json({
        status: "Error",
        msg: "You are not loged in! Please log in first",
      });
    }
    return handler(req, res);
  };
};

export default restrictTo;
