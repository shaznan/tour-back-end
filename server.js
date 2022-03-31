const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const app = require("./app");
const mongoose = require("mongoose");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

const connectToDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log("connection to DB was a success!");
  } catch (error) {
    console.log("sorry couldn't connect to server!");
  }
};
connectToDB();

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`server is running in port ${port}`);
});
