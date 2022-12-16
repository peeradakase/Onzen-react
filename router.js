import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { SignupController } from './src/controllers/api/auth/signup.js';
import { LoginController } from './src/controllers/api/auth/login.js'
import { OnsenListsController } from './src/controllers/api/onsens/index.js'
import { AdminLoginController } from './src/controllers/api/admin/auth/admin-login.js';
import { AdminSignupController } from './src/controllers/api/admin/auth/admin-signup.js';
import { ListOnsensController } from './src/controllers/api/admin/onsens/index.js';
import { ListTeamsController } from './src/controllers/api/admin/teams/index.js';
import { CreateOnsenController } from './src/controllers/api/admin/onsens/create.js';
import { imageUploader } from './src/middlewares/uploader.js';
import { UpdateOnsenController } from './src/controllers/api/admin/onsens/update.js';
import { ShowOnsenController } from './src/controllers/api/admin/onsens/show.js';
import { DeleteOnsenController } from './src/controllers/api/admin/onsens/delete.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();
const api = 'api';

//ทำcall backเตรียมเอาใส่controller
 //url ,callback
router.post(`/${api}/auth/signup`,SignupController)
router.post(`/${api}/auth/login`,LoginController)
router.get(`/${api}/onsens`, OnsenListsController)

// Admin API
const apiAdminRoute = `/${api}/admin`
// /api/admin/auth/login
router.get(`${apiAdminRoute}/auth/login`, AdminLoginController);
// /api/admin/auth/logout
router.get(`${apiAdminRoute}/auth/logout`, AdminSignupController);

// Onsen API
// /api/admin/onsens
router.get(`${apiAdminRoute}/onsens/:id`, ShowOnsenController);
router.get(`${apiAdminRoute}/onsens`, ListOnsensController);
router.post(`${apiAdminRoute}/onsens`, imageUploader.single('image'), CreateOnsenController);
router.put(`${apiAdminRoute}/onsens/:id`, imageUploader.single('image'), UpdateOnsenController);
router.delete(`${apiAdminRoute}/onsens/:id`, DeleteOnsenController)

// Team API
router.get(`${apiAdminRoute}/teams`, ListTeamsController);


router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

export default router;
