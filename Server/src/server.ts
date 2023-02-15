import express from 'express'

const server = express()
const PORT = 8000;
// Updates yes
server.get('/', (req, res) => {
return res.send('Hello Sir')
});

server.listen(PORT, () => {
  console.log(`Application listening at http://localhost:${PORT}`)
});