const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const blogRouter = require("./routes/blogRouter");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/logs");
});
app.use("/logs", blogRouter);

app.use((err, req, res, next) => {
  console.log(err.statusCode);
  const status = err.statusCode || 500;
  res.status(status).json({
    message: err.message || "Something went wrong",
  });
});

const port = process.env.port || 3000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(`Error: ${err}`));
