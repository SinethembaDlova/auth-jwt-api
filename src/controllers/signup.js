const User = require('../schemas');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const { 
    username,
    password, 
    first_name, 
    last_name
  } = req.body;
  if (!username || !password || !first_name || !last_name) return res.status(400).json({ 'message': 'Username and password are required.' });

  const duplicate = await User.find({ username });
  if(duplicate) return res.status(409).json({ 'message': 'An account with this username already exist.' });


  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ 
      username,
      password: hashedPassword, 
      first_name, 
      last_name
    });
    res.status(201).json({ data: user, 'message': 'User successfully created.' });
  } catch (error) {
      res.status(500).json({ error, 'message': error.message });
  }
};