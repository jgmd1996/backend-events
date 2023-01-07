import  express  from "express";
import event from "./EventRoutes.js";
import genre from "./GenreRoutes.js";
import band from "./BandRoutes.js";
const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        event,
        genre,
        band

    )
}

export default routes;