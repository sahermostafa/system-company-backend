const jwt = require('jsonwebtoken')


module.exports = function (req,res,next){
    const token = req.header('x-auth-token')
    if (!token){
        return res.status(404).send('no access')
    }
    try{
        const deconde = jwt.verify(token,'privateKey')
        res.user=deconde;
        next()
    }catch(e){
        res.status(400).send('wrong')
    }
}