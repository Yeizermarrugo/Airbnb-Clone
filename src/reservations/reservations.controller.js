const uuid = require('uuid');
const Accommodations = require('../models/accommodations.model');
const Reservations = require('../models/reservations.model');
const Users = require('../models/users.model');

const getAllReservations = async () => {
    const data = await Reservations.findAll({
        include: [
            {
                model: Users
            },
            {
                model: Accommodations
            }
        ]
    })
    return data
}

const createReservations = async (data, userId, accommodationId) => {
    const {isFinished, isCanceled, ...restOfData} = data
    const newReservations = await Reservations.create({
        ...restOfData,
        id: uuid.v4(),
        userId: userId,
        accommodationId: accommodationId,
    })
    return newReservations
}

module.exports = {
    getAllReservations,
    createReservations
}