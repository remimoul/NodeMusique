const express = require('express');
const app = express();
const port = 3000;
const host = '0.0.0.0';

const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/apinode');

app.use(express.urlencoded({extended:true}));
app.use(express.json());


const postRoute = require('./routes/postRoute');
//postRoute(app);
app.use('/posts',postRoute);

const commentRoute = require('./routes/commentRoute');
app.use('/',commentRoute);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})