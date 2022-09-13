const accommodationsControllers = require('./accommodation.controllers')

const getAll = (req, res) => {
    accommodationsControllers.getAllAccommodations()
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
}

const getById = (req, res) => {
    const id = req.params.id
    accommodationsControllers.getAllAccommodationsById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err=>{
            res.status(400).json(err)
        })
}

module.exports = {
    getAll,
    getById
}