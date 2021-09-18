import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { promisify } from "util";
import connectDB from "../../../utils/dBConnect";
import userModel from "../../../models/usersModel";
import { generateAccessToken } from "../../../utils/generateToken";

connectDB();

const handler = async (req, res) => {
  try {
    const rf_token = req.cookies.jwt;
    if (!rf_token) return res.status(400).json({ err: "Please Login First" });

    const decoded = await promisify(jwt.verify)(
      rf_token,
      process.env.REFRESH_JWT_SECRET
    );
    if (!decoded)
      return res.status(400).json({ err: "Your toen is incorrect or expired" });

    const user = await userModel.findById(decoded.id.id);
    if (!user) return res.status(400).json({ err: "User not found" });

    // const secret = process.env.REFRESH_JWT_SECRET;
    // const expires = process.env.REFRESH_JWT_EXPIRES_IN
    const accessToken = generateAccessToken(user._id);
    res.status(200).json({
      accessToken,
      user,
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

export default handler;
