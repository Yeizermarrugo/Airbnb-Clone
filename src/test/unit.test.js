const { assert } = require("chai");
const { it, describe } = require("mocha");

const usersControllers = require('../users/users.controllers')


describe ('Test unitario de mis usuarios', ()=>{
    it('Should return new user when I sent correct data', (done)=>{
        const body = {
            "first_name": "Usuario de test",
            "last_name": "tester",
            "email": "test@example.com",
            "password": "1234",
            "phone": "65432100",
            "birthday_date": "20/11/1999",
            "country": "Colombia"
        }
        const data = usersControllers.createUser(body)
        assert.equal(data.first_name, body.first_name)
        assert.equal(data.role, 'normal')
        assert.notEqual(data.password, body.password)
        done()
    })
    it('Should return new user when I sent correct data', (done)=>{
        const body = {
            "first_name": "Usuario de test",
            "last_name": "tester",
            "email": "test@example.com",
            "password": "1234",
            "phone": "65432100",
            "birthday_date": "20/11/1999",
            "country": "Colombia",
            "profile_image": 'asd'
        }
        const data = usersControllers.createUser(body)

        assert.equal(data.first_name, body.first_name)
        assert.equal(data.role, 'normal')
        assert.notEqual(data.password, body.password)
        assert.equal(data.profile_image, 'asd')
        done()
    })
     it('Should return new user when I sent correct data', (done)=>{
        const body = {
            "first_name": "Usuario de test",
            "last_name": "tester",
            "email": "test@example.com",
            "password": "1234",
            "phone": "65432100",
            "birthday_date": "20/11/1999",
            "country": "Colombia",
            "profile_image": 'asd'
        }
        const data = usersControllers.createUser(body)

        assert.equal(data.first_name, body.first_name)
        assert.equal(data.role, 'normal')
        assert.notEqual(data.password, body.password)
        assert.equal(data.profile_image, 'asd')
        assert.typeOf(data.id, 'string')
        assert.property(data, 'is_active')
        done()
    })
    it('should return an error when I sent a correct ID', (done)=> {
        const data = usersControllers.getallUsersById('dc1d354e-9d6f-4819-bb12-88da6ed00c80')

        assert.property(data, 'id')
        assert.property(data, 'email')
        assert.property(data, 'role')
        assert.property(data, 'first_name')
        assert.property(data, 'last_name')
        assert.equal(data.role, 'admin')
        assert.equal(data.email, 'Perez@example.com')
        assert.property(data, 'is_active')
        assert.equal(data.is_active, true)
        assert.typeOf(data.is_active, 'boolean')
        done()
    })
    it('should return an error when I sent a invalid ID', (done)=> {
        const data = usersControllers.getallUsersById('1')
        
        assert.typeOf(data, 'boolean')
        assert.equal(data, false)


        done()
    })
})