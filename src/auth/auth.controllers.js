const { getUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypt')

const loginUser = async (email, password) => {
    //? user.password = contraseña hashead
    //* password = contraseña en texto plano
    try {
            const user = await getUserByEmail(email)
            const verify_password = comparePassword(password, user.password)
            if (verify_password) {
                return user
            }
            return false
    }
    catch(error) {
        return false
    }
}

// console.log(loginUser('Perez@example.com', 'root'));

module.exports = {
    loginUser
}