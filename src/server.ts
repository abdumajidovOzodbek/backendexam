import express, { Request, Response } from 'express';
import route from './routes/router';

const app = express();
const port = 5000;
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(route);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});