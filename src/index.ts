import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
const port = 8000

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('yoooo')
})

app.listen(port, () => console.log(`listening on port: ${port}`))
