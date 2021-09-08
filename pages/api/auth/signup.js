import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "../../../utils/dBConnect";
import userModel from "./../../../models/usersModel";
// import createSendToken from "../../../utils/createSendToken";
import valid from "../../../utils/validate";

connectDB();

export default async (req = NextApiRequest, res = NextApiResponse) => {
  switch (req.method) {
    case "POST":
      await signUp(req, res);
      break;
  }
};

const signUp = async (req, res) => {
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
      return res.status(400).send({ err: errMsg });
    }

    const user = await userModel.findOne({ email: email });
    if (user) return res.status(400).json({ err: "this email already exists" });

    const newUser = await userModel.create({
      firstname,
      lastname,
      email,
      DOB,
      password,
      passwordConfirm,
    });

    res.status(200).json({ data: newUser });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};
