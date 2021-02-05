const router = require('express').Router();
const {getUser,postUser} = require('../services/user_services');

router.get('/:id',getUser,(req,res,next)=>{
    res.json({e:"Fuck"})
});

router.post('/:id',postUser,(req,res)=>{
    console.log(req.body);
    res.send('Bye');
});
module.exports = router;