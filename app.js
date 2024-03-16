import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import router from "./route/route";
import { config } from "dotenv";
config();

const app = express();

//   bodypaser midleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/", router);
const port = process.env.Port;
app.get("*", (req, res) => {
  res.send("<h2> Page not found</h2>");
});

app.listen(port, () => {
  mongoose
    .connect("mongodb://localhost:27017/martfind", {
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongodb connect");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`Server is running on PORT ${port} `);
});
