import express, { json } from 'express'
import router from './src/routers.js'
import errorHandler from './src/middleware/errorHandler'

const app = express()
const port = 3001

app.use(express.json())
app.use(router)
app.use(errorHandler)

export default app.listen(port, function () {
    console.log(`Express server is working on port ${port}.`)
})
