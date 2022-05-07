import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoute from './routes/userRoute.js'
const app = express();


app.use(bodyParser.json({limit: "1mb", extended: true,}));
app.use(bodyParser.urlencoded({limit: "1mb", extended: true,}));
app.use(cors());

app.use('/users', userRoute);

//Store credential in env var instead before deploy
const CONNECTION_URL = 'mongodb+srv://databaseadmin:SecurePassword123@cluster0.o1bgc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((err) => console.log(err.message));