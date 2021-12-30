const chai = require('chai');
const server = require('../server.js')
const  chaiHttp = require('chai-http')
chai.should();
chai.use(chaiHttp);

describe('Test Node js API ',()=>{
    describe(' Test API  ',() => {
            it('Test get response tes ',() =>{
                chai.request(server).get('/getData').
                end((err,response) => {
                    // console.log(response)
                    response.should.have.status(200);
                    response.body.should.have.property('name')
                    response.body.should.have.property('age')
                })

            })

            it('Test value of result ',() =>{
                chai.request(server).get('/getData').
                end((err,response) => {
                    // console.log(response)
                    // response.should.have.status(200);
                    // response.body.should.have.property('name')
                    response.body.should.have.property('age').be.equal(35)
                    response.body.should.have.property('age').and.to.be.a('Number')
                })

            })
    })

}) 