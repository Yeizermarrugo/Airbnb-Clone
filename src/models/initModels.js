const Users = require('./user.models')
const Posts = require('./post.models')


const initModels = () => {
    //? Users -> Posts 
    //* User tiene muchos posts
    Users.hasMany(Posts)
    Posts.belongsTo(Users)
}


module.exports = initModels