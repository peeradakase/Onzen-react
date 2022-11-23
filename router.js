import express from 'express';
import { SignupController } from './src/controllers/api/auth/signup.js';
import { LoginController } from './src/controllers/api/auth/login.js'
import { OnsenListsController } from './src/controllers/api/onsens/index.js'

const router = express.Router();
const api = 'api';

//ทำcall backเตรียมเอาใส่controller
 //url ,callback
router.post(`/${api}/auth/signup`,SignupController)
router.post(`/${api}/auth/login`,LoginController)
router.get(`/${api}/onsens`, OnsenListsController)
export default router;
