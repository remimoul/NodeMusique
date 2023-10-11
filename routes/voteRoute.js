const express  = require('express');
const router = express.Router();

const commentController = require('../controllers/voteController');

// /posts
router
    .route('/musics/:id_music/votes')
    .get(voteController.listAllVotes)
    .post(voteController.createAVotes);

router
    .route('/:id_votes')
    .get(voteController.getAVotes)
    .put(voteController.updateAVotes)
    .delete(voteController.deleteAVotes);


module.exports = router;