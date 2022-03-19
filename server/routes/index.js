const express = require("express");
const googleLogin = require("./loginWithGoogle");
const testRoute = require("./test");

const router = express.Router();

router.use("/api", testRoute);
router.use(googleLogin);

module.exports = router;
