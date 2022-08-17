const User = require("../schemas");
const bcrypt = require('bcrypt'); 

module.exports = async (req, res) => {
    const { 
        username,
        password
    } = req.body;
    const user = await User.find({ username });
    if (user.length === 0) {
        return res.status(400).json({ data: [] })
    }
    try {
        if (bcrypt.compare(password, user.password)){
            res.status(200).json({ data: user })
        }
    } catch (error) {
        res.status(400).json({ error });
      }
  };