require("dotenv").config({ path: "../.env" });
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const cookieSession = require("cookie-session");

require("./passportGoogle");

const routes = require("./routes");
const { isAuthenticated } = require("./middleware/auth");

const PORT = process.env.PORT || "8081";
const env = process.env.NODE_ENV || "development";
const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

const rootBuildPath = path.join(__dirname, "../build");
const indexPath = `${rootBuildPath}/index.html`;

app.use(express.static(rootBuildPath, { index: false }));

app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.SERVER_URL,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(
  cookieSession({
    name: "googleSession",
    maxAge: 1 * 60 * 60 * 1000,
    sameSite: "strict",
    secure: process.env.HTTPS_SECURE === "prod" ? true : false,
    keys: [process.env.COOKIE_KEY],
  })
);

app.use(passport.initialize());
app.use(
  passport.session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.SESSION_SECRET,
  })
);

app.use(routes);

app.get("*", isAuthenticated, (req, res) => {
  res.sendFile(indexPath);
});

app.listen(PORT, () => console.log(`listing on port ${PORT}`));
