const express = require("express");
const passport = require("passport");
const { isAuthenticated } = require("../middleware/auth");
const router = express.Router();

router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login/error",
    successRedirect: "/login/success",
  })
);

/** Route called by the auth middleware if user is not Authenticated */
router.get("/login", (req, res, next) => {
  res.render("login");
});

/** Route called durning google login flow callback */
router.get("/login/success", (req, res) => {
  res.render("success", {
    status: "You have successfully logged in",
  });
});

router.get("/login/error", (req, res) => {
  res.render("error");
});

router.post("/google/logout", (req, res) => {
  req.logOut();
  req.session = null;
  res.status(200).json("success");
});

module.exports = router;
