
const express = require("express");
const router = express.Router();

const signin = require("../controllers/signin")
const signup = require("../controllers/signup");

router.post("/signin", signin)
router.post("/signup", signup);

module.exports = router;