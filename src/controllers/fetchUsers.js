const Users = require("../schemas");

module.exports = async (req, res) => {
  try {
    const users = await Users.find();
    if (users.length > 0) {
      res.status(200).json({ data: users });
    } else {
      res.status(204).json({ data: [] });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};