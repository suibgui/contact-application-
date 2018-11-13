const express = require('express')
const mangodb = require("mongodb")
const { MongoClient, ObjectID } = require('mongodb')
const bodyParser = require('body-parser')
const assert = require('assert')


const app = express()

app.use(bodyParser.json())

const url = 'mongodb://localhost:27017'

const database = 'contacts'

MongoClient.connect(url, (err, client) => {

    assert.equal(err, null, 'failed to connect')

    const db = client.db(database)

    app.post('/contacts/new', (req, res) => {

        let contact = req.body

        db.collection('contacts').insert(contact, (err, data) => {

            if (err) res.send('somthing wrong')

            res.send(data)
        })

    })
    app.get('/contacts', (req, res) => {

        db.collection('contacts').find().toArray((err, data) => {

            if (err) res.send('somthing wrong')

            res.send(data)
        })

    })

    app.put('/contacts/:id', (req, res) => {
        
        let contact = req.body

        let id = ObjectID(req.params.id)

        db.collection('contacts').update({ _id: id }, { ...contact }, (err, data) => {
            if (err) res.send('somthing wrong')
            res.send(data)
        })
    })
    app.delete('/contacts/:id', (req, res) => {
        let id = ObjectID(req.params.id)
        db.collection('contacts').findOneAndDelete({ _id: id }, (err, data) => {
            if (err) res.send('somthing wrong')
            res.send("done")
        })
    })



})


app.listen('5000', (err) => {
    if (err) console.log('errrrr')
    console.log('ruunniiinnnggg')
})

