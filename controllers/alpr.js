var Alpr = require('../models/alpr');

exports.create = async function(req, res) {
   var newAlpr = new Alpr({
       uuid: req.body.uuid,
       plate: req.body.results[0].plate
   })
    try {
        await newAlpr.save();
        console.log('http://192.168.1.122:3000/alprd_images/'+req.body.uuid+'.'+'jpg');

        res.send(newAlpr);
    } catch (err) {
        res.status(500).send(err);
    }
};




