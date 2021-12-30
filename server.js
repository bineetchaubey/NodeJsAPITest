const express = require('express');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
    next()
})

app.get('/getData', function(req, res, next) {

    return res.send({
        organization:'Appypie llp',
        age:35,
        name: 'Bineet Kumar Chaubey'
    })
})


module.exports = app.listen(8089,()=>{ console.log('working api') });
