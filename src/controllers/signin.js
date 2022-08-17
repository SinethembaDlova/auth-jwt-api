const User = require("../schemas");

module.exports = async (req, res) => {
    const { 
        username,
        password
    } = req.body;
    try {
      const user = await User.create({ 
        username,
        password
       });
      res.status(201).json({ data: user });
    } catch (error) {
        res.status(400).json({ error });
    }
  };