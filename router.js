import express from 'express';

const router = express.Router();
const api = 'api';

//ทำcall backเตรียมเอาใส่controller
 //url ,callback
router.post(`/${api}/auth/signup`, (req,res) => {
  res.send('signup');
})
export default router;
