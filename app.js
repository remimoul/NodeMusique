const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0';

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/musiquenode');



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})