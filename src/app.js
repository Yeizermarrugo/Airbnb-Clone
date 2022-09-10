//*Dependencias
const express = require('express');
const passport = require('passport');// Importamos la dependencia de passport
require('./middleware/auth.middleware')(passport)
require('dotenv').config()
const port = process.env.PORT
const path = require('path');
const initModels = require('./models/initModels');
const defaultData = require('./utils/defaultData')
const swaggerUi = require('swagger-ui-express');
//*Archivos de rutas
const userRoute = require('./users/user.routes').router
const authRoute = require('./auth/auth.routes').router
const accommodationsRouter = require('./Accommodations/accommodation.routes').router
const swaggerDoc = require('./swagger.json')

const {db} = require('./utils/database')

//*Configuraciones iniciales
const app = express();
initModels()

db.authenticate()
.then(()=> console.log('Databases Authenticated'))
.catch(err => console.log(err))


if(process.env.NODE_ENV === 'production'){
    db.sync()
      .then(() => {
        console.log('Database synced')
        defaultData()
      })
      .catch(err => console.log(err))
  } else{
    db.sync({force:true})
    .then(() => {
      console.log('Database synced')
      defaultData()
    })
    .catch(err => console.log(err))
  }
  


app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})

app.use('/api/v1/users', userRoute)
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/accommodations', accommodationsRouter)
app.use('/v1/doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

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
