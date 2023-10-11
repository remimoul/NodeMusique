const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    rates: {
        type: Number,
        required: true
    }


});

module.exports = mongoose.model('Votes', voteSchema);