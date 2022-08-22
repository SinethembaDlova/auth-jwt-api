require('dotenv').config();
const User = require('../schemas');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    const { 
      username,
      password
    } = req.body;
    const user = await User.find({ username });
    console.log('user: ', user);
    if (user.length <= 0) {
      return res.status(204).json({ data: [] })
    } else {
      if (await bcrypt.compare(password, user[0].password)){
        const id = user[0]._id;
        const access_token = await jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET)
        res.status(200).json({ data: user, access_token })
      }
    }  
  } catch (error) {
    res.status(400).json({ error });
  }
  };