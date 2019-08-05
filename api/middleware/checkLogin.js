const jwt = require('jsonwebtoken');

module.exports = (req,res,next) => {
    try {
        console.log(req.headers.token);
        jwt.verify(req.headers.token,'lixd',(err,decoded) => {
            if(!err){
                req.info = decoded;
                next()
            }else{
                res.json({
                    name:'Unauthorized',
                    message:'用户未登录',
                    code:0
                })
            }
        })
    }catch(e){
        res.json({
            name: 'Unauthorized',
            message: '用户未登录',
            code: 0
        })
    }
}