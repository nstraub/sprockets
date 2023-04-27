const {ObjectId} = require("mongoose");

const sprocketFactorySchema = {
    factory: {
        chart_data: {
            sprocket_production_actual: Array,
            sprocket_production_goal: Array,
            time: Array
        }
    }
};

const sprocketSchema = {
    sprocket_factory_id: ObjectId,
    sprocket_type_id: ObjectId
};

module.exports = {
    sprocketFactorySchema,
    sprocketSchema
};