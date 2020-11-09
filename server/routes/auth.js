const route = require('express').Router()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = mongoose.model('User')
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../config/keys')
const requireLogin = require("../middleware/requireLogin")
route.get('/protected', requireLogin, (req, res) => {
    res.send("Hello User")
})
route.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(422).json({ Error: "Please fill out all the fields" })
    }
    User.findOne({ email: email }).then((savedUser) => {
        if (savedUser) {
            res.status(422).json({ Error: "User with this email already exists" })
        }
        bcrypt.hash(password, 12).then((hashedPass) => {
            const user = new User({
                email: email,
                password: hashedPass,
                name: name
            })
            user.save().then((user) => {
                res.json({ message: "User Created Successfully" })
            }).catch((err) => console.log(err))
        }).catch((err) => { console.log(err) })
    }).catch(err => console.log(err))
})
route.post('/login', (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(422).json({ error: "Please enter Email and Password" })
    }
    User.findOne({ email: email }).then((savedUser) => {
        if (!savedUser) {
            return res.status(422).json({ error: "Please Sign In First" })
        }
        bcrypt.compare(password, savedUser.password).then((doMatch) => {
            if (doMatch) {
                //res.json({ message: "Authentication Successful" })
                const token = jwt.sign({ id: savedUser._id }, JWT_SECRET)
                res.json({ token: token })
            } else {
                return res.status(422).json({ error: "Invalid Email or Password" })
            }
        }).catch((err) => console.log(err))
    }).catch(err => { console.error(err) })
})
module.exports = route