const router = require('express').Router()
const passport = require('passport')


const accommodationsServices = require('./accommodation.http')
const reservationService = require('../reservations/reservation.http')
require('../middleware/auth.middleware')

router.route('/')
    .get(accommodationsServices.getAll)


router.route('/:id')
    .get(accommodationsServices.getById)

router.route('/:id/make-reservation')
    .post(passport.authenticate('jwt', {session: false}), reservationService.postReservation)



module.exports = {
    router
}