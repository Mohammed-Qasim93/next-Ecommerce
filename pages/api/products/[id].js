import connectDB from "../../../utils/dBConnect";
import productModel from "../../../models/productModel";
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
        path: "catagory",
        select: "name",
      };
      await getOne(productModel, populateOptions, req, res);
      break;
    case "POST":
      await createOne(productModel, req, res);
      break;
    case "PATCH":
      await updateOne(productModel, req, res);
      break;
    case "DELETE":
      await deleteOne(productModel, req, res);
      break;
  }
};

export default handler;
