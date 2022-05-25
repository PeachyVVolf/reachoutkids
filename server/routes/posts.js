const router =require('express').Router();
const Post = require('../models/Posts');

// CREATE NEW POST
router.post('/', async (req, res, next) => {
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE POST
router.delete('/:id', async(req,res,next)=>{
    try 
    {
        const post = await Post.findById(req.params.id);
        try {
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("Post Deleted.")
        } catch (err) {
            res.status(500).json(err);
        }
    } catch (err) {
        res.status(500).json(500);
    }
});

// GET POST
router.get('/:id', async(req,res,next)=>{
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET ALL POSTS
router.get('/', async(req,res,next)=>{
    try 
    {
        let posts;
        posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;