import connectDB from "../../../utils/dBConnect";
import subcatagoryModel from "../../../models/subCatagoryModel";
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
      const populateOptions = [
        {
          path: "product",
          select: ["name"],
        },
        {
          path: "subCatagory",
          select: ["name"],
        },
      ];
      await getOne(subcatagoryModel, populateOptions, req, res);
      break;
    case "PATCH":
      await updateOne(subcatagoryModel, req, res);
      break;
    case "DELETE":
      await deleteOne(subcatagoryModel, req, res);
      break;
  }
};

export default handler;
