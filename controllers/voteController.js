const { ObjectId } = require("mongodb");
const Vote = require("../models/voteModel");
const Music = require("../models/musicModel");



exports.listAllVotes = async (req,res) =>{

    try {
        const vote = await Vote.find({music_id: req.params.id_music});
        res.status(200);
        res.json(vote);
    }catch (error){
        res.status(500);
        console.log(error);
        res.json({message : 'Erreur Serveur'})
    }

};


exports.createAVotes = async (req,res)=>{

    try {
        const music = await Music.findById(req.params.id_music);
        const newVote = new Vote({...req.body, music_id: req.params.id_music});

        // Obtenir la date actuelle
        const currentDate = new Date().toISOString().slice(0, 10);

        // Obtenir la date de création de la musique
        const musicDate = music.created_at.toISOString().slice(0, 10);

        try {
            const vote = await newVote.save();
            // Obtenir la date de création du vote
            const voteDate = vote.created_at.toISOString().slice(0, 10);

            if (currentDate === voteDate && currentDate === musicDate){
                res.status(201);
                res.json(vote);
            }else{
                res.json({message : 'Seuls les votes soumis le même jour que la création de la musique sont autorisés.'});
            }

            console.log(newVote);
        }catch (error){
            res.status(500);
            console.log(error);
            res.json({message : 'Veuillez donner une note entre 1 et 5 Merci'});
        }


    }catch (error){

        console.log(error);
        res.status(500).json({message : 'vote inexistant'});
    }



};

exports.getAVotes = async (req,res)=> {

    try{
        const vote =await Vote.findById(req.params.id_votes);
        if (vote === null){
            res.status(204);
            res.json({ message: "Vote non trouvé ooo" });
        }else{
            res.status(200);
            res.json(vote);
        }

    }  catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur" });
    }
};

exports.updateAVotes = async (req,res)=> {

    try {
        const vote = await Comment.findByIdAndUpdate(req.params.id_votes, req.body,{new: true});
        res.status(200);
        res.json(vote);
    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({message : 'Erreur Serveur'})
    }
};

exports.deleteAVotes = async (req,res)=> {

    try {

        if (await Vote.findByIdAndDelete(req.params.id_votes)===null){

            res.status(204).json({ message: "Vote non trouvé" });
        } else {
            await Vote.findByIdAndDelete(req.params.id_votes);
            res.status(200);
            res.json({ message: "Vote supprimer" });

        }

    } catch (error) {
        res.status(500);
        console.log(error);
        res.json({ message: "Erreur serveur" });
    }
};