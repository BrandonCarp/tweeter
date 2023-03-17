import express, {NextFunction, Request, Response} from "express";
import routes from "./routes";
const axios = require('axios');

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


app.get(['/'], (req: Request, res: Response) => {
 
  res.sendStatus(200)
})


app.get(['/data'], (req: Request, res: Response) => {
  const search = req.query.q;
axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAT1esraP58Q36MlSj25D1oOIXgIwo3xq4&q=${search}&type=video&part=snippet&maxResults=20`)
.then(function (response: Response) {
  // @ts-ignore
  res.send(response.data)
}).catch(function (error: Error) {
  console.log(error)
})
})
// routes(app)



app.listen(PORT, () => {
  console.log(`Application is listening on http://localhost:${PORT}`)
})