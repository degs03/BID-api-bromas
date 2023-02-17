const Joke = require('../model/jokes.model');

module.exports.obtenerChiste = (req, res) =>{
    Joke.find()
    .then(todosLosChistes => res.json({jokes: todosLosChistes}))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}

module.exports.buscarUnChiste = (req, res) =>{
    Joke.findOne({_id: req.params.id})
    .then(buscarUnChiste=> res.json({jokes: buscarUnChiste}))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}

module.exports.crearChiste = (req, res) =>{
    Joke.create(req.body)
    .then(crearNuevoChiste => res.json({jokes: crearNuevoChiste}))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}

module.exports.actualizarChiste = (req, res) =>{
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(actualizarUnChiste => res.json({jokes: actualizarUnChiste}))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}

module.exports.eliminarChiste = (req, res) =>{
    Joke.deleteOne({_id: req.params.id})
    .then(eliminarUnChiste=> res.json({jokes: eliminarUnChiste}))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}
/*
module.exports.chisteRandom = (req, res) =>{
    db.Joke.aggregate([{$sample: {size:3}}])
    .then(buscarUnChiste=> res.json({jokes: buscarUnChiste}))
    .catch(err => res.json({ message: "Algo salio mal", error: err }));
}*/