import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/dBConnect";
import userModel from "./../../../models/usersModel";
import valid from "../../../utils/validate";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../../utils/generateToken";
import protect from "../../../middleware/protect";
import restrictTo from "../../../middleware/restrictTo";

connectDB();

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
  if (req.method !== "POST") {
    return res.status(400).send({
      msg: "Only post allowed",
    });
  }

  try {
    const { firstname, lastname, email, DOB, password, passwordConfirm } =
      req.body;

    const errMsg = valid(
      firstname,
      lastname,
      email,
      DOB,
      password,
      passwordConfirm
    );

    if (errMsg) {
      return res.status(400).json({ err: errMsg });
    }

    const matchuser = await userModel.findOne({ email: email });
    if (matchuser)
      return res.status(400).json({ err: "this email already exists" });

    const user = await userModel.create({
      firstname,
      lastname,
      email,
      DOB,
      password,
      passwordConfirm,
    });

    const accessToken = generateAccessToken({ id: user._id });
    const refreshToken = generateRefreshToken({ id: user._id });

    res.status(200).json({
      msg: "Signed up successfully",
      refreshToken,
      accessToken,
      data: {
        user,
      },
    });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

export default handler;
