const sequelize = require('../../helpers/sequelizer');

const getUser =async (req,res,next)=>{
    const user = sequelize.models.user;
    const id = req.params.id;
    const arr =await user.findAll(
        {
            where : {
                id : id
            }
        }
    )
    req.arr = arr;
    next();
};

module.exports = {getUser}