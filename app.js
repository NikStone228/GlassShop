const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const path = require("path");
const indexRouter = require("./routes/indexRouter");

const app = express();

// MongoDB
mongoose.connect(
  "mongodb+srv://glassShop:akP7zAugnGTwJVch@cluster0.cxklx.mongodb.net/glassShop?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useFindAndUpdate: false,
  }
);

// Handlebars
app.set("views", "views");
app.set("view engine", "hbs");

// Static & Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Router
app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("Server has been started on port 3000");
});

const password = "akP7zAugnGTwJVch";
