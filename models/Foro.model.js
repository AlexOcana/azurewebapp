const { Schema, model } = require("mongoose");

const foroSchema = new Schema(
    {
        user: {
            type: String,
            trim: true,

        },

        subject: {
            type: String,

        },

        description: {
            type: String,

        },

        platform: {
            type: String,

        }
    },
    {
        timestamps: true
    }
);

const Foro = model("Foro", foroSchema);

module.exports = Foro;
