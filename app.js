const express = require('express');
const app = express();
const port = 3003;
const host = '0.0.0.0';

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/musiquenode');

app.use(express.urlencoded());
app.use(express.json());


const postMusic = require('./routes/musicRoute');
app.use('/musics',postMusic);

const voteRoute= require('./routes/voteRoute');
app.use('/',voteRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})