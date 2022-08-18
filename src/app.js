//*Dependencias
const express = require('express');
require('dotenv').config()
const port = process.env.PORT
//*Archivos de rutas
const userRoute = require('./users/user.routes').router
const authRoute = require('./auth/auth.routes').router


//*Configuraciones iniciales
const app = express();


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})

app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})