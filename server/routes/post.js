const route = require('express').Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const requireLogin = require('../middleware/requireLogin')
route.post('/createpost', requireLogin, (req, res) => {
    const { title, body } = req.body
    if (!title || !body) {
        return res.status(422).json({ error: "Please enter the title and body" })
    }
    console.log(req.user)
    // const post = new Post({
    //     title,
    //     body,
    //     postedBy: req.user
    // })
    // post.save().then(result => {
    //     res.json({ post: result })
    // }).catch(err => console.log(err))
})
module.exports = route 