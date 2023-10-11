const express = require('express');
const app = express();
const port = 3003;
const host = '0.0.0.0';

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/musiquenode');

app.use(express.urlencoded());
app.use(express.json());


const postMusic = require('./routes/musicRoute');
//postRoute(app);
app.use('/music',postMusic);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})