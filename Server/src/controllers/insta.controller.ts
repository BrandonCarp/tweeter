import { Express, Request, Response, NextFunction} from "express"
const axios = require('axios');

function getInstaHandler(req: Request, res: Response, next: NextFunction)  {
  //@ts-ignore
  axios.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyAT1esraP58Q36MlSj25D1oOIXgIwo3xq4&type=video&part=snippet')
  .then(function (response: Response) {
    // @ts-ignore
    res.send(response.data)
  }).catch(function (error: Error) {
    console.log(error)
  })
}

export default getInstaHandler;

// Key
// AIzaSyAT1esraP58Q36MlSj25D1oOIXgIwo3xq4
// https://www.googleapis.com/youtube/v3/search?key=

// https://www.youtube.com/watch?v=${videoId}
