const APIFeatures = require("./apiFeatures");
import { NextApiRequest, NextApiResponse } from "next";

export const getOne = async (Model, populateOptions, req, res) => {
  let query = Model.findById(req.query.id);
  if (populateOptions) query = query.populate(populateOptions);

  const doc = await query;

  if (!doc) {
    return res.status(404).json({ message: "Document not found" });
  }

  res.status(200).json({
    status: "seccess",
    results: doc.length,
    data: {
      data: doc,
    },
  });
};

export const getAll = async (Model, req, res) => {
  // allow nested get reviews on product
  let filter = {};
  if (req.query.productId) filter = { product: req.query.productId };
  const result = new APIFeatures(Model.find(filter), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const doc = await result.query;

  // return data;
  // console.log(doc.json());

  res.status(200).json({
    status: "seccess",
    results: doc.length,
    data: {
      data: doc,
    },
  });
};

export const deleteOne = async (Model, req, res) => {
  const doc = await Model.findByIdAndDelete(req.query.id);

  if (!doc) {
    return res.status(404).json({
      message: "Document not found",
    });
  }
  res.status(200).json({
    message: "Deleted successfully",
  });
};

export const updateOne = async (Model, req, res) => {
  const doc = await Model.findByIdAndUpdate(req.query.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!doc) {
    return res.status(404).json({
      message: "Not found",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      data: doc,
    },
  });
};

export const createOne = async (Model, req, res) => {
  let itemData;
  req.files
    ? (req.body.images = req.files.map((file) => file.originalname))
    : (req.body = req.body);
  req.body ? (itemData = req.body) : (itemData = req.product);
  req.files
    ? (itemData.images = itemData.images.push(req.files.originalname))
    : (itemData = itemData);

  const doc = await Model.create(itemData);

  res.status(201).json({
    status: "seccess",
    data: {
      data: doc,
    },
  });
};
