const router =require('express').Router();
const Client = require('../models/ClientID');

// UPDATE CLIENT
router.put('/', async (req, res, next) => {
    try {
        const client = await Client.find();
        const newClient = await Client.findOneAndUpdate(client[0], {
            $set: req.body
        }, {new:true})
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(newClient);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET CLIENT
router.get('/', async(req,res,next)=>{
    try 
    {
        let posts;
        posts = await Client.find();
        res.header("Access-Control-Allow-Origin", "*");
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;