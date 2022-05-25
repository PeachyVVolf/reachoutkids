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

app.use("/images", express.static(path.join(__dirname, "/images")));

mongoose.connect(process.env.MONGO_URL, {
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
    res.status(200).json("File Uploaded");
});

app.use("/post", postRoute);
app.use("/client", clientRoute);


app.listen("5000", () => {
    console.log("Backend is running");
});