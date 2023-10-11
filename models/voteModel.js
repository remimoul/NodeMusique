const mongoose= require('mongoose');
const Schema = mongoose.Schema;

let voteSchema = new Schema({
    rates: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Votes', voteSchema);