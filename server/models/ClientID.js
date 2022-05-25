const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    clientID:{
        type:String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model("ClientID", ClientSchema);