# Sprockets Challenge

Sprockets challenge contains API endpoints for listing sprocket factories, getting sprockets and sprocket factories by
their id, as well as adding and editing sprockets. It uses mongoDB as the database, and nodeJS with express and mongoose
to setup the routes.

to use, docker must be installed. to run the containers, cd into the root directory and run `docker compose up -d`.

## API reference

- /api/sprocket-factories `[GET]`: GET method that returns a list of all sprocket factories.
- /api/sprocket-factories/:id `[GET]`: GET method that returns one sprocket factory by its id.
- /api/sprockets/:id `[GET]`: GET method that returns one sprocket by its id.
- /api/sprockets `[POST]`: POST method that adds a new sprocket. requires a JSON body containing `sprocket_factory_id`
  and `sprocket_type_id`.
- /api/sprockets/:id `[PUT]`: PUT method that updates an existing sprocket by its id. requires a JSON body containing
  either `sprocket_factory_id`, `sprocket_type_id`, or both.
 