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


app.get(['/data/search'], (req: Request, res: Response) => {
  const search = req.query.q;
axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAT1esraP58Q36MlSj25D1oOIXgIwo3xq4&q=${search}&type=video&part=snippet&maxResults=21`)
.then(function (response: Response) {
  // @ts-ignore
  res.send(response.data)
}).catch(function (error: Error) {
  console.log(error)
})
})

app.get(['/data/channels'], (req: Request, res: Response) => {
  const search = req.query.q;
axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAT1esraP58Q36MlSj25D1oOIXgIwo3xq4&part=snippet&q=${search}&type=channel&maxResults=15`)
.then(function (response: Response) {
  // @ts-ignore
  res.send(response.data)
}).catch(function (error: Error) {
  console.log(error)
})
})

// promise.all()
// chain axios calls to return a giant object of the channel info, and the video Id's


// Search Channels
// https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyAT1esraP58Q36MlSj25D1oOIXgIwo3xq4&part=snippet&q=coryx&type=channel&maxResults=15
// routes(app)

// Playlist Search
// https://www.googleapis.com/youtube/v3/playlists?key=AIzaSyAT1esraP58Q36MlSj25D1oOIXgIwo3xq4&part=snippet&channelId=UCiYcA0gJzg855iSKMrX3oHg&maxResults=20

// Video id Search from playlist
// https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=PLxoHK1S7LhWSIsK-CJIsf7H3Jc2A8mOP9&maxResults=10&key=AIzaSyAT1esraP58Q36MlSj25D1oOIXgIwo3xq4


app.listen(PORT, () => {
  console.log(`Application is listening on http://localhost:${PORT}`)
})