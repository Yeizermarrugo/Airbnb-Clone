const uuid = require('uuid');
const Reservations = require('../models/reservations.model')

const getAllReservations = () => {

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
    
    createReservations
}