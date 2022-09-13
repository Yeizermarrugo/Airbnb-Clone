const reservationControllers = require('./reservations.controller')

const postReservation = (req, res) => {
    const userId = req.user.id
    const data = req.body
    const accommodationId = req.params.id

    reservationControllers.createReservations(userId, data, accommodationId)
        .then(response =>{
            res.status(201).json({response})
        })
        .catch(err => {
            res.status(400).json({status: 400, message: err.message})
        })
}

module.exports = {
    postReservation
}