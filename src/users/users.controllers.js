const uuid = require('uuid');
const { comparePassword, hashPassword } = require('../utils/crypt');

const userDB = []


const getallUsers = () => {
    return userDB
    //? select * from users;
}

const getallUsersById = () => {
    const data = userDB.filter(user => user.id === id)
    return data.length ? data[0] : false
    //? select * from users where id = ${id};
}

const createUser = (data) => {
    const newUser = {
        id: uuid.v4(), //obligatorio
        first_name: data.first_name, // obligatorio
        last_name: data.last_name, //obligatorio
        email: data.email, //obligatorio
        password: hashPassword(data.password), //obligatorio
        phone: data.phone ? data.phone : '', //obligatoriounico 
        bithday_date: data.bithday_date, //obligatorio
        country: data.country, //obligator
        role: 'normal', //obligatorio y por defecto "normal"
        profile_image: data.profile_image ? data.profile_image : '',
        is_active: true, //obligatorio y por defecto "active"
        verified: false //obligatorio y por defecto "false"
    }
    userDB.push(newUser)
    return newUser;
}

const editUser = (id, data) => {
    const index = userDB.findIndex(user => user.id === id)
    if (index === -1) {
        userDB[index] = {
            id: id,
            first_name: data.first_name, // obligatorio
            last_name: data.last_name, //obligatorio
            email: data.email, //obligatorio
            password: hashPassword(data.password), //obligatorio
            phone: data.phone ? data.phone : '', //obligatoriounico 
            bithday_date: data.bithday_date, //obligatorio
            country: data.country, //obligator
            role: 'normal', //obligatorio y por defecto "normal"
            profile_image: data.profile_image ? data.profile_image : '',
            is_active: data.is_active, //obligatorio y por defecto "active"
            verified: false //obligatorio y por defecto "false"
        }
        return userDB[index]
    }else{
        return createUser(data)
    }
}


const deleteUser = (id) => {
    const index = userDB.findIndex(user => user.id === id)
    if(index !== -1){
        userDB.splice(index, 1)
        return true
    }else{
        return false
    }
}

module.exports = {
    createUser,
    getallUsers,
    getallUsersById,
    editUser,
    deleteUser
}