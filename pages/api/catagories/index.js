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
  switch (req.method) {
    case "POST":
      await createOne(catagoryModel, req, res);
      break;
    case "GET":
      await getAll(catagoryModel, req, res);
      break;
  }
};

export default handler;
