const User = require("../schemas");
module.exports = async (req, res) => {
    const { 
        username,
        password, 
        first_name, 
        last_name
    } = req.body;
    try {
      const user = await User.create({ 
        username,
        password, 
        first_name, 
        last_name
       });
      res.status(201).json({ data: user });
    } catch (error) {
        res.status(400).json({ error });
    }
  };