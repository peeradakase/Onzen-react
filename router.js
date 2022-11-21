import express from 'express';
import { SignupController } from './src/controllers/api/auth/signup.js';
import { LoginController } from './src/controllers/api/auth/login.js'

const router = express.Router();
const api = 'api';

//ทำcall backเตรียมเอาใส่controller
 //url ,callback
router.post(`/${api}/auth/signup` ,SignupController)
router.post(`/${api}/auth/login`,LoginController)
export default router;
