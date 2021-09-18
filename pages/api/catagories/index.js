import connectDB from "../../../utils/dBConnect";
import catagoryModel from "../../../models/catagoryModel";
import {
  getAll,
  createOne,
  deleteOne,
  updateOne,
} from "../..//../utils/handlers";

connectDB();

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
  if (req.method !== "GET") {
    return res.status(400).send({
      msg: "Only Get allowed",
    });
  }
  await getAll(catagoryModel, req, res);
};

export default handler;
