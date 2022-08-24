const chai = require('chai');
const {it, describe} = require('mocha')
const chaiHttp = require('chai-http')

const app = require('../app').app

chai.use(chaiHttp)

describe('Suite de test e integracion de usuarios', () => {
    it('should return 204 when I delete my own user with my credentials', (done) => {
        chai.request(app)
            .delete('/api/v1/users/me')
            .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRjMWQzNTRlLTlkNmYtNDgxOS1iYjEyLTg4ZGE2ZWQwMGM4MCIsImVtYWlsIjoiUGVyZXpAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjEzMDkyNTZ9.jE5k0CeBxgDorGzNx7Aykp5Km6fVh3fA9YB_yvzxmEk')
            .end((err, res)=> {
                chai.assert.equal(res.status, 204)
                done()
            })
    })
})