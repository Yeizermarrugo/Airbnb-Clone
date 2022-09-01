const router = require('express').Router()

const authService = require('./auth.http')
const {register} = require('../users/users.http')

router.post('/login', authService.login)

router.post('/register', register)


exports.router = router