const router = require('express').Router()

const userService = require('./users.http')

router.route('/') //*  /api/v1/users/
    .get(userService.getAll)
    .post(userService.register)

router.route('/api/v1/users/:id')
    .get(userService.getById)

    
module.exports = {
    router
}