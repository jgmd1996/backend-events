import express from "express";
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import cors from 'cors';

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com o banco feita com sucesso')
})

const app = express();
app.use(
  cors({
    origin: "*",
  })
)

const errorResponse = (err, req, res, next) => {
  logger.error(err.message);
  res.status(500).send(err.message);
};

app.use(errorResponse);

app.use(express.json())
routes(app);


export default app