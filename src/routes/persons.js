var express = require('express');
var router = express.Router();
var db = require('../db');

router.get('/all', function(req, res) {
    db.Person.findAll()
        .then(persons => {
            res.status(200).json(JSON.stringify(persons));
        })
        .catch(err => {
            res.status(500).json(JSON.stringify(err));
        });
});

router.get('/:id', function(req, res) {
    db.Person.findByPk(req.params.id)
        .then(person => {
            res.status(200).json(JSON.stringify(person));
        })
        .catch(err => {
            res.status(500).json(JSON.stringify(err));
        });
});

router.put('/', function(req, res) {
    db.Person.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        id: req.body.id 
        })
        .then(person => {
            res.status(200).json(JSON.stringify(person));
        })
        .catch(err => {
            res.status(500).json(JSON.stringify(err));
        }); 
});

router.delete('/:id', function(req, res) {
    db.Person.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.status(200).json('Person deleted');
    })
    .catch(err => {
        res.status(500).json(JSON.stringify(err));
    });
});

module.exports = router;