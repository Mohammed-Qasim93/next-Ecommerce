import connectDB from "../../../utils/dBConnect";
import productModel from "../../../models/productModel";
import { getAll, createOne } from "../../../utils/handlers";

connectDB();

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
  // if (req.method === "GET") {
  //   return res.status(400).send({
  //     msg: "Only post allowed",
  //   });
  //   await getAll(productModel, req, res);
  // }

  switch (req.method) {
    case "POST":
      await createOne(productModel, req, res);
      break;
    case "GET":
      await getAll(productModel, req, res);
      break;
  }
};

export default handler;
