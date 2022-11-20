import express from 'express';
import { SignupController } from './src/controllers/api/auth/signup.js'

const router = express.Router();
const api = 'api';

//ทำcall backเตรียมเอาใส่controller
 //url ,callback
router.post(`/${api}/auth/signup` ,SignupController)
export default router;
