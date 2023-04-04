import express, {NextFunction, Request, Response} from "express";
require("dotenv").config();
import { PlaylistItemsResponse } from "./interface";
import { AxiosResponse } from "axios";
const axios = require('axios');

const cors = require('cors');
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;


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
axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${search}&type=video&part=snippet&maxResults=21`)
.then(function (response: AxiosResponse<PlaylistItemsResponse[]>) {
 
  res.send(response.data)
}).catch(function (error: Error) {
  console.log(error)
})
})

app.get(['/data/channels'], (req: Request, res: Response) => {
  const search = req.query.q;
axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&part=snippet&q=${search}&type=channel&maxResults=15`)
.then(function (response: AxiosResponse<PlaylistItemsResponse[]>) {
  
  res.send(response.data)
}).catch(function (error: Error) {
  console.log(error)
})
})

// Above is fine below  I need to on click fetch playlist of channel
// then map through results and get video Id of each.
// map through each video result and pass in data of videoId search

app.get(['/data/channels/videos'], (req: Request, res: Response) => {
  const search = req.query.q;
axios.get(`https://www.googleapis.com/youtube/v3/playlists?key=${YOUTUBE_API_KEY}&part=snippet&channelId=${search}&maxResults=5`)
.then(function (response: AxiosResponse<PlaylistItemsResponse[]>) {
  //@ts-ignore
   const videos = Promise.all(response.data.items.map(fetchVideos));
   console.log(videos)
   
  
   
  //@ts-ignore
  // res.send(videos)
}).catch(function (error: Error) {
  // console.log(error)
})
})

const fetchVideos = async (video: any, res: Response) => {
  const id = await Promise.all([
     axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?
     
    part=snippet,contentDetails&playlistId=${video.id}9&maxResults=10&key=${YOUTUBE_API_KEY}`)
     .then(function (response: AxiosResponse<PlaylistItemsResponse[]>){
      return id;
     })
  ]) 
}

// res.data.items.id
// Search Channels
// Click On desired channel,  which adds it to another state AND resets the previous search
// On that Click we fetch the playlist data
// then we loop through all the videos for their video id


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