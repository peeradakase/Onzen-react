import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import router from './router.js';


const port = process.env.PORT || 3000;
const app = express();


app.use('/',router);


app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});
