const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    next()
})


const agent_list = [
    {
        name: 'agent 01',
        email : 'agent01@mailinator.com',
        id: 1
    },
    {
        name: 'agent 02',
        email : 'agent02@mailinator.com',
        id: 2
    },
    {
        name: 'agent 03',
        email : 'agent03@mailinator.com',
        id: 3
    }

]



app.get('/getData', function(req, res, next) {

    return res.send({
        organization:'Appypie llp',
        age:35,
        name: 'Bineet Kumar Chaubey'
    })
})

app.post('/addAgent', function(req, res, next) {

    agent_list.push(req.body)
    return res.send({
        success: true,
        result: agent_list
    })
})


module.exports = app.listen(8089,()=>{ console.log('working api') });
