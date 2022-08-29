const Users = require('../schemas');

module.exports = async (req, res) => {
  try {
    const found_users = await Users.find();
    if (found_users.length > 0) {
      res.status(200).json({ data: found_users });
    } else {
      res.status(204).json({ data: [] });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};