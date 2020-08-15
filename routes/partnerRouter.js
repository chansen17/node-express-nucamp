const express = require('express');
const bodyParser = require('body-parser');

const partnerRouter = express.Router();
partnerRouter.use(bodyParser.json());

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})


///////////////// WORKSHOP TASK ONE ///////////////////

partnerRouter.route('/:partnerId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Will send all the promotionss to you');
})
.post((req, res) => {
    res.statusCode = 403;
    res.setHeader('Content-Type', 'application/json');
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('PUT operation not supported on /promotionss');
})
.delete((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Deleting all promotionss');
})

///////////////////// END TASK ONE /////////////////////


.get((req, res) => {
    res.end('Will send all the promotionss to you');
})
.post((req, res) => {
    res.end(`Will add the promotions: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotionss');
})
.delete((req, res) => {
    res.end('Deleting all promotionss');
});

module.exports = partnerRouter;