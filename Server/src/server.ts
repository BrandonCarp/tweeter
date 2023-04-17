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

const fetchVideos = async (playlistData: any) => {
  const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${playlistData.id}&maxResults=10&key=${YOUTUBE_API_KEY}`)
   return res;
 }

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
//@ts-ignore

// const getItems = async id => await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${id}&maxResults=10&key=${YOUTUBE_API_KEY}`);


// app.get(['/data/channels/videos'], async (req: Request, res: Response) => {
//   const search = req.query.q;
//  axios.get(`https://www.googleapis.com/youtube/v3/playlists?key=${YOUTUBE_API_KEY}&part=snippet&channelId=${search}&maxResults=5`)
// .then (function (response: any)  {
//   const videoData =  response.data;
//   //@ts-ignore
//   const videos = await Promise.all(videoData.map(video => fetchVideos(video.id)));
// //  return res.send(videos)

// console.log(videos)
  
// }).catch(function (error: Error) {
//   console.log(error)
// })
// })

  // @ts-ignore
  // const getItems = async id => await axios.get(
  //   `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${id}&maxResults=10&key=${YOUTUBE_API_KEY}`
  // );


app.get(["/data/channels/videos"], async (req: Request, res: Response) => {
  const search = req.query.q;
  //@ts-ignore
  const getItems = async id => await axios.get(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${id}&maxResults=10&key=${YOUTUBE_API_KEY}`
  );
  try {
     const results = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlists?key=${YOUTUBE_API_KEY}&part=snippet&channelId=${search}&maxResults=5`
    )
    const resultItems = results.data.items;
    // @ts-ignore
    const videos = await Promise.all(resultItems.map(video => getItems(video.id)));
    
    console.log(videos)
     res.send(videos);
  } catch {
    // send error response
  }
});

app.listen(PORT, () => {
  console.log(`Application is listening on http://localhost:${PORT}`)
})


