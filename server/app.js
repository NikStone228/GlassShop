require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const hbs = require("hbs");
const path = require("path");
const app = express();

const indexRouter = require("./routes/indexRouter");
const imgUploadRouter = require("./routes/imgUpload");
const yandexApiRouter = require("./routes/yandexApi");

app.use(cookieParser());
// Session
app.use(
  session({
    secret: "glass glass shop",
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

app.use((req, res, next) => {
  res.locals.isAuth = req.session.isAuthenticated; // записываем в локалс имя юзера из сессии
  next();
});

// MongoDB
mongoose.connect(process.env.MONGODB, {
  useUnifiedTopology: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useFindAndUpdate: true,
});


// Handlebars
app.set("views", "views");
app.set("view engine", "hbs");

// Static & Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Router
app.use("/", indexRouter);
app.use("/upload", imgUploadRouter);
app.use("/api", yandexApiRouter);

app.listen(3000, () => {
  console.log("Server has been started on port 3000");
});
