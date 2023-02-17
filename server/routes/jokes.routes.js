const jokesController = require('../controllers/jokes.controlles');

module.exports = app =>{
    app.get("/api/jokes/", jokesController.obtenerChiste);
    app.get("/api/jokes/:id", jokesController.buscarUnChiste);
    //app.get("/api/jokes/random", jokesController.chisteRandom);
    app.post("/api/jokes/new", jokesController.crearChiste);
    app.put("/api/jokes/update/:id", jokesController.actualizarChiste);
    app.delete("/api/jokes/delete/:id", jokesController.eliminarChiste);
}