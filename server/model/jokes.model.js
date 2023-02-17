const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Se necesita el campo 'setup' "],
        minlenght: [10, 'debe tener mas de 10 caracteres']
    },
    punchline: {
        type: String,
        required: [true, "Se necesita el campo 'punchline' "],
        minlenght: [3, 'debe tener mas de 3 caracteres']
    },
},
    { timestamps: true }
)

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;