import  express  from "express";
import produtos from "./produtosRoutes.js";
import categories from "./categoriesRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Curso de node"})
    })

    app.use(
        express.json(),
        produtos,
        categories
    )
}

export default routes;