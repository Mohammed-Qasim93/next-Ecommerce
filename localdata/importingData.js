const fs = require("fs");

const mongoose = require("mongoose");

const productModel = require("../models/productModel");
const catagoryModel = require("../models/catagoryModel");
const userModel = require("../models/usersModel");

const DB =
  "mongodb+srv://watan:3sRnwfWfVPDxczpt@cluster0.orqjo.mongodb.net/nextEcommerce?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => console.log(err));

const productData = JSON.parse(
  fs.readFileSync(`${__dirname}/product.json`, "utf-8")
);
const userData = JSON.parse(fs.readFileSync(`${__dirname}/user.json`, "utf-8"));
const catagoryData = JSON.parse(
  fs.readFileSync(`${__dirname}/catagory.json`, "utf-8")
);

const importData = async () => {
  try {
    await productModel.create(productData);
    await userModel.create(userData);
    await catagoryModel.create(catagoryData);
    console.log("Done");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await productModel.deleteMany();
    await userModel.deleteMany();
    await catagoryModel.deleteMany();
    console.log("Deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
