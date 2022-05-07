import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: String,
    cfUsername: String,
    atcUsername: String,
    vjUsername: String,
});

const User = mongoose.model('User', userSchema);

export default User;