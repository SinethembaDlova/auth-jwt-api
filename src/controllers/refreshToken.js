require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
    console.log('REFRESHING!!!');
    const cookies = req.cookies;
    console.log('Cookies: ', cookies);

    if (!cookies?.jwt) return res.status(401).json({ 'message': 'Please provide refresh token.' });
    const refresh_token = cookies.jwt;

    const found_user = await User.find({ refresh_token })
    console.log('found user', found_user);

    if (found_user.length <= 0) return res.status(403).json({ 'message': 'This token is not valid.' });

    jwt.verify(
        refresh_token,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            console.log('refreshing: ', decoded);
            if (err || found_user.username !== decoded.username) return res.status(403).json({ 'message': 'Failed to refresh token.'});
            const access_token = jwt.sign(
                { "username": decoded.username },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '30s' }
            );
            res.status(200).json({ access_token, 'message': 'Successfully refreshed token.'})
        }
    );
  };
