import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import bodyParser from 'body-parser';
import router from './router.js';


const port = process.env.PORT || 3000;
const app = express();

//Midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',router);


app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});
