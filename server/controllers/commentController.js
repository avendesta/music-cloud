const dao = require('../dao/commentDao')
//subscription

async function getByMusicId(req, res) {
    const musicId = req.params.id;

    return res.status(200).json(await dao.getByMusicId(musicId));
}

async function addComment(req,res){
    const comment = req.body;
    return res.status(200).json(await dao.addComment(comment));

}


 module.exports ={ getByMusicId,
addComment 
};
