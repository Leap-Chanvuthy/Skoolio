const express = require("express");
const app = express();
const cors = require('cors');
const mongoose = require("mongoose");
require("dotenv").config();

// itemRoute
const itemRoute = require("./routes/itemRoute");

// middlewares
app.use(express.json());
app.use(express.static("public"));
app.use(cors({origin : 'http://localhost:3000'}));

// used routes
app.use("/api/students", itemRoute);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        `Database connected successfully && app running on port ${process.env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.log("It has been an errors connected in the database" + error);
  });
