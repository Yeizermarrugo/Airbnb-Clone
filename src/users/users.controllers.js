const uuid = require('uuid');
const { hashPassword } = require('../utils/crypt');

const Users = require('../models/user.models')

const userDB = [
    {
        "id": "dc1d354e-9d6f-4819-bb12-88da6ed00c80",
        "first_name": "Luis",
        "last_name": "Perez",
        "email": "Perez@example.com",
        "password": "$2b$10$/Q4q.Cb9bRdJo1EiiQhmtOGdDy5Y89O5H2QhMUZbOR4ncdo35HIAq",
        "phone": "+573004567632",
        "birthday_date": "20/11/1999",
        "country": "Chile",
        "role": "admin",
        "profile_image": "url.com/img/",
        "is_active": true,
        "verified": false
    }
]


const getallUsers = async () => {

    const data = await Users.findAll()
    attributes: {
        exluded: ['password']
    }
    return data
    //? select * from users;
}

const getallUsersById = async (id) => {
    const data = await Users.findOne({
        where: {
            id: id,
            is_active: true
        },
        attributes: {
            exclude: ['password']
        }
    })
    return data
    //? select * from users where id = ${id};
}

const createUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(), //obligatorio
        first_name: data.first_name, // obligatorio
        last_name: data.last_name, //obligatorio
        email: data.email, //obligatorio
        password: hashPassword(data.password), //obligatorio
        phone: data.phone ? data.phone : '', //obligatoriounico 
        birthday_date: data.birthday_date, //obligatorio
        country: data.country, //obligator
        role: 'normal', //obligatorio y por defecto "normal"
        profile_image: data.profile_image,
        is_active: true, //obligatorio y por defecto "active"
        verified: false //obligatorio y por defecto "false"
    })
    return newUser
}

const editUser = (id, data, userRole) => {
    const index = userDB.findIndex(user => user.id === id)
    if (index !== -1) {
        userDB[index] = {
            id: id,
            first_name: data.first_name, // obligatorio
            last_name: data.last_name, //obligatorio
            email: data.email, //obligatorio
            password: userDB[index].password, //obligatorio
            phone: data.phone ? data.phone : '', //obligatoriounico 
            birthday_date: data.birthday_date, //obligatorio
            country: data.country, //obligator
            role: userRole === 'admin' ? data.role : 'normal', //obligatorio y por defecto "normal"
            profile_image: data.profile_image ? data.profile_image : '',
            is_active: data.is_active, //obligatorio y por defecto "active"
            verified: false //obligatorio y por defecto "false"
        }
        return userDB[index]
    } else {
        return createUser(data)
    }
}


const deleteUser = async(id) => {
        const data = await Users.destroy({
            where: {
                id: id
            }
        })
        return data

    }

    const getUserByEmail = (email) => {
        const data = userDB.filter((item) => item.email === email);
        return data.length ? data[0] : false
        //? select * from users where email = ${email};
    }

    const editProfileImg = (userId, imgUrl) => {
        const index = userDB.findIndex(user => user.id === userId)
        if (index !== -1) {
            userDB[index].profile_image = imgUrl
            return userDB[index]
        }
        return false
    }


    module.exports = {
        createUser,
        getallUsers,
        getallUsersById,
        editUser,
        deleteUser,
        getUserByEmail,
        editProfileImg
    }