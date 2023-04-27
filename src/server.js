'use strict';

const express = require('express');
const mongoose = require('mongoose');
const {sprocketFactorySchema} = require("./schemas");

const PORT = 3000;
const HOST = '0.0.0.0';
const MONGO_CONNECTION_STRING = 'mongodb://root:asdfasdf@mongo:27017/backend-challenge?authSource=admin';

const sprocketFactory = mongoose.model('SprocketFactory', new mongoose.Schema(sprocketFactorySchema), 'sprocket-factories');

const app = express();
app.get('/api/sprocket-factories', async (req, res) => {
    await mongoose.connect(MONGO_CONNECTION_STRING);

    const sprocketFactories = await sprocketFactory.find();
    res.send(JSON.stringify(sprocketFactories));
});

app.listen(PORT, HOST, () => {
    console.log(`Running on http://${HOST}:${PORT}`);
});
