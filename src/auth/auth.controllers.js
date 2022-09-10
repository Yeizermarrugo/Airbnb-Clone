const { getUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypt')

const loginUser = async (email, password) => {
    //? user.password = contraseña hashead
    //* password = contraseña en texto plano
    return  await getUserByEmail(email)
    .then((res)=> {
            const verify_password = comparePassword(password, res.password)
            if (verify_password) {
                return user
            }
            return false
    })
    .catch(err=> {
        return false
    } )
}

// console.log(loginUser('Perez@example.com', 'root'));

module.exports = {
    loginUser
}