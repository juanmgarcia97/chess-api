import 'reflect-metadata';
import 'dotenv/config';
import express, { json } from 'express';
import { errorHandler } from './infrastructure/middlewares/error-handler';
import GameController from './controllers/game.controller';
import { AppDataSource } from './infrastructure/persistence/db.config';

const app = express();
const port = 3_000;

app.use(json());
app.use('/api', GameController);
app.use(errorHandler);

AppDataSource.initialize().then(() => {
  app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
  });
});
