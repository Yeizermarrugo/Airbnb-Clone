const uuid = require('uuid');
const { hashPassword } = require('../utils/crypt');

const Users = require('../models/users.model');
const Roles = require('../models/roles.model');

const userDB = [
    {
        id: "dc1d354e-9d6f-4819-bb12-88da6ed00c80",
        firstName: "Luis",
        lastNname: "Perez",
        gender: "male",
        email: "Perez@example.com",
        password: "$2b$10$/Q4q.Cb9bRdJo1EiiQhmtOGdDy5Y89O5H2QhMUZbOR4ncdo35HIAq",
        phone: "+573004567632",
        birthdayDate: "20/11/1999",
        dni: "",
        address: "",
        role: "admin",
        profileImage: "url.com/img/",
        status: true,
        verified: false
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
        firstName: data.first_name, // obligatorio
        lastName: data.last_name, //obligatorio
        gender: data.gender,
        email: data.email, //obligatorio
        password: hashPassword(data.password), //obligatorio
        phone: data.phone ? data.phone : '', //obligatoriounico 
        birthdayDate: data.birthday_date, //obligatorio
        dni: data.dni,
        roleId: 'a7172929-995d-43c0-afca-f8149bd518e5', //obligatorio y por defecto "normal"
        address: data.address, //obligatorio
        profileImage: data.profile_image,
        status: 'active', //obligatorio y por defecto "active"
        verified: false //obligatorio y por defecto "false"
    })
    return newUser
}

const editUser = async (userId, data, userRole) => {
        const {id, password, verified, roleId, ...restOfProperties} = data
        if ('a7172929-995d-43c0-afca-f8149bd518e5' === userRole){
            const response = await Users.update(
                {...restOfProperties, roleId},
                {where: {id: userId}}
            )
            return response
        }else{
            const response = await Users.update(restOfProperties, {where: {id: userId}})
            return response
        }
}
    // if (index !== -1) {
    //     userDB[index] = {
    //         id: id,
    //         first_name: data.first_name, // obligatorio
    //         last_name: data.last_name, //obligatorio
    //         email: data.email, //obligatorio
    //         password: userDB[index].password, //obligatorio
    //         phone: data.phone ? data.phone : '', //obligatoriounico 
    //         birthday_date: data.birthday_date, //obligatorio
    //         country: data.country, //obligator
    //         role: userRole === 'admin' ? data.role : 'normal', //obligatorio y por defecto "normal"
    //         profile_image: data.profile_image ? data.profile_image : '',
    //         is_active: data.is_active, //obligatorio y por defecto "active"
    //         verified: false //obligatorio y por defecto "false"
    //     }
    //     return userDB[index]
    // } else {
    //     return createUser(data)
    // }
// }


const deleteUser = async(id) => {
        const data = await Users.destroy({
            where: {
                id: id
            }
        })
        return data

    }

    const getUserByEmail = async (email) => {
        const data = await Users.findOne({where: {email}})
        return data
        //? select * from users where email = ${email};
    }


    const editProfileImg = async (userId, imgUrl) => {
        const response = await Users.update({
            ...imgUrl
            
            },{
                where:{
                    id: userId
                }
            })
            return response
}

const getUserWithRole = async (userId) => {
    const data = await Users.findOne({
      where: {
        id: userId,
      },
      include: {
        model: Roles,
        as: "role",
        attributes: {
          exclude: ["id", "createdAt", "updatedAt"],
        },
      },
      attributes: {
        exclude: ["roleId", "createdAt", "updatedAt"],
      },
    });
    return data;
  };
  


    module.exports = {
        createUser,
        getallUsers,
        getallUsersById,
        editUser,
        deleteUser,
        getUserByEmail,
        editProfileImg,
        getUserWithRole
    }