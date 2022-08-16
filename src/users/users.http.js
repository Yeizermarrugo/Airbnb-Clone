const userController = require('./users.controllers')

const getAll = (req, res) => {
    const data = userController.getallUsers()
    res.status(200).json({
        items: data.length,
        users: data
    })
}

const getById = (req, res) => {
    const id = req.params.id
    const data = userController.getById(id)
    if (data){
        res.status(200).json(data)
    }else {
        res.status(404).json({message: `El usuario con el id ${id} no existe`})
    }
}

const register = (req, res) => {
    const data = req.body
    if(!data){
        return res.status(400).json({message: 'Missing data'})
    }
    else if (
        !data.first_name ||
        !data.last_name ||
        !data.email || 
        !data.password||
        !data.birthday_date ||
        !data.country
    ){
        return res.status(400).json({message: 'All fields must be completed', fields: {
            first_name: 'string',
            last_name: 'string',
            email: 'example@example.com',
            password: 'string',
            birthday_date: 'DD/MM/YYYY',
            country: 'string'
        }})
    }else{
        const response = userController.createUser(data);
            return res.status(201).json({
                message: `User created succesfully with id: ${response.id}`, 
                user: response})


    }
    
}

module.exports = {
    getAll,
    getById,
    register
}