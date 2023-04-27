'use strict';

const express = require('express');
const mongoose = require('mongoose');
const {sprocketFactorySchema, sprocketSchema} = require("./schemas");
const bodyParser = require('body-parser');

const PORT = 3000;
const HOST = '0.0.0.0';
const MONGO_CONNECTION_STRING = 'mongodb://root:asdfasdf@mongo:27017/backend-challenge?authSource=admin';

const SprocketFactory = mongoose.model('SprocketFactory', new mongoose.Schema(sprocketFactorySchema), 'sprocket-factories');
const Sprocket = mongoose.model('Sprocket', new mongoose.Schema(sprocketSchema));

const app = express();

const jsonParser = bodyParser.json();

async function connectToMongo() {
    await mongoose.connect(MONGO_CONNECTION_STRING);
}

app.get('/api/sprocket-factories', async (req, res) => {
    await connectToMongo();

    const sprocketFactories = await SprocketFactory.find();
    res.send(JSON.stringify(sprocketFactories));
});

app.get('/api/sprocket-factories/:id', async (req, res) => {
    await connectToMongo();

    const factory = await SprocketFactory.findById(req.params.id);

    res.send(JSON.stringify(factory));
});

app.get('/api/sprockets/:id', async (req, res) => {
    await connectToMongo();

    const sprocket = await Sprocket.findById(req.params.id);

    res.send(JSON.stringify(sprocket));
});

app.post('/api/sprockets', jsonParser, async (req, res) => {
    await connectToMongo();

    const sprocket = new Sprocket(req.body);
    await sprocket.save();

    res.sendStatus(200);
});

app.put('/api/sprockets/:id', jsonParser, async (req, res) => {
    await connectToMongo();

    await Sprocket.findOneAndUpdate({_id: req.params.id}, req.body);

    res.sendStatus(200);
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
