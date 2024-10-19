import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { getApiUrl, getPort } from '#app/config.js'

const app = express()
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/health', (_, res) => {
  res.status(200).send('OK')
})

app.get('api/items', (_, res) => {
  res.status(200).json([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ])
})

app.listen(getPort(), () => {
  console.log(`Server listening at ${getApiUrl()}`)
})
