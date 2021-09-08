import mongoose from "mongoose";

function connectDB() {
  if (mongoose.connections[0].readyState) {
    console.log("Already connected");
    return;
  }

  mongoose.connect(
    process.env.DB_URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      if (err) throw err;
      console.log("connected to DB");
    }
  );
}

export default connectDB;
