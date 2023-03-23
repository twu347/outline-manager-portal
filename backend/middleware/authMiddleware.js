const jwt = require('jsonwebtoken'); 
const asyncHandler = require('express-async-handler'); 
const JWT = require('../OutlineSchema/userModel.js'); 

// middleware detect the token, protect the router 
const protect = asyncHandler( 
    async(req, res, next) => {
        let token 
        if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
                // remove the bearer header and get the token
                token = req.headers.authorization.split(''); 
                // verify the token
                const decoded = jwt.verify(token, process.env.JWT_SECRET);
                // get user from the token 
                req.user = await JWT.findById(decoded.id).select('-password'); 
            next();
        }
            catch(error){
                console.log(error); 
                res.status(401); 
                throw new Error('not authorized');
            }
        }
        if(!token){
            res.status(401);
            throw new Error('not authorized, no token detected'); 
        }
    }
); 

module.exports = { protect }; 



