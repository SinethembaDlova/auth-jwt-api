
const express = require("express");
const router = express.Router();

const signin = require("../controllers/signin")
const signup = require("../controllers/signup");
const verify_token = require('../controllers/verifyToken');
const users = require('../controllers/fetchUsers');

router.get("/users", verify_token, users);
router.post("/users/signin", signin)
router.post("/users/signup", signup);


module.exports = router;