import express, { raw } from 'express';
import { getUsers, getUsersById, createUser, updateUser, deleteUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;

