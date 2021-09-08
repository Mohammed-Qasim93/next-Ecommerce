const crypto = require("crypto");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "tell us your first name"],
    },
    lastname: {
      type: String,
      required: [true, "tell us your last name"],
    },
   
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: [validator.isEmail, "Please Provide a vaild email"],
    },
    password: {
      type: String,
      required: [true, "Please Type a password"],
      select: false,
      minlength: [8, "Passwords should be at least 8 characters long"],
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please confirm your password"],
      validate: {
        // this work on save and create
        //  only not update in regular way
        // validate the passwordConfirm = password
        validator: function (el) {
          return el === this.password;
        },
        message: "Passwords Are Not The Same",
      },
    },
    DOB: {
      type: Date,
      required: true,
    },
    photo: {
      type: String,
      default:
        "https://res.cloudinary.com/dec53tbph/image/upload/v1631040417/nextEcommrece/default_fuht8o.jpg",
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: String,
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  {
    timestamp: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// delete inactvie users from the result
userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

// hashing user password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined; // to delete this feild from db
  next();
});

userSchema.pre("save", async function (next) {
  // if the user didn't  change their password  or he is new user we exit
  if (!this.isModified("password") || this.isNew) return next();

  // create a value to passwordChangedAt
  // less than now in 1s to ensure the user
  // token creation after the password changed
  // because token creation is slow
  this.passwordChangedAt = Date.now() - 1000; // to delete this feild from db
  next();
});

// instanse method available on all docs
// candidatePassword is the pass that the user passes in the body in login
userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// instase method to check if the user changed their password after the login
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    // get the time stamp to check it with the jwt token creation time
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  // false means not changed
  return false;
};

userSchema.methods.createResetPasswordToken = function () {
  // create plain token
  const resetToken = crypto.randomBytes(32).toString("hex");
  // hash the plain token to store it in database
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // setting the expires date to 15 min
  this.passwordResetExpires = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

module.exports = mongoose.models.User || mongoose.model("User", userSchema);
