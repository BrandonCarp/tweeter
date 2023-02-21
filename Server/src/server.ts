import express, {NextFunction, Request, Response} from "express";
import routes from "./routes";
import helmet from 'helmet';

const app = express();

app.use(helmet());

const PORT = 8000;

app.use(express.json())


app.get('/', (req, res) => {
  res.sendStatus(200)
})

routes(app)



app.listen(PORT, () => {
  console.log(`Application is listening on http://localhost:${PORT}`)
})