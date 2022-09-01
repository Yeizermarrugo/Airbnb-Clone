const chai = require('chai');
const {it, describe} = require('mocha')
const chaiHttp = require('chai-http')

const app = require('../app').app

chai.use(chaiHttp)

describe('Suite de test e integracion de usuarios', () => {
    it('should return a status 200 when I sent a correct ID in params', (done) => {
        chai.request(app)
        .get('/api/v1/users/dc1d354e-9d6f-4819-bb12-88da6ed00c80')
        .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRjMWQzNTRlLTlkNmYtNDgxOS1iYjEyLTg4ZGE2ZWQwMGM4MCIsImVtYWlsIjoiUGVyZXpAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjEzOTM2NTd9._n-vwkSOs8IMtjxlyS3XGt16kosdj-db9T6m4dFwk2E')
        .end((err, res) => {
            chai.assert.equal(res.status, 200)
            chai.assert.property(res.body, 'id')
            chai.assert.property(res.body, 'email')
            chai.assert.property(res.body, 'role')
            chai.assert.equal(res.body.role, 'admin')
            chai.assert.equal(res.body.email, 'Perez@example.com')
            done()
        })
    })
    it('should return 204 when I delete my own user with my credentials', (done) => {
        chai.request(app)
            .delete('/api/v1/users/me')
            .set('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRjMWQzNTRlLTlkNmYtNDgxOS1iYjEyLTg4ZGE2ZWQwMGM4MCIsImVtYWlsIjoiUGVyZXpAZXhhbXBsZS5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjEzOTM2NTd9._n-vwkSOs8IMtjxlyS3XGt16kosdj-db9T6m4dFwk2E')
            .end((err, res)=> {
                chai.assert.equal(res.status, 204)
                done()
            })
   })
})