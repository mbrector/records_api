const express = require('express')
const router = express.Router()
const Records = require('../models/records')

//Index
router.get('/', (req, res)=>{
    Records.find({}, (err, foundRecords)=>{
        res.json(foundRecords)
    })
})
//Delete
router.delete('/:id', (req, res)=>{
    Records.findByIdAndRemove(req.params.id, (err, deletedRecord)=>{
        res.json(deletedRecord)
    })
})
//Update
router.put('/:id', (req, res)=>{
    Todos.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecord)=>{
        res.json(updatedRecord)
    })
})
//Create
router.post('/', (req, res)=>{
    Todos.create(req.body, (err, createdRecord)=>{
        res.json(createdRecord) 
    })
})
//Show
router.get('/:id', (req, res)=>{
    Todos.findById(req.params.id, (err, foundRecord)=>{
        res.json(foundRecord);
    })
})

module.exports = router