const Users = require('../schemas');

module.exports = async (req, res) => {
  try {
    const found_user = await Users.find({ _id: req.params.userId});
    if (found_user.length > 0) {
      res.status(200).json({ data: found_user });
    } else {
      res.status(204).json({ data: [] });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
};