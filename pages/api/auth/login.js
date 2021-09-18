import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/dBConnect";
import userModel from "../../../models/usersModel";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../../utils/generateToken";
connectDB();

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).send({
      msg: "Only post allowed",
    });
  }

  try {
    const { email, password } = req.body;

    // if there is no data provided by the user return an error
    if (!email || !password) {
      return res
        .status(400)
        .json({ err: "Please provide an email and password" });
    }

    const user = await userModel.findOne({ email }).select("+password");

    // compare the passwords to log in the user this came from userModel
    // and testing if there is a user for the email that provided
    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({ err: "Incorrect email or password" });
    }
    user.active = undefined;
    user.password = undefined;

    const accessToken = generateAccessToken({ id: user._id });
    const refreshToken = generateRefreshToken({ id: user._id });

    res.status(200).json({
      msg: "loged in successfully",
      refreshToken,
      accessToken,
      data: {
        user,
      },
    });
  } catch (err) {
    return res.status(500).json({ err: err.message });
  }
};

export default handler;
