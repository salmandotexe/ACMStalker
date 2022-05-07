import UserCFData from "../models/UserCFdata.js";
import axios from 'axios';
import mongoose from "mongoose";

export const getUserRating = async (req, res) => {
    try {
        const {uid} = req.params;
        if(! mongoose.Types.ObjectId.isValid(uid)) return res.status(404).send("Invalid id");
        
        const url = 'https://codeforces.com/api/user.rating?handle='+uid;

        axios.get(url).then((cfresponse) => {
            const results = cfresponse.data.status =='OK'? cfresponse.data.result: [];
            //console.log(results);
            res.status(201).json({ratings: results});
        });
    } catch (error) {
        res.status(409).json(error);
    }
}