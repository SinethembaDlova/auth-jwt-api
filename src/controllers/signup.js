const User = require("../schemas");
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  try {
    const { 
      username,
      password, 
      first_name, 
      last_name
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed password: ", hashedPassword);
    const user = await User.create({ 
      username,
      password: hashedPassword, 
      first_name, 
      last_name
    });
    const id = user._id
    const access_token = await jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET)
    res.status(201).json({ data: user, access_token });
  } catch (error) {
      res.status(400).json({ error });
  }
};