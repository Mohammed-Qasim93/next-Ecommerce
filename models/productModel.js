const mongoose = require("mongoose");
const slugify = require("slugify");
const catagoryModel = require("./catagoryModel");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: String,
    summery: {
      type: String,
      required: true,
      trim: true,
      default: "",
    },
    catagory: {
      type: mongoose.Schema.ObjectId,
      ref: "Catagory",
      required: [true, "product must have catagory"],
    },
    images: [String],
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    priceDiscount: {
      type: Number,
      default: 0,
    },
    coupon: {
      type: String,
      default: "",
    },
    stock: {
      type: Number,
      default: 0,
      required: true,
    },
    bestDeal: {
      type: Boolean,
      default: false,
    },
    topSale: {
      type: Boolean,
      default: false,
    },
    ratingAverage: {
      type: Number,
      default: 4.0,
      max: [5, "Rating must be below 5"],
      min: [1, "Rating must be above 1"],
      set: (val) => Math.round(val * 10) / 10, //4.6666 => 46.666 => 47 => 4.7
    },
    ratingQuantity: {
      type: Number,
      default: 0,
    },
    cheked: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// indexes
productSchema.index({ price: 1 });
productSchema.index({ slug: 1 });

// Relation
// productSchema.pre(/^find/, function (next) {
//   this.populate({ path: "numberOfBuiers", select: "-__v" });
//   console.log(this.numberOfBuiers);
//   next();
// });

// relation
// productSchema.virtual("catagories", {
//   ref: "Catagory",
//   foreignField: "product",
//   localField: "_id",
// });

productSchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

// calc the total number of items in the catagory
productSchema.statics.calcNumberOfItems = async function (catagoryId) {
  const stats = await this.aggregate([
    {
      $match: { catagory: catagoryId },
    },
    {
      $group: {
        _id: "$catagoryId",
        nItems: { $sum: 1 },
      },
    },
  ]);

  if (stats.length > 0) {
    // if there is a catagory
    await catagoryModel.findByIdAndUpdate(catagoryId, {
      numberOfItems: stats[0].nItems,
    });
  } else {
    await catagoryModel.findByIdAndUpdate(catagoryId, {
      numberOfItems: 0,
    });
  }
};

productSchema.post("save", async function () {
  // this points to current product {model}
  // we used constructor to allow calling methods
  await this.constructor.calcNumberOfItems(this.catagory);
});

module.exports =
  mongoose.models.Product || mongoose.model("Product", productSchema);
