const jwt = require('jsonwebtoken');
function checkAuth(req, res, next){
    try{
        const token = req.headers.authhorization.split(" ")[1];
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        req.userData = decodedToken;
        next();

    }catch(e){
        return res.status(401).json({
            'message': "invalid or expired token provided",
            'error': e
        })
    }
}

module.exports = {
    checkAuth: checkAuth
}