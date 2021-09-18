import jwt from "jsonwebtoken";
// create a token
export const generateAccessToken = (id) => {
  return jwt.sign({ id: id }, process.env.ACCESS_JWT_SECRET, {
    expiresIn: process.env.ACCESS_JWT_EXPIRES_IN,
  });
};

export const generateRefreshToken = (id) => {
  return jwt.sign({ id: id }, process.env.REFRESH_JWT_SECRET, {
    expiresIn: process.env.REFRESH_JWT_EXPIRES_IN,
  });
};
