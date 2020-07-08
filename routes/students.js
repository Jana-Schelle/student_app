const express = require('express');
const router = express.Router();
const Post = require('../db/model'); // db schema

//home
router.get('/home', async (req, res) => {
    try {
        const allPosts = await Post.find();
        res.json(allPosts);
    } catch (error) {
        res.json({
            message: err
        });
    }
});

//new
router.post('/new', async (req, res) => {
    const post = new Post({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        nationality: req.body.nationality
    }); 
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({
            message: err
        });
    }  
});


//
router.post('/add-new-student', async function(req, res){
    const post = new Post({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        nationality: req.body.nationality
    }); 
    try {
        const savedPost = await post.save();
        res.json(savedPost);
    } catch (error) {
        res.json({
            message: err
        });
    } 
})

module.exports = router;