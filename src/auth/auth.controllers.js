const { getUserByEmail } = require('../users/users.controllers')
const { comparePassword } = require('../utils/crypt')

const loginUser = (email, password) => {
    const user = getUserByEmail(email)
    //? user.password = contraseña hashead
    //* password = contraseña en texto plano
    if (user) {
        const verify_password = comparePassword(password, user.password)
        if (verify_password) {
            return user
        }
    }
    return false
}

console.log(loginUser('Perez@example.com', 'root'));

module.exports = {
    loginUser
}