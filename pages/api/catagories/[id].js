import connectDB from "../../../utils/dBConnect";
import catagoryModel from "../../../models/catagoryModel";
import {
  getOne,
  createOne,
  updateOne,
  deleteOne,
} from "../../../utils/handlers";

connectDB();

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
  switch (req.method) {
    case "GET":
      const populateOptions = {
        path: "product",
        // select: ["name", "summery", "price", "stock", "images"],
      };
      await getOne(catagoryModel, populateOptions, req, res);
      break;
    case "POST":
      await createOne(catagoryModel, req, res);
      break;
    case "PATCH":
      await updateOne(catagoryModel, req, res);
      break;
    case "DELETE":
      await deleteOne(catagoryModel, req, res);
      break;
  }
};

export default handler;
