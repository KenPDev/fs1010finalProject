import express, { json } from 'express'
import router from './src/routers.js'
import errorHandler from './src/middleware/errorHandler'

const app = express()
const port = 3000

app.use(express.json())

/*MIDDLEWARE TEST
app.use('/time', function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })
*/

/*MIDDLEWARE TEST
app.use('/users', function (req, res, next) {
    console.log('Request Type')
    next()
  }, function (req, res, next) {
    console.log('Request Type:', req.method)
    next()
    })
*/  

/*MIDDLEWARE TEST
app.use('/contact_form/entries', function (req, res, next) {
  readEntries().then((entriesDB) => { 
    if (newContact.name && newContact.email && newContact.phoneNumber && newContact.content) {
    entriesDB.push(newContact)
    writeEntries(entriesDB)
    return res.status(201).json(newContact) }
  next()
})})
*/

app.use(router)
app.use(errorHandler)


export default app.listen(port, function () {
    console.log(`Express server is working on port ${port}.`)
})
