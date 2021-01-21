const userRoutes = require('./apiUser');

const endPointsHandler = (app)=>{
    app.use('/api/user',userRoutes);
}

module.exports = {endPointsHandler};