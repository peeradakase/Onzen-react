import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';



const port = process.env.PORT || 3000;

const app = express();

app.listen(3000, () => {
  console.log(`Application started at port ${port}`);
});
