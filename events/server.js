import app from "./src/app.js";
import cors from 'cors';


 const port = process.env.PORT || 3001;

 
//app.use(cors());

// //app.use(cors());
 app.listen(port, () => {
   console.log(`Servidor escutando em http://localhost:${port}`)
})