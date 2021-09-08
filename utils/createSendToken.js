// const jwt = require("jsonwebtoken");

// // create a token
// const signToken = (id) => {
//   return jwt.sign({ id: id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRES_IN,
//   });
// };

// // create and send token
// const createSendToken = (user, statusCode, res) => {
//   const token = signToken(user._id);

//   const cookieOptions = {
//     expires: new Date(
//       Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
//     ),
//     httpOnly: true,
//     secure = true
//   };

//   user.password = undefined;
//   user.active = undefined;

//   // send the token in the cookie
//   res.cookie("jwt", token, cookieOptions);
//   res.status(statusCode).json({
//     token,
//     data: {
//       user,
//     },
//   });
// };

// module.exports = createSendToken;
