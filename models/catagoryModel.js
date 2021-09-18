const mongoose = require("mongoose");
const slugify = require("slugify");

const catagorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    slug: String,
    numberOfItems: {
      type: Number,
      default: 0,
    },

    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dec53tbph/image/upload/v1631040417/nextEcommrece/default_fuht8o.jpg",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// Relation
// catagorySchema.pre(/^find/, function (next) {
//   this.populate({ path: "numberOfBuiers", select: "-__v" });
//   console.log(this.numberOfBuiers);
//   next();
// });

catagorySchema.virtual("product", {
  ref: "Product",
  foreignField: "catagory",
  localField: "_id",
});

catagorySchema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

module.exports =
  mongoose.models.Catagory || mongoose.model("Catagory", catagorySchema);
