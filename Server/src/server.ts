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

// const fetchVideos = async (playlistData: any) => {
//   const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistData.id}&maxResults=10&key=${YOUTUBE_API_KEY}`)
//    return res;
//  }

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

// BElow

app.get(['/data/channels/videos'],  (req: Request, res: Response) => {
  const search = req.query.q;
 axios.get(`https://www.googleapis.com/youtube/v3/playlists?key=${YOUTUBE_API_KEY}&part=snippet&channelId=${search}&maxResults=5`)
.then(function (response: AxiosResponse<PlaylistItemsResponse[]>) {
  const videos =  Promise.all(response.results.items.map(video => getItems(video.id)));

  
}).catch(function (error: Error) {
  console.log(error)
})
})


// app.get(['/data/channels/videos'], async (req: Request, res: Response) => {
//   const search = req.query.q;
//   try {
//     const results = await axios.get(`https://www.googleapis.com/youtube/v3/playlists?key=${YOUTUBE_API_KEY}&part=snippet&channelId=${search}&maxResults=5`);
//     //@ts-ignore
//     const getItems = async id => await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${id}&maxResults=10&key=${YOUTUBE_API_KEY}`);
//     //@ts-ignore
//     const videos = await Promise.all(results.items.map(video => getItems(video.id)));
//     return res.send(videos);
//   } catch {
//     console.log('Error')
//   }
// });

// const [videos] = axios.get(`https://www.googleapis.com/youtube/v3/playlists?key=${YOUTUBE_API_KEY}&part=snippet&channelId=${search}&maxResults=5`)
// .then((response: AxiosResponse<any>) => (
     
//   Promise.all(response.data.items.map((video: any) => fetchVideos(video)))
// ))
// res.send(videos)




  //  const fetchData = async (query: UserListProps) => {
  //   const res = await axios.get(
  //     `http://localhost:8000/data/search/?q=${query}`
  //   );

  //   setApiState(res.data.items);
  //   console.log(res.data);
  // };


// type of respone may be incorrect ?

// const fetchVideoId = async (video: any, res: Response) => {
//    const [data] = await Promise.all([
//     axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${video.id}9&maxResults=10&key=${YOUTUBE_API_KEY}`)
//    ])
//    return data;
// }
// const videos = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${video.id}9&maxResults=10&key=${YOUTUBE_API_KEY}`);
//   return videos;

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