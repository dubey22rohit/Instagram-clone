const route = require('express').Router()
const mongoose = require('mongoose')
const Post = mongoose.model("Post")
const requireLogin = require('../middleware/requireLogin')

route.get('/allposts',(req,res)=>{
    Post.find().populate("postedBy","name id").then(posts=>{
        res.json({posts})
    }).catch(err=>{
        console.log(err)
    })
})
route.get('/myposts',requireLogin,(req,res)=>{
    Post.find({postedBy : req.user.id}).populate("postedBy","name id").then(myposts=>{
        res.json({myposts})
    }).catch(err=>{
        console.log(err)
    })
})
route.post('/createpost', requireLogin, (req, res) => {
    const { title, body } = req.body
    if (!title || !body) {
        return res.status(422).json({ error: "Please enter the title and body" })
    }
    const post = new Post({
        title,
        body,
        postedBy: req.user
    })
    post.save().then(result => {
        res.json({ post: result })
    }).catch(err => console.log(err))
})
module.exports = route  