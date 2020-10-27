import express from 'express';
import env from 'dotenv';
import cors from 'cors';

import routes from './src/routes';

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

env.config();

const port = process.env.PORT || 3000;

app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
