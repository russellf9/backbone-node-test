var http = require('http');
var uuid =  require('node-uuid');
var serveStatic = require('node-static');
var fileServer = new serveStatic.Server('./');
var express = require('express');
var bodyParser = require('body-parser');




function serveCustomer(id){
    customers = customers.filter(function(customer){
        if(customer.id == id){
            customer.status = 'served';
            servedCustomers.push(customer);
            return false;
        }else{
            return true;
        }
    })
}

function addCustomer(customer){
    customer.id = uuid.v4();
    customers.push(customer);
}



var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/customers', function(req,res){
    res.send(customers);
})
app.get('/api/customers/served', function(req,res){
    res.send(servedCustomers);
})
app.post('/api/customer/add', function(req,res){
    addCustomer(req.body);
    res.end('Customer was added!');
});
app.post('/api/customer/serve', function(req,res){
    serveCustomer(req.body.id);
    res.end('Customer was served!');
});
app.delete('/api/customer/remove', function(req,res){
    removeCustomer(req.query.id);
    res.end('Customer was removed!');
});

app.use(function (req, res) {

    req.addListener('end', function () {
        fileServer.serve(req, res);
    }).resume();
});

app.listen(1339);

console.log('Server is running @ 127.0.0.1:1339...');



