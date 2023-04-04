import express from 'express';
import { Like } from "../Models/Like"

let router = express.Router()

router.put('/likes', async (req, res) => {

    let like = await Like.findOne({where: {
        id: 1
    }})
    like.number = like.number + 1


    await like.save()
    res.json({status : 200, data: {like}})

});

router.get('/likes',  async (req, res) => {

    let like = await Like.findOne({where: {
        id: 1
    }})
    res.json({status : 200, data: {like}})

});


export default router