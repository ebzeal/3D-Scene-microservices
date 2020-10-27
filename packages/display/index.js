import express from 'express';
import env from 'dotenv';
import cors from 'cors';

import routes from './src/routes';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

env.config();

const port = process.env.PORT || 4200;

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Display Service started on port ${port}`);
});
