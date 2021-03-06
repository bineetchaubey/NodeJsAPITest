const chai = require('chai');
const server = require('../server.js')
const  chaiHttp = require('chai-http')
const expect = require('chai').expect
chai.should();
chai.expect()
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
                    response.body.should.be.a('Object')
                    response.body.should.have.property('age').be.equal(35)
                    response.body.should.have.property('name').be.equal('Bineet Kumar Chaubey')
                    response.body.should.have.property('age').and.to.be.a('Number')
                })
            })

            it('BDD test  ',() =>{
                chai.request(server).get('/getData').
                end((err,response) => {
                    expect(response.body).to.have.keys('age', 'name','organization');
                    
                })
            })
   
    })

    describe(' Test Post API  ',() => {
        it('Test post API Res ',() =>{
            chai.request(server).post('/addAgent')
            .send({
                name: 'agent 04',
                email : 'agent04@mailinator.com',
                id: 4
            }).
            end((err,response) => {
                // console.log(response)
                response.should.have.status(200);
                response.body.should.have.property('result')
                response.body.should.have.property('result').and.length(4)
                expect(response.body.result).to.include.deep.members([{
                    name: 'agent 04',
                    email : 'agent04@mailinator.com',
                    id: 4
                }]);

            })

        })
    })


    describe(' Test delete API  ',() => {
        it('Test Delete API  ',() =>{
            chai.request(server).delete('/deleteAgent?id=3').
            end((err,response) => {
                 // console.log(response.body)
                response.should.have.status(200);
                response.body.should.have.property('result')
                response.body.should.have.property('result').and.length(3)
                expect(response.body.result).to.not.include.deep.members([{
                    name: 'agent 03',
                    email : 'agent03@mailinator.com',
                    id: 3
                }]);
            })

        })
    })

    describe(' Test Put API  ',() => {
        it('Test Put API  ',() =>{
            chai.request(server).put('/updateAgent?id=3').send({
                name: 'agent 05',
                email : 'agent05@mailinator.com',
            }).
            end((err,response) => {
                 // console.log(response.body)
                response.should.have.status(200);
                response.body.should.have.property('result')
                response.body.should.have.property('result').and.length(4)
                expect(response.body.result).to.include.deep.members([{
                    name: 'agent 05',
                    email : 'agent05@mailinator.com',
                    id: 3
                }]);
            })
        })
    })
}) 
