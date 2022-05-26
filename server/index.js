const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const postRoute = require('./routes/posts');
const clientRoute = require('./routes/client');
const multer = require('multer');
const path = require('path');

const app = express();

dotenv.config();
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('charitysite/build')); // serve the static react app
    app.get(/^\/(?!api).*/, (req, res) => { // don't serve api routes to react app
      res.sendFile(path.join(__dirname, './charitysite/build/index.html'));
    });
    console.log('Serving React App...');
  };

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://reachadmin:ZuLuMAN5386@cluster0.az4wji1.mongodb.net/ReachOutKids?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(console.log("Mongo DB Connected")).catch(err=>console.log(err));

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null,req.body.name);
    }
});

const upload = multer({storage:storage});
app.post("/upload", upload.single("file"), (req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.status(200).json("File Uploaded");
});

app.use("/post", postRoute);
app.use("/client", clientRoute);

app.listen(process.env.PORT || 5000, () => {
    
    console.log("Backend is running");
});