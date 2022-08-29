require('dotenv').config();
const User = require('../schemas');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  try {
    const { 
      username,
      password
    } = req.body;
    if (!username || !password) return res.status(400).json({ 'message': 'Username or Password are required.' });

    const found_user = await User.find({ username });
    if (found_user.length <= 0) return res.status(401).json({ 'message': 'An aacount with such credentials does not exist'}); 
    else {
      if (await bcrypt.compare(password, found_user[0].password)){
        const id = found_user[0]._id;
        const access_token = jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
        const refresh_token = jwt.sign({ id }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' })

        res.cookie('jwt', refresh_token, { httpOnly: true, sameSite: 'None', secure: true, maxAge: 24 * 60 * 60 * 1000 });
        res.status(200).json({ access_token })
      }
    }  
  } catch (error) {
    res.status(401).json({ error, ' message': error.message });
  }
  };