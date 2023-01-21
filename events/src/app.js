const express = require('express');
const db = require("./config/dbConnect.js");
const routes = require ("./routes/index.js");
const cors = require('cors');

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


export default app;