import mongoose from 'mongoose';

const userCFDataSchema = mongoose.Schema({
    username: String,
    cfUsername: String,
    ratings: [],
});

const UserCFData = mongoose.model('UserCFData', userCFDataSchema);

export default UserCFData;