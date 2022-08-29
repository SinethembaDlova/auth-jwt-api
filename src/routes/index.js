
const express = require('express');
const router = express.Router();

const signin = require('../controllers/signin');
const signup = require('../controllers/signup');
const verify_token = require('../controllers/verifyToken');
const user = require('../controllers/fetchUser');
const users = require('../controllers/fetchUsers');
const refresh_token =require('../controllers/refreshToken');

router.get('/users', verify_token, users);
router.get('/users/:userId', verify_token, user);
router.post('/users/signin', signin)
router.post('/users/signup', signup);
router.get('/users/verify_token', verify_token);
router.get('/users/refresh_token', refresh_token);


module.exports = router;