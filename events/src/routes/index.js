const express = require('express');
//import event from "./EventRoutes.js";
//import genre from "./GenreRoutes.js";
const genre = require('./GenreRoutes.js');
//import band from "./BandRoutes.js";
const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        
        genre

    )
}

export default routes;