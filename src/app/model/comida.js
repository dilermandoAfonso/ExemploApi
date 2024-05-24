const mongoose = require("mongoose");

const ComidaSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        preco: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }

);

module.exports = mongoose.model("Comida", ComidaSchema);