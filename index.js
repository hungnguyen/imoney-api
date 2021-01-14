import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import logger from "morgan";
import mainRouters from "./server/routers";
import dotenv from "dotenv";
import cors from "cors";

const result = dotenv.config();
if (result.error) {
  console.log(result.error);
}

mainRouters.all("*", cors());

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger("dev"));
app.use("/api/", mainRouters);

let db_message = "database connecting";

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    db_message = "database connected";
    console.log(db_message);
  })
  .catch((e) => {
    db_message = e.message;
    console.log(db_message);
  });

const port = process.env.PORT || 5035;
app.get("/", (req, res) => {
  res.statusCode(200).json({
    message: "Welcome to iMoney api v1.0",
    db_status: mongoose.connection.readyState,
    db_message,
  });
});

app.listen(port, (req, res) => {
  console.log(`Server in running on port ${port}...`);
});
