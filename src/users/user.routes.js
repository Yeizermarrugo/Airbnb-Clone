const router = require('express').Router()

const userService = require('./users.http')

router.route('/') //*  /api/v1/users/
    .get(userService.getAll)
    .post(userService.register)

router.route('/:id')
    .get(userService.getById)
    .delete(userService.remove)
    .put(userService.edit)

    
module.exports = {
    router
}