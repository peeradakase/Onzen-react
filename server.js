import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser';
import router from './router.js';
import { ironSession} from 'iron-session/express'

const port = process.env.PORT || 3000;
const app = express();

//Midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(ironSession({
  cookieName: 'iron-session',
  password: process.env.SECRET_COOKIE_PASSWORD,
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax'
  }
}))
app.use(cors());
app.use('/',router);



app.listen(port, () => {
  console.log(`Application started at port ${port}`);
});
