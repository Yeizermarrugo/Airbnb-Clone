//*Dependencias
const express = require('express');
const passport = require('passport');// Importamos la dependencia de passport
require('./middleware/auth.middleware')(passport)
require('dotenv').config()
const port = process.env.PORT
const path = require('path')
//*Archivos de rutas
const userRoute = require('./users/user.routes').router
const authRoute = require('./auth/auth.routes').router

const {db} = require('./utils/database')

//*Configuraciones iniciales
const app = express();

db.authenticate()
.then(()=> console.log('Databases Authenticated'))
.catch(err => console.log(err))

db.sync()
    .then(()=> console.log('Database synced'))


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})

app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)

app.get('/api/v1/uploads/:imgName', (req, res) => {
    const imgName = req.params.imgName
    res.status(200).sendFile(path.resolve('uploads/') + '/'+ imgName)
})


// app.get('/ejemplo',
//     passport.authenticate('jwt', {session: false}),
//     (req, res) => {
//         res.status(200).json({message: 'Felicidades, tienes credenciales para entrar aqui', email: req.user.email})
//     })


app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})

module.exports ={
    app
}
