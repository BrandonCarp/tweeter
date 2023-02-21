import { Express, Request, Response, NextFunction} from "express"
const axios = require('axios');

function getInstaHandler(req: Request, res: Response, next: NextFunction){
  //@ts-ignore
  axios.get('https://rickandmortyapi.com/api/')
  .then(function (response: Response) {
    // @ts-ignore
    res.send(response.data)
  
    
  }).catch(function (error: Error) {
    console.log(error)
  })
}

export default getInstaHandler;