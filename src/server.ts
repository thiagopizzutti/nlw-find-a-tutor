import express from 'express'
import routes from './routes'
import Freeman from 'morgan'

const app = express()
app.use(Freeman('dev'))
app.use(express.json())
app.use(routes)

app.listen(3333, () =>
  console.log("Hello Mother Fuckers🚀💥🚀💥🚀💥🚀💥🚀💥🚀")
)