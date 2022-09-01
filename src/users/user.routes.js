const router = require('express').Router()
const passport = require('passport')
const roleAdminMiddleware = require('../middleware/adminRole')
const { upload } = require('../utils/multer')
require('../middleware/auth.middleware')
const userService = require('./users.http')




router.route('/') //*  /api/v1/users/
    .get(userService.getAll)
    .post(userService.register)

    
router.route('/me')
    .get(passport.authenticate('jwt', {session: false}), userService.getMyUserById)
    .put(passport.authenticate('jwt' , {session: false}) , userService.editMyUser)
    .delete(passport.authenticate('jwt' , {session: false}), userService.removeMyuser)
    
    router.route('/me/profile-img')
    .post(passport.authenticate('jwt', {session: false}), upload.single('profile-img'), userService.postProfileImg)
    //.get()


router.route('/:id')
    .get(passport.authenticate('jwt', {session: false}), userService.getById)
    .delete(passport.authenticate('jwt', {session: false}), roleAdminMiddleware , userService.remove)
    .put(passport.authenticate('jwt', {session: false}),roleAdminMiddleware ,userService.edit)



module.exports = {
    router
}