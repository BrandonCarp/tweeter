import express, {NextFunction, Request, Response} from "express";
import routes from "./routes";

const cors = require('cors');


const app = express();
app.use(cors({
  origin: `http://localhost:3000`
}))





const PORT = 8000;

app.use(express.json())

app.use(function (req: Request, res: Response, next: NextFunction) {
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site')
  next()
})




app.get('/', (req, res) => {
  res.sendStatus(200)
})

routes(app)



app.listen(PORT, () => {
  console.log(`Application is listening on http://localhost:${PORT}`)
})