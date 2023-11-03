const { Schema, model } = require("mongoose");

const eventSchema = new Schema(
    {
        eventName: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        description: {
            type: String,
            required: true,
        },
        platform: {
            type: String,
            required: true,
        },
        eventImg: {
            type: String,
            // default: "añadir link de foto por defecto"
        },
        eventDate: {
            type: Date,
        },

        attendees: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],

        location: {
            type: {
                type: String,
            },
            coordinates: {
                type: [Number]
            },
        },
    },
    {
        timestamps: true
    }
);

const Event = model("Event", eventSchema);

module.exports = Event;
