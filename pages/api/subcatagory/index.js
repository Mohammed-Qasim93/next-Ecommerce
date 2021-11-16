import connectDB from "../../../utils/dBConnect";
import subcatagoryModel from "../../../models/subCatagoryModel";
import { getAll, createOne } from "../../../utils/handlers";

connectDB();

const handler = async (req = NextApiRequest, res = NextApiResponse) => {
  switch (req.method) {
    case "POST":
      await createOne(subcatagoryModel, req, res);
      break;
    case "GET":
      await getAll(subcatagoryModel, req, res);
      break;
  }
};

export default handler;
