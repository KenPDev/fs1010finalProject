import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import verifyToken from './middleware/jwtVerify'
import entriesDB from '../data/entries.json'
import { readEntries, writeEntries, readUsers, writeUsers } from './middleware/jsonHandler'
import contactList from './contact_form.js'
import usersIDs from './usersIDs_form.js'
import usersDB from '../data/users.json'

const router = express.Router()
const jwt = require('jsonwebtoken')
const privateKey = "shhhhh"
const bcrypt = require("bcrypt")
const saltRounds = 10

router.post('/contact_form/entries', function (req, res) {
    const newContact = {
        id: uuidv4(),
        name: req.body.name,
        email: req.body.email,
        content: req.body.content
    }
    let errors = []
    readEntries().then((entriesDB) => { 
        if (newContact.name && newContact.email && newContact.content) {
            entriesDB.push(newContact)
            writeEntries(entriesDB)
            return res.status(201).json(newContact)
        }
        else {
            if (!newContact.name) {
                errors.push("name") }
            if (!newContact.email) {
                errors.push("email") }
            if (!newContact.content) {
            errors.push("content") }
            return res.status(400).json({message: "validation error", invalid: (errors)})    }
        })})
   
router.post('/users', (req, res) => {
    const userWithPassword
     = {
        id: uuidv4(),
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }
    const userNoPassword = {
        id: userWithPassword.id,
        name: req.body.name,
        email: req.body.email
    }
    let errors = []
    readUsers().then(async (usersDB) => {
        if (userWithPassword.name && userWithPassword.password && userWithPassword.email) {
            let encryptedPassword = await bcrypt.hash(userWithPassword.password, saltRounds)
              userWithPassword.password = encryptedPassword
            usersDB.push(userWithPassword)
        writeUsers(usersDB)
        return res.status(201).json(userNoPassword) }
            else {
            if (!userWithPassword.name) {
            errors.push("name") }
            if (!userWithPassword.password) {
            errors.push("password")
            if (!userWithPassword.email) {
            errors.push("email") }
            } 
            return res.status(400).json({message: "validation error", invalid: (errors)}) }
        })})
        
router.post('/auth', async (req, res) => {
    const userAuth = {
        email: req.body.username, 
        password: req.body.password
    }
    let encryptedUsers = await readUsers()  
    let storedUser = encryptedUsers.find(element => element.email == userAuth.email)
    let passwordCompare = await bcrypt.compare(userAuth.password, storedUser.password)
    console.log(userAuth)
    console.log(storedUser)
    if (passwordCompare != true)
        return res.status(401).json()
    else {
        const token = jwt.sign(userAuth, privateKey)
        return res.status(201).json(token) 
    }
})
        
router.get('/contact_form/entries', verifyToken, (req, res) => {
    readEntries().then((items) => {
    return res.status(201).json(entriesDB) })
        })

router.get('/contact_form/entries/:id', verifyToken, (req, res) => {
    const userIdReq = req.params.id
    const requestedRecord = entriesDB.find(element => element.id == userIdReq)

        if (requestedRecord)
        return res.status(200).json(requestedRecord) 
            else {
            return res.status(200).json(`message: "entry ${userIdReq} not found"`) }
        })


export default router
