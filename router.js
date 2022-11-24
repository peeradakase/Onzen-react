import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { SignupController } from './src/controllers/api/auth/signup.js';
import { LoginController } from './src/controllers/api/auth/login.js'
import { OnsenListsController } from './src/controllers/api/onsens/index.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
const api = 'api';

//ทำcall backเตรียมเอาใส่controller
 //url ,callback
router.post(`/${api}/auth/signup`,SignupController)
router.post(`/${api}/auth/login`,LoginController)
router.get(`/${api}/onsens`, OnsenListsController)

router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

export default router;
