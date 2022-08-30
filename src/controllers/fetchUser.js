const Users = require('../schemas');

module.exports = async (req, res) => {
  try {
    const found_user = await Users.find({ _id: req.params.userId});
    if (found_user.length > 0) {
      res.status(200).json({ data: found_user, 'message': 'Successfully fetched a user.' });
    } else {
      res.status(204).json({ data: [], 'message': 'There is no user found linked with the credential.' });
    }
  } catch (error) {
    res.status(400).json({ error, 'message': 'Failled to fetche users.' });
  }
};