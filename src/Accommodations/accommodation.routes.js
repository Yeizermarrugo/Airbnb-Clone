const router = require('express').Router()

const accommodationsServices = require('./accommodation.http')

router.route('/')
    .get(accommodationsServices.getAll)



module.exports = {
    router
}