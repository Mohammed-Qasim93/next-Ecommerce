// const mongoose = require("mongoose");
// const slugify = require("slugify");
// const product = require("./productModel");

// const subCatagorySchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       unique: true,
//     },
//     catagory: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Catagory",
//       required: [true, "sub Catagory must have catagory"],
//     },
//     slug: String,
//     numberOfItems: {
//       type: Number,
//       default: 0,
//     },

//     image: {
//       type: String,
//       default:
//         "https://res.cloudinary.com/dec53tbph/image/upload/v1631040417/nextEcommrece/default_fuht8o.jpg",
//     },
//   },
//   {
//     timestamps: true,
//     toJSON: { virtuals: true },
//     toObject: { virtuals: true },
//   }
// );

// // Relation
// // catagorySchema.pre(/^find/, function (next) {
// //   this.populate({ path: "numberOfBuiers", select: "-__v" });
// //   console.log(this.numberOfBuiers);
// //   next();
// // });

// subCatagorySchema.virtual("products", {
//   ref: "Product",
//   foreignField: "subCatagory",
//   localField: "_id",
// });

// subCatagorySchema.pre("save", function (next) {
//   this.slug = slugify(this.name, { lower: true });
//   next();
// });

// module.exports =
//   mongoose.models.SubCatagory ||
//   mongoose.model("SubCatagory", subCatagorySchema);
