const router = require('express').Router();
const {getUser} = require('../services/user_services');

router.get('/:id',getUser,(req,res,next)=>{
    res.send(req.arr);
});


module.exports = router;