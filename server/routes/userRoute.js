import express from 'express';
import {createUser, getUsers} from '../controllers/userController.js';
import {getUserRating} from '../controllers/cfRatings.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/ratings/:uid', getUserRating);  // http://localhost:5000/users/ratings
export default router;