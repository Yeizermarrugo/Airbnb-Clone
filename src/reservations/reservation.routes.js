const router = require('express').Router()
const reservationServices = require('./reservation.http')

router.route('/')
    .get(reservationServices.getAll)

module.exports = {
    router
}