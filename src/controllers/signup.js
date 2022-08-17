const User = require("../schemas");
const bcrypt = require('bcrypt'); 

module.exports = async (req, res) => {
  try {
    const { 
      username,
      password, 
      first_name, 
      last_name
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ 
      username,
      password: hashedPassword, 
      first_name, 
      last_name
    });
    res.status(201).json({ data: user });
  } catch (error) {
        res.status(400).json({ error });
  }
};