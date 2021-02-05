const sequelize = require('../../helpers/sequelizer');
const ApiError = require('../../helpers/ApiError')
const getUser =async (req,res,next)=>{
    const user = sequelize.models.users;
    const id = req.params.id;
    try{
        const arr =await user.findAll(
        {
            where : {
                id : id
            }
        }
    )
    req.arr = arr;
    next();
    }catch(e){
        next(ApiError.badRequest())
    }
};

const postUser = async (req,res,next) =>{
    const body = req.body;
    // do db operation
    const data = 'Output';
    req.data = data;
    next();
};

module.exports = {getUser,postUser}