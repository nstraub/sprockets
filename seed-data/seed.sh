#!/bin/sh
mongoimport --host mongo:27017 --username root --password asdfasdf --db backend-challenge --collection sprocket-types --type json --file ./seed_sprocket_types.json --jsonArray --authenticationDatabase admin
mongoimport --host mongo:27017 --username root --password asdfasdf --db backend-challenge --collection sprocket-factories --type json --file ./seed_factory_data.json --jsonArray --authenticationDatabase admin